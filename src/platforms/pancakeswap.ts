import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "pancakeswap",
  name: "PancakeSwap",
  description: "Trade, earn, and own crypto on the all-in-one multichain DEX.",
  links: {
    website: "https://solana.pancakeswap.finance/",
    twitter: "https://twitter.com/pancakeswap",
    discord: "https://discord.gg/pancakeswap",
    github: "https://github.com/pancakeswap/",
  },
  tags: ["dex", "dapp"],
};
const contract: ContractRaw = {
  name: `PancakeSwap`,
  address: 'HpNfyc2Saw7RKkQd8nEL4khUcuPhQ7WwY1B2qjx8jxFq',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}`,
    name: 'Liquidity',
    platformId: platform.id,
    contractsRaw: [contract],
  },
];
