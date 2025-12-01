import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ParsedTransactionWithMeta } from '@solana/web3.js';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "lavarage",
  name: "Lavarage",
  description: "Lavarage is a decentralized leverage trading platform.",
  defiLlamaId: "lavarage",
  links: {
    website: "https://app.lavarage.xyz/",
    twitter: "https://x.com/lavaragexyz",
    documentation: "https://lavarage.gitbook.io/",
    telegram: "https://t.me/lavarage_xyz",
    medium: "https://medium.com/@lavaragexyz",
  },
  tags: ["dapp"],
};

export const lavarageUsdcContract = {
  name: 'USDC Leverage',
  address: '1avaAUcjccXCjSZzwUvB2gS3DzkkieV2Mw8CjdN65uu',
  platformId: platform.id,
};

export const lavarageSolContract = {
  name: 'SOL Leverage',
  address: 'CRSeeBqjDnm3UPefJ9gxrtngTsnQRhEJiTA345Q83X3v',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-leverage`,
  name: 'Leverage',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (txn: ParsedTransactionWithMeta, contracts: string[]) =>
    contracts.some((contract) =>
      [lavarageUsdcContract.address, lavarageSolContract.address].includes(
        contract
      )
    ),
};

export const services: ServiceDefinition[] = [service, service];
export default services;
