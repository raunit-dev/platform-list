import { PlatformRaw, ServiceRaw, ContractRaw, NetworkId } from "../types";
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
const mainContract: ContractRaw = {
  name: 'Swap',
  address: 'BSfD6SHZigAfDWSjzD5Q41jw8LmKwtmjskPH9XW1mrRW',
  networkId: NetworkId.solana,
}

export const services: ServiceRaw[] = [
  {
    id: `${platform.id}-swap`,
    name: 'Swap',
    platformId: platform.id,
    contractsRaw: [mainContract],
  },
];
