import {
  ParsedInstruction,
  PartiallyDecodedInstruction,
} from '@solana/web3.js';
import { instructionMatch } from './instructionMatch';
import {
  solanaAssociatedTokenContract,
  solanaToken2022ProgramContract,
  solanaTokenProgramContract,
  systemContract,
} from '../../platforms/solana/contracts';

export const instructionIsBurn = (
  instruction: ParsedInstruction | PartiallyDecodedInstruction
) =>
  instructionMatch(instruction, [solanaTokenProgramContract.address], ['burn']);

export const instructionIsCreate = (
  instruction: ParsedInstruction | PartiallyDecodedInstruction
) =>
  instructionMatch(
    instruction,
    [
      systemContract.address,
      solanaTokenProgramContract.address,
      solanaToken2022ProgramContract.address,
      solanaAssociatedTokenContract.address,
    ],
    ['create', 'createIdempotent']
  );

export const instructionIsClose = (
  instruction: ParsedInstruction | PartiallyDecodedInstruction
) =>
  instructionMatch(
    instruction,
    [solanaTokenProgramContract.address],
    ['closeAccount']
  );

export const instructionIsTransfer = (
  instruction: ParsedInstruction | PartiallyDecodedInstruction
) =>
  instructionMatch(
    instruction,
    [
      systemContract.address,
      solanaTokenProgramContract.address,
      solanaToken2022ProgramContract.address,
      solanaAssociatedTokenContract.address,
    ],
    ['transferChecked', 'transfer']
  );

export const instructionIsDelegate = (
  instruction: ParsedInstruction | PartiallyDecodedInstruction
) =>
  instructionMatch(
    instruction,
    [
      solanaTokenProgramContract.address,
      solanaToken2022ProgramContract.address,
    ],
    ['approveChecked', 'approve', 'revoke']
  );
