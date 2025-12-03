import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "oro",
  name: "Oro",
  links: {
    website: "https://app.oro.finance/",
    twitter: "https://x.com/orogoldapp",
  },
  tags: ["dapp"],
};
const staking: ContractRaw = {
  name: `Staking`,
  address: 'stakeZZUzk2LgiiLqufNNyDQuUsn8UTzvCWBkWdYaRH',
  networkId: NetworkId.solana,
}
const core: ContractRaw = {
  name: `Core`,
  address: 'iNtiXEFgDNrc6FUt4cFALDe3D8RF3sVnNuKSHwxZRop',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-staking`,
    name: 'Staking',
    platformId: platform.id,
    contractsRaw: [staking],
  },
  {
    id: `${platform.id}-core`,
    name: 'Core',
    platformId: platform.id,
    contractsRaw: [core],
  },
];
