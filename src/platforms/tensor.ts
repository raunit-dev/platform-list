import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "tensor",
  name: "Tensor",
  description:
    "Tensor is an NFT marketplace offering trading, bidding, AMM pools, and compressed NFT support with advanced features for professional traders.",
  tags: ["tool", "nft-marketplace", "dapp"],
  links: {
    website: "https://www.tensor.trade/",
    discord: "https://discord.gg/tensor",
    twitter: "https://x.com/tensor_hq",
    github: "https://github.com/tensor-hq",
    documentation: "https://docs.tensor.trade/",
  },
  tokens: ["TNSRxcUxoT9xBG3de7PiJyTDYu7kskLqcpddxnEJAS6"],
};

const cnftContract = {
  name: "cNFT",
  address: "TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp",
  networkId: NetworkId.solana,
};

const contract = {
  name: "Swap",
  address: "TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN",
  networkId: NetworkId.solana,
};

const bidContract = {
  name: "Bid",
  address: "TB1Dqt8JeKQh7RLDzfYDJsq8KS4fS2yt87avRjyRxMv",
  networkId: NetworkId.solana,
};

const ammContract = {
  name: "AMM",
  address: "TAMM6ub33ij1mbetoMyVBLeKY5iP41i4UPUJQGkhfsg",
  networkId: NetworkId.solana,
};

const luckyBuyContract = {
  name: "Lucky Buy",
  address: "LUCK57mxzZiRGF2PdHAY79P6tZ8Apsi381tKvBrTdqk",
  networkId: NetworkId.solana,
};

export const marketplaceService: ServiceRaw = {
  id: `${platform.id}-swap`,
  name: "Marketplace",
  platformId: platform.id,
  contractsRaw: [contract],
  link: "https://www.tensor.trade/",
  description:
    "NFT marketplace enabling instant buying, selling, and listing of NFTs with advanced trading features and real-time analytics.",
};

export const cnftService: ServiceRaw = {
  id: `${platform.id}-cnft`,
  name: "Marketplace",
  platformId: platform.id,
  contractsRaw: [cnftContract],
  description:
    "Compressed NFT trading support enabling cost-efficient transactions for large-scale NFT collections using state compression.",
};

export const bidService: ServiceRaw = {
  id: `${platform.id}-bid`,
  name: "Bid",
  platformId: platform.id,
  contractsRaw: [bidContract],
  description:
    "Collection-wide bidding system allowing users to place offers on any NFT within a collection at a specified price.",
};

export const tammService: ServiceRaw = {
  id: `${platform.id}-amm`,
  name: "AMM",
  platformId: platform.id,
  contractsRaw: [ammContract],
  description:
    "Concentrated liquidity AMM for NFTs enabling market makers to provide liquidity within price ranges and earn customizable fees up to 25%.",
};

export const luckyBuyService: ServiceRaw = {
  id: `${platform.id}-lucky-buy`,
  name: "Lucky Buy",
  platformId: platform.id,
  contractsRaw: [luckyBuyContract],
  description:
    "Gamified NFT purchasing feature offering users a chance to win rare NFTs at discounted prices through randomized selection mechanics.",
};

export const services: ServiceRaw[] = [
  marketplaceService,
  cnftService,
  bidService,
  tammService,
  luckyBuyService,
];
