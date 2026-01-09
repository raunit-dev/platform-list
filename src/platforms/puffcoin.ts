import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "puffcoin",
  name: "Puff",
  description: "Memecoin with staking functionality on Solana",
  links: {
    website: "https://staking.puffcoin.fun/",
    twitter: "https://x.com/PuffCoin_",
  },
  tags: ["memecoin"],
};

const contract = {
  name: "Staking",
  address: "q8gz8Sww7Xexpqk9DrEMjNXMHnFx6dB3EYe32PwHHd6",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
