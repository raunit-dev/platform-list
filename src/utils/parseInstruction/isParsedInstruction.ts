import {
  ParsedInstruction,
  PartiallyDecodedInstruction,
} from '@solana/web3.js';

/**
 * Checks if an instruction is of type ParsedInstruction
 * @param instruction - The instruction to check
 * @returns true if the instruction is parsed
 */
export function isParsedInstruction(
  instruction: ParsedInstruction | PartiallyDecodedInstruction
): instruction is ParsedInstruction {
  return (
    instruction &&
    'parsed' in instruction &&
    instruction.parsed &&
    typeof instruction.parsed === 'object'
  );
}
