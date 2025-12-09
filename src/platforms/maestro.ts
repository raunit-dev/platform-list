import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "maestro",
  name: "Maestro",
  description:
    "Maestro is a Telegram trading bot for Solana enabling users to snipe, trade, and manage tokens directly from chat.",
  links: {
    website: "https://maestrobots.com/",
    twitter: "https://x.com/MaestroBots",
    documentation: "https://docs.maestrobots.com/",
  },
  tags: ["tool"],
};

const contract = {
  name: "Router",
  address: "MaestroAAe9ge5HTc64VbBQZ6fP77pwvrhM8i1XWSAx",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-bot`,
  name: "Bot",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
