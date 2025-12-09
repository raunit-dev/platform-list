import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "goki",
  name: "Goki",
  tags: ["tool", "dapp"],
  description:
    "Goki is a Multisig tool that allows users to create and manage multisig wallets.",
  links: {
    website: "https://goki.so/",
    twitter: "https://x.com/GokiProtocol",
    github: "https://github.com/GokiProtocol",
  },
};

const contract = {
  name: "Multisig",
  address: "GokivDYuQXPZCWRkwMhdH2h91KpDQXBEmpgBgs55bnpH",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-multisig`,
  name: "Multisig",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
