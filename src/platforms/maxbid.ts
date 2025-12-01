import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition, ServicePriority } from '../ServiceDefinition';
import { lavarageSolContract, lavarageUsdcContract } from './lavarage';

export const platform: PlatformRaw = {
  id: "maxbid",
  name: "Maxbid Pro",
  links: {
    website: "https://maxbid.pro/trade",
    twitter: "https://x.com/maxbidbro",
    documentation: "https://maxbid-pro.gitbook.io/maxbid-pro",
  },
  tags: ["dapp"],
};

const maxbidFeesAccount = '8iMq4uShCbj4HAGKrHHd9EY4SmYor2y1XRP7Fh21BwHJ';

const service: ServiceDefinition = {
  id: `${platform.id}`,
  name: 'Trade',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx, contracts) =>
    (contracts.includes(lavarageSolContract.address) ||
      contracts.includes(lavarageUsdcContract.address)) &&
    tx.transaction.message.accountKeys.some(
      (ak) => ak.pubkey.toString() === maxbidFeesAccount
    ),
  priority: ServicePriority.high,
};

export const services: ServiceDefinition[] = [service];
export default services;
