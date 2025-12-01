import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';
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
  name: 'Offer',
  address: '85iDfUvr3HJyLM2zcq5BXSiDvUWfw6cSE1FfNBo8Ap29',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop',
  address: 'bMersFdXPWiRzjqmbviCRMvwvN1FpRmATaqrF894CbU',
  platformId: platform.id,
};

const recordContract = {
  name: 'Records Program',
  address: 'HP3D4D1ZCmohQGFVms2SS4LCANgJyksBf5s1F77FuFjZ',
  platformId: platform.id,
};

const nameServiceContract = {
  name: 'Name Service',
  address: 'namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX',
  platformId: platform.id,
};

const registrarContract = {
  name: 'Registrar',
  address: 'jCebN34bUfdeUYJT13J1yG16XWQpt5PDx6Mse9GUqhR',
  platformId: platform.id,
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

const offerService: ServiceDefinition = {
  id: `${platform.id}-offers`,
  name: 'Offers',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const mainService: ServiceDefinition = {
  id: `${platform.id}-domaine-name`,
  name: 'Name Service',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      recordContract.address,
      nameServiceContract.address,
      registrarContract.address,
    ]),
};

export const services: ServiceDefinition[] = [
  offerService,
  airdropService,
  mainService,
];
export default services;
