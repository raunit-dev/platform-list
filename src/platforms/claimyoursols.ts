import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import {
  instructionIsBurn,
  instructionIsClose,
  instructionIsTransfer,
} from '../utils/parseInstruction/instructionIs';
import { getRelevantInstructions } from '../utils/parseInstruction/getRelevantInstructions';

export const platform: PlatformRaw = {
  id: "claimyoursols",
  name: "Claim Your Sols",
  links: {
    website: "https://claimyoursols.app/",
  },
  tags: ["tool"],
  isDeprecated: true,
};

const feeReceiverAddress = '6tdnTdEBPow4FcZW2WEXm6R9CHAwsxci6QdCa3NX9zDp';

const mainService: ServiceDefinition = {
  id: `${platform.id}`,
  name: 'Close Token Account',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) => {
    const instructions = getRelevantInstructions(tx);

    return (
      instructions.length > 0 &&
      instructions.every(
        (instruction) =>
          instructionIsTransfer(instruction) ||
          instructionIsClose(instruction) ||
          instructionIsBurn(instruction)
      ) &&
      tx.transaction.message.accountKeys.some(
        (acc) => acc.pubkey.toString() === feeReceiverAddress
      )
    );
  },
};

export const services: ServiceDefinition[] = [mainService];
export default services;
