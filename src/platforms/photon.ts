import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "photon",
  name: "Photon",
  description:
    "Photon is a decentralized exchange (DEX) on Solana, offering a user-friendly interface for trading various tokens.",
  links: {
    website: "https://photon-sol.tinyastro.io/",
    twitter: "https://x.com/tradewithPhoton",
    telegram: "https://t.me/photonlounge",
  },
  tags: ["dapp"],
};

const mainContract = {
  name: 'Swap',
  address: 'BSfD6SHZigAfDWSjzD5Q41jw8LmKwtmjskPH9XW1mrRW',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-swap`,
    name: 'Swap',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [mainContract],
  },
];
export default services;
