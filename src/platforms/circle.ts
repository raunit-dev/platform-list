import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "circle",
  name: "Circle",
  description:
    "Circle is the issuer of USDC stablecoin and operates CCTP (Cross-Chain Transfer Protocol) for seamless USDC transfers across blockchains including Solana.",
  links: {
    website: "https://www.circle.com/",
    discord: "https://discord.com/invite/buildoncircle",
    twitter: "https://x.com/circle",
    github: "https://github.com/circlefin",
    documentation: "https://www.circle.com/resources",
  },
  tags: ["stablecoin", "bridge", "dapp"],
  tokens: ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"],
};

const minterContract = {
  name: "CCTP",
  address: "CCTPiPYPc6AsJuwueEnWgSgucamXDZwBd53dQ11YiKX3",
  networkId: NetworkId.solana,
};

const transmitterContract = {
  name: "CCTP",
  address: "CCTPmbSD7gX1bxKPAmg77w8oFzNFpaQiQUWD43TKaecd",
  networkId: NetworkId.solana,
};

export const minterService: ServiceRaw = {
  id: `${platform.id}-cctp-minter`,
  name: "CCTP Minter",
  platformId: platform.id,
  contractsRaw: [minterContract],
  link: "https://www.circle.com/usdc-multichain/cross-chain-transfer-protocol",
  description:
    "Cross-Chain Transfer Protocol minting component that creates native USDC on destination chains after cross-chain transfers.",
};

export const transmitterService: ServiceRaw = {
  id: `${platform.id}-cctp-transmitter`,
  name: "CCTP Transmitter",
  platformId: platform.id,
  contractsRaw: [transmitterContract],
  description:
    "Cross-Chain Transfer Protocol message transmitter handling attestation and verification of cross-chain USDC transfers.",
};

export const services: ServiceRaw[] = [minterService, transmitterService];
