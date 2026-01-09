import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "fluxbeam",
  name: "Flux Beam",
  description:
    "FluxBeam is a DEX with native support for Token-2022 standard, offering token swaps and liquidity pools.",
  defiLlamaId: "fluxbeam",
  links: {
    website: "https://fluxbeam.xyz/",
    discord: "https://discord.com/invite/DtyqTx97kz",
    telegram: "https://t.me/fluxbeam",
    twitter: "https://x.com/FluxBeamDEX",
    documentation: "https://docs.fluxbeam.xyz/",
  },
  tokens: ["FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX"],
  tags: ["dapp", "dex", "defi"],
};

const contract = {
  name: "Pool",
  address: "FLUXubRmkEi2q6K3Y9kBPg9248ggaZVsoSFhtJHSrm1X",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-pool`,
  name: "Pool",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
