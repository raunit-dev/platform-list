import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "tiplink",
  name: "TipLink",
  description:
    "TipLink is a lightweight wallet that enables sending crypto, stablecoins and NFTs via shareable links, making digital asset transfers as simple as sharing a URL.",
  links: {
    website: "https://tiplink.io/",
    twitter: "https://x.com/TipLinkOfficial",
    documentation: "https://docs.tiplink.io/",
  },
  tags: ["dapp", "wallet"],
};

export const giftCardService: ServiceRaw = {
  id: `${platform.id}-gift-card`,
  name: "Gift Card",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [giftCardService];
