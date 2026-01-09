import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "wintermute",
  name: "Wintermute",
  description: "Institutional market maker and liquidity provider",
  links: {
    website: "https://www.wintermute.com/",
    twitter: "https://x.com/wintermute_t",
  },
  tags: ["liquidity-provider"],
};

const contract = {
  name: "Order Engine",
  address: "2En5Y11SEAGLNmEezTuRUCwTyzyNReHaMbSnS5gjGsL1",
  networkId: NetworkId.solana,
};

export const tradeService: ServiceRaw = {
  id: `${platform.id}-order-engine`,
  name: "Order Engine",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [tradeService];
