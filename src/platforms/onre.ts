import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "onre",
  name: "OnRe",
  description: "yielding dollar asset on Solana",
  links: {
    website: "https://www.onre.finance/",
    twitter: "https://x.com/onrefinance",
    github: "https://github.com/onre-finance",
    telegram: "https://t.me/+mW8VqpLlFIExMmMx",
  },
  tags: ["dapp", "stablecoin"],
};
const deposit: ContractRaw = {
  name: `Deposit`,
  address: 'onreuGhHHgVzMWSkj2oQDLDtvvGvoepBPkqyaubFcwe',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-deposit`,
    name: 'Deposit',
    platformId: platform.id,
    contractsRaw: [deposit],
  },
];
