import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "lavarage",
  name: "Lavarage",
  description:
    "Lavarage is a permissionless spot margin trading platform that enables leveraged trading for any token by sourcing liquidity from DEXs.",
  defiLlamaId: "lavarage",
  links: {
    website: "https://app.lavarage.xyz/",
    twitter: "https://x.com/lavaragexyz",
    documentation: "https://lavarage.gitbook.io/",
    telegram: "https://t.me/lavarage_xyz",
    medium: "https://medium.com/@lavaragexyz",
  },
  tags: ["dapp", "trading"],
};

export const lavarageUsdcContract = {
  name: "USDC Leverage",
  address: "1avaAUcjccXCjSZzwUvB2gS3DzkkieV2Mw8CjdN65uu",
  networkId: NetworkId.solana,
};

export const lavarageSolContract = {
  name: "SOL Leverage",
  address: "CRSeeBqjDnm3UPefJ9gxrtngTsnQRhEJiTA345Q83X3v",
  networkId: NetworkId.solana,
};

export const leverageService: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  contractsRaw: [lavarageUsdcContract, lavarageSolContract],
};

export const services: ServiceRaw[] = [leverageService];
