import { NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "port",
  name: "Port",
  defiLlamaId: "port-finance",
  isDeprecated: true,
  tags: ["dapp"],
  links: {
    website: "https://mainnet.port.finance/lending",
    github: "https://github.com/port-finance",
  },
  tokens: ["PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y"],
};

const contract = {
  name: "Lending",
  address: "Port7uDYB3wk6GJAw4KT1WpTeMtSu9bTcChBHkX2LfR",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-lending`,
  name: "Lending",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
