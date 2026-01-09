import { NetworkId, PlatformRaw } from "../types";

export const platform: PlatformRaw = {
  id: "parrot",
  name: "Parrot",
  links: {
    website: "https://parrot.fi/",
    twitter: "https://x.com/gopartyparrot",
    github: "https://github.com/gopartyparrot",
  },
  tags: ["dapp", "lending", "vault", "defi"],
  isDeprecated: true,
  tokens: [
    "Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS",
    "yPRTUpLDftNej7p6QofNYgRArRXsm6Mvkzohj4bh4WM",
    "PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44",
  ],
};

const lendingContract = {
  name: "Lending",
  address: "HajXYaDXmohtq2ZxZ6QVNEpqNn1T53Zc9FnR1CnaNnUf",
  networkId: NetworkId.solana,
};

export const lendingService = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [lendingContract],
};

export const services = [lendingService];
