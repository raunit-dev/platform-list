import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "raydium",
  name: "Raydium",
  description:
    "Raydium is an automated market maker (AMM) built on the Solana blockchain which enables lightning-fast trades, permissionless pool creation, and new features for earning yield",
  defiLlamaId: "raydium",
  links: {
    website: "https://raydium.io/",
    discord: "https://discord.com/invite/raydium",
    telegram: "https://t.me/raydiumprotocol",
    github: "https://github.com/raydium-io",
    documentation: "https://docs.raydium.io/raydium/",
  },
  tokens: ["4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"],
  tags: ["dapp"],
};

const ammV3Contract: Contract = {
  name: 'AMM v3',
  address: 'EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q',
  platformId: platform.id,
};

const ammV4Contract: Contract = {
  name: 'AMM v4',
  address: '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8',
  platformId: platform.id,
};
const ammV5Contract: Contract = {
  name: 'AMM v5',
  address: '5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h',
  platformId: platform.id,
};
const ammRootingContract: Contract = {
  name: 'AMM Rooting',
  address: 'routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS',
  platformId: platform.id,
};
const clmmContract: Contract = {
  name: 'CLMM',
  address: 'CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK',
  platformId: platform.id,
};
const cpmmContract: Contract = {
  name: 'CPMM',
  address: 'CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C',
  platformId: platform.id,
};
const farmV3Contract: Contract = {
  name: 'Farm V3',
  address: 'EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q',
  platformId: platform.id,
};
const farmV4Contract: Contract = {
  name: 'Farm V4',
  address: 'CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T',
  platformId: platform.id,
};
const farmV5Contract: Contract = {
  name: 'Farm V5',
  address: '9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z',
  platformId: platform.id,
};
const farmV6Contract: Contract = {
  name: 'Farm V6',
  address: 'FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG',
  platformId: platform.id,
};
const idoContract: Contract = {
  name: 'IDO V1',
  address: '6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF',
  platformId: platform.id,
};
const idoV2Contract: Contract = {
  name: 'IDO V2',
  address: 'CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH',
  platformId: platform.id,
};
const idoV3Contract: Contract = {
  name: 'IDO V3',
  address: '9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC',
  platformId: platform.id,
};
const idoV4Contract: Contract = {
  name: 'IDO V4',
  address: 'DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi',
  platformId: platform.id,
};
const launchpadContract: Contract = {
  name: 'Launchpad',
  address: 'LanMV9sAd7wArD4vJFi2qDdfnVhFxYSUg6eADduJ3uj',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-amm-v3`,
    name: 'Stake',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [ammV3Contract],
  },
  {
    id: `${platform.id}-amm-v4`,
    name: 'AMM v4',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [ammV4Contract],
  },
  {
    id: `${platform.id}-amm-v5`,
    name: 'AMM v5',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [ammV5Contract],
  },
  {
    id: `${platform.id}-amm-rooting`,
    name: 'Swap',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [ammRootingContract],
  },
  {
    id: `${platform.id}-clmm`,
    name: 'CLMM',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [clmmContract],
  },
  {
    id: `${platform.id}-cpmm`,
    name: 'CPMM',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [cpmmContract],
  },
  {
    id: `${platform.id}-farm-v3`,
    name: 'Stake',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [farmV3Contract],
  },
  {
    id: `${platform.id}-farm-v4`,
    name: 'Farm V4',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [farmV4Contract],
  },
  {
    id: `${platform.id}-farm-v5`,
    name: 'Farm V5',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [farmV5Contract],
  },
  {
    id: `${platform.id}-farm-v6`,
    name: 'Farm V6',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [farmV6Contract],
  },
  {
    id: `${platform.id}-ido-v1`,
    name: 'IDO V1',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [idoContract],
  },
  {
    id: `${platform.id}-ido-v2`,
    name: 'IDO V2',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [idoV2Contract],
  },
  {
    id: `${platform.id}-ido-v3`,
    name: 'IDO V3',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [idoV3Contract],
  },
  {
    id: `${platform.id}-ido-v4`,
    name: 'IDO V4',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [idoV4Contract],
  },
  {
    id: `${platform.id}-launchpad`,
    name: 'Launchpad',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [launchpadContract],
  },
];

export default services;
