import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "symmetry",
  name: "Symmetry",
  description:
    "Symmetry is an on-chain asset management protocol enabling creation and management of token baskets, indices, and actively managed funds.",
  defiLlamaId: "symmetry",
  links: {
    website: "https://www.symmetry.fi/",
    discord: "http://discord.gg/ahdqBRgE7G",
    telegram: "https://t.me/symmetry_fi",
    twitter: "https://x.com/symmetry_fi",
    github: "https://github.com/symmetry-protocol",
    medium: "https://symmetry-fi.medium.com/",
    documentation: "https://docs.symmetry.fi/",
  },
  tags: ["dapp", "defi"],
};

const contract = {
  name: "Symmetry",
  address: "2KehYt3KsEQR53jYcxjbQp2d2kCp4AkuQW68atufRwSr",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "symmetry-main",
  name: "Symmetry",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
