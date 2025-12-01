import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { systemContract } from './solana/contracts';

export const platform: PlatformRaw = {
  id: "marinade",
  name: "Marinade",
  description:
    "Marinade connects SOL holders with the best staking rates on Solana.",
  defiLlamaId: "parent#marinade-finance",
  links: {
    website: "https://marinade.finance/",
    discord: "https://discord.gg/yTdH8YkYKg",
    twitter: "https://twitter.com/MarinadeFinance",
    github: "https://github.com/marinade-finance",
    documentation: "https://docs.marinade.finance/",
  },
  tokens: [
    "MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey",
    "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
  ],
  tags: ["lst", "dapp"],
};

const contract = {
  name: 'Ticket',
  address: 'MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop',
  address: 'indiXdKbsC4QSLQQnn6ngZvkqfywn6KgEeQbkGSpk1V',
  platformId: platform.id,
};

const nativeStakingOperator = 'opNS8ENpEMWdXcJUgJCsJTDp7arTXayoBEeBUg6UezP';

const service: ServiceDefinition = {
  id: `${platform.id}-ticket`,
  name: 'Ticket',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

const nativeStakeService: ServiceDefinition = {
  id: `${platform.id}-native-stake`,
  name: 'Native Stake',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (txn) =>
    txn.transaction.message.accountKeys.some(
      (accnt) => accnt.pubkey.toString() === nativeStakingOperator
    ) &&
    txn.transaction.message.instructions.some(
      (instruction) =>
        instruction.programId.toString() === systemContract.address
    ),
};
export const services: ServiceDefinition[] = [
  service,
  airdropService,
  nativeStakeService,
];
export default services;
