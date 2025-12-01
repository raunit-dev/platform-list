import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "drip",
  name: "Drip Haus",
  description:
    "The Collectibles Platform. Collect, create, and earn on crypto's #1 content app.",
  links: {
    website: "https://drip.haus/",
    twitter: "https://x.com/drip_haus",
    documentation: "https://drip.haus/faq",
  },
  tags: ["nft-marketplace", "dapp"],
};

const dripcNFTSenderAddress = 'DRiPPP2LytGjNZ5fVpdZS7Xi1oANSY3Df1gSxvUKpzny';
const creatorRewardsSenderAddress =
  'DRiPChZsgQMpQMkEd3odwE6fnAfcXjGgtfrqymBQTuTS';
export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-collecting`,
    name: 'Collecting',
    platformId: platform.id,
    networkId: NetworkId.solana,
    matchTransaction(txn) {
      return txn.transaction.message.accountKeys.some(
        (accountKey) =>
          accountKey.signer &&
          accountKey.pubkey.toString() === dripcNFTSenderAddress
      );
    },
  },
  {
    id: `${platform.id}-creator-rewards`,
    name: 'Creator Rewards',
    platformId: platform.id,
    networkId: NetworkId.solana,
    matchTransaction(txn) {
      return txn.transaction.message.accountKeys.some(
        (accountKey) =>
          accountKey.signer &&
          accountKey.pubkey.toString() === creatorRewardsSenderAddress
      );
    },
  },
];

export default services;
