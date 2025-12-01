import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import transactionIsTransfer from '../utils/parseTransaction/transactionIsTransfer';

export const platform: PlatformRaw = {
  id: "tiplink",
  name: "TipLink",
  tags: ["dapp"],
  links: {
    website: "https://tiplink.io/",
  },
};

const receiverAddress = '2CcuUmUk6ggh1Q4BoTeu6bDKMY2ApfkL1GVijmDAELLU';

const mainService: ServiceDefinition = {
  id: `${platform.id}-gift-card`,
  name: 'Gift Card',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    transactionIsTransfer(tx) &&
    tx.transaction.message.accountKeys.some(
      (acc) => acc.pubkey.toString() === receiverAddress
    ),
};

export const services: ServiceDefinition[] = [mainService];
export default services;
