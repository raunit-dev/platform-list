import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "sns",
  name: "SNS",
  description: "Web3 Identity for Everyone",
  defiLlamaId: "solana-name-service",
  tags: ["tool", "dapp"],
  links: {
    website: "https://www.sns.id/",
    discord: "https://discord.com/invite/bonfida-778660171265474572",
    telegram: "https://t.me/snsdotsol",
    twitter: "https://twitter.com/sns",
    github: "https://github.com/Bonfida",
    documentation: "https://docs.sns.id/collection",
  },
  tokens: ["EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp"],
};
const contract = {
  name: "Offer",
  address: "85iDfUvr3HJyLM2zcq5BXSiDvUWfw6cSE1FfNBo8Ap29",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "bMersFdXPWiRzjqmbviCRMvwvN1FpRmATaqrF894CbU",
  networkId: NetworkId.solana,
};

const recordContract = {
  name: "Records Program",
  address: "HP3D4D1ZCmohQGFVms2SS4LCANgJyksBf5s1F77FuFjZ",
  networkId: NetworkId.solana,
};

const nameServiceContract = {
  name: "Name Service",
  address: "namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX",
  networkId: NetworkId.solana,
};

const registrarContract = {
  name: "Registrar",
  address: "jCebN34bUfdeUYJT13J1yG16XWQpt5PDx6Mse9GUqhR",
  networkId: NetworkId.solana,
};

const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

const offerService: ServiceRaw = {
  id: `${platform.id}-offers`,
  name: "Offers",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const mainService: ServiceRaw = {
  id: `${platform.id}-domaine-name`,
  name: "Name Service",
  platformId: platform.id,
  contractsRaw: [nameServiceContract, registrarContract, recordContract],
};

export const services: ServiceRaw[] = [
  mainService,
  airdropService,
  offerService,
];
