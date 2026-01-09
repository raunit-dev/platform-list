import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "solanaid",
  name: "Solana ID",
  description: "Decentralized identity and naming service on Solana",
  links: {
    website: "https://app.solana.id/",
    twitter: "https://x.com/solanaidentity",
    discord: "https://discord.com/invite/solanaid",
    telegram: "https://t.me/+NKjmb1u7LZw5YTU6",
  },
  tags: ["dapp"],
  tokens: ["SoLiDMWBct5TurG1LNcocemBK7QmTn4P33GSrRrcd2n"],
};

const contract = {
  name: "Staking",
  address: "gp8fqiE5cwX3JRT8unpKeFutNdMihyisAe3nx6L3S1p",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "solanaid-staking",
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const services: ServiceRaw[] = [service];
