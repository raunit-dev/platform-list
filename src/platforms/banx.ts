import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "banx",
  name: "Banx",
  description:
    "Banx is a DeFi lending protocol for borrowing and lending against tokens and NFTs with no expiration and no price-based liquidation.",
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

export const bondsContract = {
  name: "Banx Bonds",
  address: "4tdmkuY6EStxbS6Y8s5ueznL3VPMSugrvQuDeAHGZhSt",
  networkId: NetworkId.solana,
};

const vaultsContract = {
  name: "Vaults",
  address: "BanxxEcFZPJLKhS59EkwTa8SZez8vDYTiJVN78mGHWDi",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop",
  address: "BanxBXWfsNL1Fg2dwJV6ZJ5qBieYn9pHqb5PAVrwPigN",
  networkId: NetworkId.solana,
};

export const bondsService: ServiceRaw = {
  id: "banx-bonds",
  name: "Bonds",
  platformId: platform.id,
  contractsRaw: [bondsContract],
};

export const vaultsService: ServiceRaw = {
  id: "banx-vaults",
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [vaultsContract],
};

export const airdropService: ServiceRaw = {
  id: "banx-airdrop",
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  bondsService,
  vaultsService,
  airdropService,
];
