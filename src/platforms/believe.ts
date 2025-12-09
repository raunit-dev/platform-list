import { PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "believe",
  name: "Believe",
  tags: ["dapp", "social", "launchpad"],
  links: {
    website: "https://believe.app/",
    twitter: "https://x.com/believeapp",
    documentation: "https://believe.app/faqs",
  },
  description:
    "Believe is a memecoin launchpad that allows users to create tokens via Twitter/X replies, with tokens graduating to Meteora after reaching $100k market cap.",
  tokens: ["2FKuBk6wdXTkrRSveokJCBm37wMCfvG19bTBkP1yCpSL"],
};

export const launchService: ServiceRaw = {
  id: `${platform.id}-launch`,
  name: "Launchacoin",
  platformId: platform.id,
  contractsRaw: [],
};

export const services: ServiceRaw[] = [launchService];
