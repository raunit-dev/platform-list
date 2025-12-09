import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "katana",
  name: "Katana",
  description:
    "Katana was a yield generation protocol offering automated options strategies including covered calls and put selling.",
  links: {
    website: "https://katana.so/",
  },
  tags: ["dapp"],
  isDeprecated: true,
};

const putSellingContract = {
  name: "Put Selling",
  address: "7h7uYbDBZkiTvWLmMsWNAEs2VVNqfV56uSfP9hbjJMP8",
  networkId: NetworkId.solana,
};

const coveredCallContract = {
  name: "Covered Call",
  address: "1349iiGjWC7ZTbu6otFmJwztms122jEEnShKgpVnNewy",
  networkId: NetworkId.solana,
};

export const putSellingService = {
  id: `${platform.id}-put-selling`,
  name: "Put Selling",
  platformId: platform.id,
  contractsRaw: [putSellingContract],
};

export const coveredCallService = {
  id: `${platform.id}-covered-call`,
  name: "Covered Call",
  platformId: platform.id,
  contractsRaw: [coveredCallContract],
};

export const services = [putSellingService, coveredCallService];
