import { ParsedTransactionWithMeta } from '@solana/web3.js';
import { getRelevantInstructions } from '../parseInstruction/getRelevantInstructions';
import {
  instructionIsCreate,
  instructionIsTransfer,
} from '../parseInstruction/instructionIs';

export default function transactionIsTransfer(
  txn: ParsedTransactionWithMeta
): boolean {
  const instructions = getRelevantInstructions(txn);

  // Check if all instructions are either transfers or creates, and if there's at least one transfer
  return (
    instructions.every(
      (instruction) =>
        instructionIsTransfer(instruction) || instructionIsCreate(instruction)
    ) && instructions.some((instruction) => instructionIsTransfer(instruction))
  );
}
