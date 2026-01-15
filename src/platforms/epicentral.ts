import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "epicentral",
  name: "Epicentral Labs",
  description:
    "Epicentral Labs is building the essential infrastructure to make options trading a reality on the Solana Blockchain by bringing new decentralized finance derivatives to Solana through the Epicentral DAO.",
  links: {
    website: "https://www.epicentrallabs.com/",
    discord: "https://discord.gg/5asAuY2sR8",
    twitter: "https://x.com/EpicentralLabs",
    github: "https://github.com/EpicentralLabs",
    documentation: "https://docs.opx.markets/docs",
  },
  tags: ["dapp"],
  platformToken: "LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR",
  tokens: [
    "7B2tQy8DwYt6aXHzt6UVDuqBB6WmykyZQodLSReQ9Wcz",
  ],
};

const stakingContract = {
  name: "Staking",
  address: "EpicbGrj6qRkeYoy35ZTxHHtkvTtUC9Fz7KRuH7c5hrS",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
  link: "https://stake.opx.markets/",
};

export const services: ServiceRaw[] = [stakingService];
