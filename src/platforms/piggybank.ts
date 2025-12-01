import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "piggybank",
  name: "Piggybank",
  tags: ["dapp", "lst"],
  links: {
    website: "https://www.piggybank.fi/",
    discord: "https://discord.gg/WNutXfvTgw",
    twitter: "https://x.com/piggybank_fi",
  },
};

const legacyContract = {
  name: 'Vault',
  address: 'Pig1CsXnfDwN1NuoeNRBojohbjc14dogmJCXeb2vL3Y',
  platformId: platform.id,
};

const token2022Contract = {
  name: 'Vault',
  address: 'Pig2ienhM3ukiTec3x8aCdnLASpU4z8yRPLgH9QxDvm',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-vault`,
  name: 'Vault',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (txn) =>
    matchAnyInstructionWithPrograms(txn, [
      legacyContract.address,
      token2022Contract.address,
    ]),
};

export const services: ServiceDefinition[] = [service];
export default services;
