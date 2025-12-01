import { platforms as platformsRaw } from "./platforms/index";
import { services as servicesRaw } from "./platforms/index";
import { Platform, Service, ServiceRaw, ContractRaw } from "./types";
import { ServiceDefinition } from "./ServiceDefinition";

export { Platform, Service } from "./types";
export * from "./utils";

const platforms: Platform[] = platformsRaw.map(
  (p): Platform => ({
    ...p,
    image: `https://raw.githubusercontent.com/jup-ag/platform-list/main/img/${p.id}.webp`,
    isDeprecated: p.isDeprecated || false,
  }),
);

const services: Service[] = servicesRaw.map(
  (s: ServiceRaw | ServiceDefinition): Service => {
    // Check if it's a ServiceDefinition (has contracts already)
    if ('contracts' in s && s.contracts && !('contractsRaw' in s)) {
      return s as Service;
    }

    // Otherwise, it's a ServiceRaw (has contractsRaw)
    const serviceRaw = s as ServiceRaw;
    return {
      ...serviceRaw,
      contracts: serviceRaw.contractsRaw.map((c: ContractRaw) => ({
        ...c,
        platformId: serviceRaw.platformId,
        serviceId: serviceRaw.id,
        networkId: serviceRaw.networkId,
      })),
    };
  },
);

export { platforms, services };
