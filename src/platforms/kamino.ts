import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { jupiterV6Contract } from './jupiter';
import { contract } from './dflow';
import { expressRelayContract } from './pyth';
import { ServiceDefinition } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "kamino",
  name: "Kamino",
  description: "Borrow, Earn and Leverage on Solana",
  defiLlamaId: "parent#kamino-finance",
  links: {
    website: "https://kamino.finance/",
    discord: "https://discord.com/invite/kaminofinance",
    twitter: "https://x.com/KaminoFinance",
    github: "https://github.com/Kamino-Finance",
    documentation: "https://docs.kamino.finance/",
  },
  tokens: ["KMNo3nJsBXfcpJTVhZcXLW7RmTwTt4GVFE7suUBo9sS"],
  tags: ["dapp"],
};

export const kaminoLendContract: Contract = {
  name: 'Kamino Lend',
  address: 'KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD',
  platformId: platform.id,
};

const poolsContract = {
  name: 'Liquidity',
  address: '6LtLpnUFNByNXLyCoK9wA2MykKAmQNZKBdY8s47dehDc',
  platformId: platform.id,
};

const kaminoFarmContract = {
  name: 'Kamino Farm',
  address: 'FarmsPZpWu9i7Kky8tPN37rs2TpmMrAZrC7S7vJa91Hr',
  platformId: platform.id,
};

const limitOrderContract = {
  name: 'Kamino Limit Order',
  address: 'LiMoM9rMhrdYrfzUCxQppvxCSG1FcrUK9G8uLq4A1GF',
  platformId: platform.id,
};

const vaultContract = {
  name: 'Kamino Vault',
  address: 'KvauGMspG5k6rtzrqqn7WNn3oZdyKqLKwK2XWQ8FLjd',
  platformId: platform.id,
};

const leverageOnVaultContract = {
  name: 'Leverage',
  address: 'CRhtqXk98ATqo1R8gLg7qcpEMuvoPzqD5GNicPPqLMD',
  platformId: platform.id,
};

const scopePriceContract = {
  name: 'Scope Price',
  address: 'HFn8GnPADiny6XqUoWE8uRPPxb29ikn4yTuPa9MF2fWJ',
  platformId: platform.id,
};

const airdropContract = {
  name: 'Airdrop',
  address: 'KdisqEcXbXKaTrBFqeDLhMmBvymLTwj9GmhDcdJyGat',
  platformId: platform.id,
};

const scopePriceService: ServiceDefinition = {
  id: `${platform.id}-scope-price`,
  name: 'Scope Price',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [scopePriceContract],
};

const kaminoLendingService: ServiceDefinition = {
  id: `${platform.id}-lend`,
  name: 'Lending',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [kaminoLendContract],
};
const kaminoFarmService = {
  id: `${platform.id}-farm`,
  name: 'Farm',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [kaminoFarmContract],
};
const kaminoMultiplyService: ServiceDefinition = {
  id: `${platform.id}-multiply`,
  name: 'Multiply',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [kaminoLendContract, jupiterV6Contract],
};
const kaminoLimitOrderService: ServiceDefinition = {
  id: `${platform.id}-limit-order`,
  name: 'Limit Order',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [limitOrderContract],
};
const swapService: ServiceDefinition = {
  id: `${platform.id}-swap-dflow`,
  name: 'Swap',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [limitOrderContract, contract],
};
const swapJupiterService: ServiceDefinition = {
  id: `${platform.id}-swap-jupiter`,
  name: 'Swap',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [limitOrderContract, jupiterV6Contract],
};

const swapPythService: ServiceDefinition = {
  id: `${platform.id}-swap-pyth`,
  name: 'Swap',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [limitOrderContract, expressRelayContract],
};

const kaminoLiquidityService: ServiceDefinition = {
  id: `${platform.id}-liquidity`,
  name: 'Liquidity',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (tx) =>
    matchAnyInstructionWithPrograms(tx, [
      poolsContract.address,
      vaultContract.address,
    ]),
};

const vaultLeverageService: ServiceDefinition = {
  id: `${platform.id}-leverage`,
  name: 'Leverage',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [leverageOnVaultContract],
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: 'Airdrop',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

export const services: ServiceDefinition[] = [
  kaminoLendingService,
  kaminoFarmService,
  kaminoMultiplyService,
  airdropService,
  kaminoLimitOrderService,
  swapService,
  swapJupiterService,
  swapPythService,
  kaminoLiquidityService,
  vaultLeverageService,
  scopePriceService,
];

export default services;
