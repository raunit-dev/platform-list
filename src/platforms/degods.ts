import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "degods",
  name: "DeGods",
  description:
    "DeGods is a collection of 10,000 unique avatar NFTs and a global community of creators and innovators, integrated with the DUST and DEGOD token ecosystem.",
  links: {
    twitter: "https://x.com/DeGodsNFT",
    website: "https://degods.com/",
    discord: "https://discord.com/invite/dexyz",
  },
  tags: ["nft-collection"],
  tokens: ["DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ"],
};

const farmContract = {
  name: "GEM Farm",
  address: "FQzYycoqRjmZTgCcTTAkzceH2Ju8nzNLa5d78K3yAhVW",
  networkId: NetworkId.solana,
};

const bankContract = {
  name: "GEM Bank",
  address: "6VJpeYFy87Wuv4KvwqD5gyFBTkohqZTqs6LgbCJ8tDBA",
  networkId: NetworkId.solana,
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [farmContract, bankContract],
};

export const services: ServiceRaw[] = [stakingService];
