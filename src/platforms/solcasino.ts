import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solcasino",
  name: "Solcasino",
  description:
    "Solcasino is an online casino offering games including blackjack, poker, slots, roulette, sportsbook, and leverage trading with provably fair smart contracts.",
  links: {
    website: "https://solcasino.io/",
    twitter: "https://x.com/Solcasinoio",
    discord: "https://discord.gg/solcasinoio",
    telegram: "https://t.me/SolcasinoIOBot",
  },
  tokens: ["SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz"],
  tags: ["gaming", "dapp"],
};

const contract = {
  name: "Solcasino",
  address: "CQ36xjMHgmgwEM1yvJYUWg3YxMvzwM4Mntn6vZrMk86z",
  networkId: NetworkId.solana,
};

export const depositService: ServiceRaw = {
  id: `${platform.id}-deposit`,
  name: "Deposit",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const withdrawService: ServiceRaw = {
  id: `${platform.id}-withdraw`,
  name: "Withdraw",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [depositService, withdrawService];
