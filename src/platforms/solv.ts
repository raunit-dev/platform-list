import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solv",
  name: "Solv",
  description: "Bitcoin liquid staking protocol on Solana",
  tags: ["dapp", "defi", "bitcoin"],
  defiLlamaId: "solv-protocol",
  links: {
    website: "https://solv.finance/",
    twitter: "https://x.com/SolvProtocol",
    documentation: "https://docs.solv.finance/",
    github: "https://github.com/solv-finance",
  },
  tokens: [
    "soLvpPEDkN8D1Wgjezrb1oj4WjGtj17vynGm6t3jah6",
    "SoLvHDFVstC74Jr9eNLTDoG4goSUsn1RENmjNtFKZvW",
  ],
  addedAt: 1764158400000,
};

export const contract = {
  name: "Main",
  address: "soLv1S6GsAEVEnXmVY3oz6GtrNJteQ28iTyRQrHXvkz",
  networkId: NetworkId.solana,
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-btc`,
  name: "Main",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [mainService];
