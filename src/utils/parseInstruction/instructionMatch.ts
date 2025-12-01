import {
  ParsedInstruction,
  PartiallyDecodedInstruction,
} from '@solana/web3.js';
import { isParsedInstruction } from './isParsedInstruction';

/**
 * Checks if an instruction matches the specified criteria
 * @param instruction - The instruction to check
 * @param programIds - The accepted program IDs
 * @param types - The accepted instruction types (optional)
 * @returns true if the instruction matches the criteria
 */
export function instructionMatch(
  instruction: ParsedInstruction | PartiallyDecodedInstruction,
  programIds: string[],
  types?: string[]
): boolean {
  const programIdMatch = programIds.includes(instruction.programId.toString());

  if (!programIdMatch) {
    return false;
  }

  if (types && types.length > 0) {
    if (!isParsedInstruction(instruction)) {
      return false;
    }
    return types.includes(instruction.parsed.type);
  }

  return true;
}
