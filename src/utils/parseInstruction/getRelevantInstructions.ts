import {
  ParsedInstruction,
  ParsedTransactionWithMeta,
  PartiallyDecodedInstruction,
} from '@solana/web3.js';
import { instructionMatch } from './instructionMatch';

const irrelevantProgramIds = [
  'ComputeBudget111111111111111111111111111111',
  'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
  'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo',
  'L2TExMFKdjpN9kozasaurPirfHy9P8sbXoAN1qA3S95', // Lighthouse
];

const irrelevantInstructions = [
  {
    programIds: ['11111111111111111111111111111111'],
    types: ['advanceNonce'],
  },
];

export const getRelevantInstructions = (txn: ParsedTransactionWithMeta) =>
  txn.transaction.message.instructions
    .map((i) => {
      if (irrelevantProgramIds.includes(i.programId.toString())) {
        return null;
      }

      if (
        irrelevantInstructions.some((ii) =>
          instructionMatch(i, ii.programIds, ii.types)
        )
      ) {
        return null;
      }

      return i;
    })
    .filter((i) => i !== null) as (
    | ParsedInstruction
    | PartiallyDecodedInstruction
  )[];
