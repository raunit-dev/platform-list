import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "relay",
  name: "Relay",
  description:
    "Relay is a cross-chain payments protocol enabling instant, low-cost bridging and transactions across multiple blockchains through a permissionless relayer network.",
  links: {
    website: "https://relay.link/bridge",
    twitter: "https://x.com/relayprotocol",
    github: "https://github.com/reservoirprotocol",
    documentation: "https://docs.relay.link/what-is-relay",
  },
  tags: ["dapp", "bridge"],
};

const contract = {
  name: "WSOL Unwrapper",
  address: "DzACDmwdqc5ADPJKnZEcQAgpsPdvYzvYBMihPNN48pFE",
  networkId: NetworkId.solana,
};

const relayContract = {
  name: "Relay Bridge",
  address: "99vQwtBwYtrqqD9YSXbdum3KBdxPAVxYTaQ3cfnJSrN2",
  networkId: NetworkId.solana,
};

export const bridgeService: ServiceRaw = {
  id: `${platform.id}-bridge`,
  name: "Bridge",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const relayService: ServiceRaw = {
  id: `${platform.id}-relay-bridge`,
  name: "Relay Bridge",
  platformId: platform.id,
  contractsRaw: [relayContract],
};

export const services: ServiceRaw[] = [bridgeService, relayService];
