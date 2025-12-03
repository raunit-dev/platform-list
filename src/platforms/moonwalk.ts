import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "moonwalk",
  name: "Moonwalk",
  description: "Gamify your Fitness Journey",
  links: {
    website: "https://app.moonwalk.fit/",
    discord: "https://discord.com/invite/jBhgHWUJ9U",
    telegram: "https://t.me/+x0hEQqQP1GpjZGZh",
    twitter: "https://twitter.com/moonwalkfitness",
    documentation: "https://moonwalk.fit/faq",
  },
  tags: ["fitness", "dapp"],
};
const main: ContractRaw = {
  name: `Game`,
  address: 'FitAFk15vtx2PBjfr7QTnefaHRx6HwajRiZMt1DdSSKU',
  networkId: NetworkId.solana,
}
const airdrop: ContractRaw = {
  name: 'Airdrop',
  address: 'FitAFk15vtx2PBjfr7QTnefaHRx6HwajRiZMt1DdSSKU',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-game`,
    name: 'Game',
    platformId: platform.id,
    contractsRaw: [main],
  },
  {
    id: `${platform.id}-airdrop`,
    name: 'Airdrop',
    platformId: platform.id,
    contractsRaw: [airdrop],
  },
];
