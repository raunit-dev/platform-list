import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from "@sonarwatch/portfolio-core";
import { ServiceDefinition } from "../ServiceDefinition";

export const platform: PlatformRaw = {
  id: "domin8",
  name: "Domin8",
  tags: ["dapp"],
  links: {
    website: "https://www.domin8.fun/",
    twitter: "https://x.com/domin8Arena",
  },
};

const contract = {
  name: "Game",
  address: "7bHYHZVu7kWRU4xf7DWypCvefWvuDqW1CqVfsuwdGiR7",
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: platform.id,
  name: "Domin8",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
