import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "parcl",
  name: "Parcl",
  description: "Making investing in real estate faster, simpler, and smarter. ",
  defiLlamaId: "parent#parcl",
  links: {
    website: "https://app.parcl.co/",
    discord: "https://discord.gg/parcl",
    twitter: "https://twitter.com/Parcl",
    github: "https://github.com/ParclFinance",
    documentation: "https://docs.parcl.co/",
  },
  tokens: ["4LLbsb5ReP3yEtYzmXewyGjcir5uXtKFURtaEUVC2AHs"],
  tags: ["dapp"],
};
const mainContract: ContractRaw = {
  name: 'Liquidity & Trading',
  address: '3parcLrT7WnXAcyPfkCz49oofuuf2guUKkjuFkAhZW8Y',
  networkId: NetworkId.solana,
}
const stakingContract: ContractRaw = {
  name: 'Parcl Staking',
  address: '2gWf5xLAzZaKX9tQj9vuXsaxTWtzTZDFRn21J3zjNVgu',
  networkId: NetworkId.solana,
}
const airdropContract: ContractRaw = {
  name: 'Airdrop',
  address: '5tu3xkmLfud5BAwSuQke4WSjoHcQ52SbrPwX9es8j6Ve',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-main`,
    name: 'Liquidity & Trading',
    platformId: platform.id,
    contractsRaw: [mainContract],
  },
  {
    id: `${platform.id}-staking`,
    name: 'Staking',
    platformId: platform.id,
    contractsRaw: [stakingContract],
  },
  {
    id: `${platform.id}-airdrop`,
    name: 'Airdrop',
    platformId: platform.id,
    contractsRaw: [airdropContract],
  },
];
