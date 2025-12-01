import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "fluxbeam",
  name: "Flux Beam",
  description: "Solana DEX, supporting innovation and Token-2022",
  defiLlamaId: "fluxbeam",
  links: {
    website: "https://fluxbeam.xyz/",
    discord: "https://discord.com/invite/DtyqTx97kz",
    telegram: "https://t.me/fluxbeam",
    twitter: "https://x.com/FluxBeamDEX",
    documentation: "https://docs.fluxbeam.xyz/",
  },
  tokens: ["FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX"],
  tags: ["dapp"],
};

const contract = {
  name: 'Pool',
  address: 'FLUXubRmkEi2q6K3Y9kBPg9248ggaZVsoSFhtJHSrm1X',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-pool`,
  name: 'Pool',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

export const services: ServiceDefinition[] = [service];
export default services;
