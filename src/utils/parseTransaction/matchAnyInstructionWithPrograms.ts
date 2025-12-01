import { ParsedTransactionWithMeta } from '@solana/web3.js';
import { instructionMatch } from '../parseInstruction/instructionMatch';

export function matchAnyInstructionWithPrograms(
  tx: ParsedTransactionWithMeta,
  programs: string[]
): boolean {
  return tx.transaction.message.instructions.some((instruction) =>
    instructionMatch(instruction, programs)
  );
}
