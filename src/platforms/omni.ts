import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "omni",
  name: "Omni Bridge",
  description:
    "Omni Bridge is a cross-chain bridge by NEAR Protocol enabling asset transfers between Solana and other chains through chain abstraction.",
  links: {
    documentation:
      "https://docs.near.org/chain-abstraction/omnibridge/overview",
    website: "https://docs.near.org/chain-abstraction/omnibridge/overview",
  },
  tags: ["bridge", "dapp"],
};
const bridge: ContractRaw = {
  name: `Bridge`,
  address: "dahPEoZGXfyV58JqqH85okdHmpN8U2q8owgPUXSCPxe",
  networkId: NetworkId.solana,
};

export const bridgeService: ServiceRaw = {
  id: `${platform.id}-bridge`,
  name: "bridge",
  platformId: platform.id,
  contractsRaw: [bridge],
};

export const services: ServiceRaw[] = [bridgeService];
