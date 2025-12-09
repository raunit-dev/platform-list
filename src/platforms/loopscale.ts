import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "loopscale",
  name: "Loopscale",
  description:
    "Loopscale is an order-book based lending protocol that matches lenders and borrowers directly for customizable loan terms on any asset.",
  links: {
    website: "https://app.loopscale.com/",
    discord: "https://discord.gg/loopscale",
    twitter: "https://x.com/LoopscaleLabs",
    github: "https://github.com/bridgesplit",
    documentation: "https://docs.loopscale.com/",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Loopscale",
  address: "1oopBoJG58DgkUVKkEzKgyG9dvRmpgeEm1AVjoHkF78",
  networkId: NetworkId.solana,
};

const creditBookContract = {
  name: "CreditBook",
  address: "abfcSQac2vK2Pa6UAJb37DzarVxF15bDTdphJzAqYYp",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: "loopscale-lending",
  name: "Loopscale",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const creditBookService: ServiceRaw = {
  id: "loopscale-creditbook",
  name: "CreditBook",
  platformId: platform.id,
  contractsRaw: [creditBookContract],
};

export const services: ServiceRaw[] = [service, creditBookService];
