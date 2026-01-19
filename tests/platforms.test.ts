import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { platforms } from "../src/index";
import { PlatformSchema } from "./schemas";

describe("Platforms", () => {
  it("should have a length greater than 0", () => {
    expect(platforms.length).toBeGreaterThan(0);
  });

  it("should have a length less than 10000", () => {
    expect(platforms.length).toBeLessThan(10000);
  });

  it("should match the PlatformSchema", () => {
    platforms.forEach((platform) => {
      try {
        PlatformSchema.parse(platform);
      } catch (e) {
        throw new Error(
          `Platform does not match the schema (${platform.id}): ${e}`,
        );
      }
    });
  });

  // test for duplicates
  it("should not have duplicate ids", () => {
    const ids = platforms.map((platform) => platform.id);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    expect(duplicates).toEqual([]);
  });

  // test that all platforms have a webp image in the img folder
  it("should have webp images for all platforms", () => {
    const imgDir = join(__dirname, "..", "img");
    const missingImages = platforms
      .map((platform) => ({
        id: platform.id,
        hasImage: existsSync(join(imgDir, `${platform.id}.webp`)),
      }))
      .filter((result) => !result.hasImage);

    if (missingImages.length > 0) {
      throw new Error(
        `Missing webp images for platforms: ${missingImages
          .map((p) => p.id)
          .join(", ")}`,
      );
    }
  });

  // verify that the img folder has no extra images
  it("should not have extra images in the img folder", () => {
    const imgDir = join(__dirname, "..", "img");
    const extraImages = readdirSync(imgDir, { withFileTypes: true })
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name)
      .filter((file) => !platforms.some((p) => file === `${p.id}.webp`));

    if (extraImages.length > 0) {
      throw new Error(`Extra images in the img folder: ${extraImages}`);
    }
  });

  // test that platformToken is not in tokens array and vice versa
  it("should not have platformToken duplicated in tokens array", () => {
    const platformsWithDuplicates = platforms
      .filter((platform) => {
        if (!platform.platformToken || !platform.tokens) {
          return false;
        }
        return platform.tokens.includes(platform.platformToken);
      })
      .map((platform) => platform.id);

    if (platformsWithDuplicates.length > 0) {
      throw new Error(
        `Platforms have platformToken duplicated in tokens array: ${platformsWithDuplicates.join(", ")}`,
      );
    }
  });
  // test that platforms does not have duplicate tags
  it("should not have duplicate tags", () => {
    const platformsWithDuplicates = platforms
      .filter((platform) => {
        if (!platform.tags) {
          return false;
        }
        const uniqueTags = new Set(platform.tags);
        return uniqueTags.size !== platform.tags.length;
      })
      .map((platform) => platform.id);

    if (platformsWithDuplicates.length > 0) {
      throw new Error(
        `Platforms have duplicate tags: ${platformsWithDuplicates.join(", ")}`,
      );
    }
  });
});
