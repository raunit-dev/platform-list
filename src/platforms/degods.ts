import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "degods",
  name: "DeGods",
  links: {
    twitter: "https://x.com/DeGodsNFT",
    website: "https://degods.com/",
    discord: "https://discord.com/invite/dexyz",
  },
  tags: ["nft-collection"],
  tokens: ["DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ"],
};

const farmContract = {
  name: 'GEM Farm',
  address: 'FQzYycoqRjmZTgCcTTAkzceH2Ju8nzNLa5d78K3yAhVW',
  platformId: platform.id,
};

const bankContract = {
  name: 'GEM Bank',
  address: '6VJpeYFy87Wuv4KvwqD5gyFBTkohqZTqs6LgbCJ8tDBA',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      farmContract.address,
      bankContract.address,
    ]),
};

export const services: ServiceDefinition[] = [service];
export default services;
