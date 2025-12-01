import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "texture",
  name: "Texture",
  description: "P2P Loans",
  links: {
    website: "https://texture.finance/",
    twitter: "https://twitter.com/texture_fi",
    discord: "https://discord.gg/6YvjpXzsqp",
  },
  tags: ["dapp"],
};

const contractV1 = {
  name: 'Lending',
  address: 'MLENdNkmK61mGd4Go8BJX9PhYPN3azrAKRQsAC7u55v',
  platformId: platform.id,
};

const contractV2 = {
  name: 'Lending',
  address: 'sUperbZBsdZa4s7pWPKQaQ2fRTesjKxupxagZ8FSgVi',
  platformId: platform.id,
};

const priceContract = {
  name: 'Price',
  address: 'priceEvKXX3KERsitDpmvujXfPFYesmEspw4kiC3ryF',
  platformId: platform.id,
};

const contract = {
  name: 'Lending',
  address: 'MLENdNkmK61mGd4Go8BJX9PhYPN3azrAKRQsAC7u55v',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-lending`,
    name: 'Lending',
    platformId: platform.id,
    networkId: NetworkId.solana,
    matchTransaction: (tx) =>
      matchAnyInstructionWithPrograms(tx, [
        contract.address,
        contractV1.address,
        contractV2.address,
        priceContract.address,
      ]),
  },
];
export default services;
