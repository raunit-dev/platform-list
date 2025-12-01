import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "debridge",
  name: "deBridge",
  description:
    "Cross-chain interoperability and liquidity transfer protocol that allows the decentralized transfer of arbitrary data and assets between various blockchains.",
  defiLlamaId: "debridge",
  links: {
    website: "https://debridge.finance/",
    discord: "https://discord.gg/debridge",
    telegram: "https://t.me/deBridge_finance",
    twitter: "https://x.com/deBridgeFinance",
    github: "https://github.com/debridge-finance/",
    documentation: "https://docs.debridge.finance/",
  },
  tokens: ["DBRiDgJAMsM95moTzJs7M9LnkGErpbv9v6CUR1DXnUu5"],
  tags: ["tool", "bridge", "dapp"],
};

const transferContract = {
  name: 'DeBridge',
  address: 'DEbrdGj3HsRsAzx6uH4MKyREKxVAfBydijLUF3ygsFfh',
  platformId: platform.id,
};

const aidropContract = {
  name: 'Airdrop',
  address: 'DBrLFG4dco1xNC5Aarbt3KEaKaJ5rBYHwysqZoeqsSFE',
  platformId: platform.id,
};
const vaultContract = {
  name: 'Vault',
  address: 'DeDRoPXNyHRJSagxZBBqs4hLAAM1bGKgxh7cyfuNCBpo',
  platformId: platform.id,
};

const sourceContract = {
  name: 'Bridge',
  address: 'src5qyZHqTqecJV4aY6Cb6zDZLMDzrDKKezs22MPHr4',
  platformId: platform.id,
};

const destContract = {
  name: 'Bridge',
  address: 'dst5MGcFPoBeREFAA5E3tU5ij8m5uVYwkzkSAbsLbNo',
  platformId: platform.id,
};

const transferService: ServiceDefinition = {
  id: `${platform.id}-transfer`,
  name: 'Transfer',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [transferContract],
};

const vaultService: ServiceDefinition = {
  id: `${platform.id}-vault`,
  name: 'Vault',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [vaultContract],
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [aidropContract],
};

const dlnService: ServiceDefinition = {
  id: `${platform.id}-dln`,
  name: 'DLN',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      sourceContract.address,
      destContract.address,
    ]),
};

export const services: ServiceDefinition[] = [
  airdropService,
  vaultService,
  transferService,
  dlnService,
];
export default services;
