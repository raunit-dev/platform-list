import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ParsedTransactionWithMeta } from '@solana/web3.js';
import { ServiceDefinition } from '../ServiceDefinition';
import { getRelevantInstructions } from '../utils/parseInstruction/getRelevantInstructions';
import { instructionIsDelegate } from '../utils/parseInstruction/instructionIs';
import { isParsedInstruction } from '../utils/parseInstruction/isParsedInstruction';

export const platform: PlatformRaw = {
  id: "helius",
  name: "Helius",
  links: {
    website: "https://www.helius.dev/",
    twitter: "https://x.com/heliuslabs",
    documentation: "https://www.helius.dev/docs",
  },
  tags: ["tool"],
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-billing`,
  name: 'Billing',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (txn: ParsedTransactionWithMeta) => {
    const instructions = getRelevantInstructions(txn);

    if (instructions.length !== 1) return false;
    const instruction = instructions[0];
    if (!isParsedInstruction(instruction)) return false;
    if (!instructionIsDelegate(instruction)) return false;

    return (
      instruction.parsed.info.delegate ===
      '7uz5xiFmCwFUTf2aowMQXDgfBtQGHbBJtvcyPYhiFVyQ'
    );
  },
};

export const services: ServiceDefinition[] = [stakingService];
export default services;
