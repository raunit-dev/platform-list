import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "banx",
  name: "Banx",
  description:
    "Borrow, Lend, Multiply, Hedge Solana tokens and NFTs with no expiration, no price liquidation.",
  defiLlamaId: "banx",
  tags: ["dapp"],
  links: {
    website: "https://banx.gg/",
    discord: "https://discord.com/invite/banxfromfrakt",
    twitter: "https://twitter.com/banx_gg",
    github: "https://github.com/frakt-solana",
    documentation: "https://docs.banx.gg/",
  },
  tokens: ["BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR"],
};

const banxContract = {
  name: 'Banx Bonds',
  address: '4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt',
  platformId: platform.id,
};

const banxVaultsContract = {
  name: 'Vaults',
  address: 'BanxxEcFZPJLKhS59EkwTa8SZez8vDYTiJVN78mGHWDi',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop',
  address: 'BanxBXWfsNL1Fg2dwJV6ZJ5qBieYn9pHqb5PAVrwPigN',
  platformId: platform.id,
};

const bondsService: ServiceDefinition = {
  id: 'banx-bonds',
  name: 'Bonds',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [banxContract],
};

const vaultsService: ServiceDefinition = {
  id: 'banx-vaults',
  name: 'Vaults',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [banxVaultsContract, banxContract],
};

const airdropService: ServiceDefinition = {
  id: 'banx-airdrop',
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

export const services: ServiceDefinition[] = [
  bondsService,
  vaultsService,
  airdropService,
];
export default services;
