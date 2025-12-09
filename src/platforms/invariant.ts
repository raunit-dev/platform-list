import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "invariant",
  name: "Invariant",
  description:
    "Invariant was a concentrated liquidity AMM offering capital-efficient liquidity provision with customizable price ranges.",
  links: {
    website: "https://invariant.app/",
    twitter: "https://x.com/invariant_labs",
    discord: "https://discord.gg/invariant",
    github: "https://github.com/invariant-labs",
    documentation: "https://docs.invariant.app/",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const mainContract = {
  name: "Main",
  address: "HyaB3W9q6XdA5xwpU4XnSZV94htfmbmqJXZcEbRaJutt",
  networkId: NetworkId.solana,
};

export const mainService = {
  id: `${platform.id}-main`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [mainContract],
};

export const services = [mainService];
