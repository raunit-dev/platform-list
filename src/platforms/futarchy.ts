import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "futarchy",
  name: "MetaDAO",
  description:
    "MetaDAO is a DAO that uses prediction markets to make decisions.",
  links: {
    website: "https://metadao.fi/",
    discord: "https://discord.com/invite/metadao",
    twitter: "https://x.com/MetaDAOProject",
    github: "https://github.com/metaDAOproject",
    documentation: "https://docs.metadao.fi/",
  },
  tokens: ["METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr"],
  tags: ["dapp", "dao"],
};

const contract = {
  name: 'Futarchy DAO',
  address: 'autoQP9RmUNkzzKRXsMkWicDVZ3h29vvyMDcAYjCxxg',
  platformId: platform.id,
};

const launchpadContract = {
  name: 'Launchpad',
  address: 'AfJJJ5UqxhBKoE3grkKAZZsoXDE9kncbMKvqSHGsCNrE',
  platformId: platform.id,
};

const conditionalContract = {
  name: 'Conditional Vault',
  address: 'VLTX1ishMBbcX3rdBWGssxawAo1Q2X2qxYFYqiGodVg',
  platformId: platform.id,
};

const ammContract = {
  name: 'AMM',
  address: 'AMMyu265tkBpRW21iGQxKGLaves3gKm2JcMUqfXNSpqD',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: 'futarchy-dao',
  name: 'Decision Market',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    tx.transaction.message.instructions.some((ix) =>
      [
        ammContract.address,
        conditionalContract.address,
        contract.address,
      ].includes(ix.programId.toString())
    ),
};
const launchpadService: ServiceDefinition = {
  id: 'futarchy-launchpad',
  name: 'Launchpad',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [launchpadContract],
};

export const services: ServiceDefinition[] = [service, launchpadService];
export default services;
