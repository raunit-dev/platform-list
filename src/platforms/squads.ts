import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "squads",
  name: "Squads",
  description:
    "Squads is a multisig and smart account protocol for secure team treasury management, program upgrades, and on-chain governance.",
  tags: ["tool", "dapp"],
  links: {
    website: "https://squads.so/",
    discord: "https://discord.gg/squads",
    twitter: "https://x.com/SquadsProtocol",
    github: "https://github.com/Squads-Protocol",
    documentation: "https://docs.squads.so/main/basics/welcome-to-squads",
  },
};

const contract = {
  name: "Multisig V4",
  address: "SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-multisig`,
  name: "Multisig",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
