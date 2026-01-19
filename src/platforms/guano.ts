import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "guano",
  name: "Guano",
  description: "Memecoin with staking functionality on Solana",
  links: {
    website: "https://www.guanocoin.com/",
  },
  tags: ["memecoin"],
};

const contract = {
  name: "Staking",
  address: "CFjLE5589EiPZvPFiSx7QgktBH8ZTkkGJU2dL7qbJU2a",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
