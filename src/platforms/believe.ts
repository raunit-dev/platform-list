import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { bondingCurveContract } from './meteora';

export const platform: PlatformRaw = {
  id: "believe",
  name: "Believe",
  tags: ["dapp", "social"],
  links: {
    website: "https://believe.app/",
    twitter: "https://x.com/believeapp",
    documentation: "https://believe.app/faqs",
  },
  description:
    "Quickly launch tokens by replying to any tweet with @launchcoin +name to turn it into a coin.",
};

const signer = '5qWya6UjwWnGVhdSBL3hyZ7B45jbk6Byt1hwd7ohEGXE';

const service: ServiceDefinition = {
  id: `${platform.id}-launch`,
  name: 'Launchacoin',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) => {
    const believeIsSigner = tx.transaction.message.accountKeys.some(
      (acc) => acc.signer && acc.pubkey.toString() === signer
    );
    const isUsingMeteoraBondingCurveProgram =
      tx.transaction.message.instructions.some(
        (instruction) =>
          instruction.programId.toString() === bondingCurveContract.address
      );
    return believeIsSigner && isUsingMeteoraBondingCurveProgram;
  },
};

export const services: ServiceDefinition[] = [service];
export default services;
