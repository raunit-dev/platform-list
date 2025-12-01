import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition, ServicePriority } from '../ServiceDefinition';
import { matchAnyInstructionWithPrograms } from '../utils/parseTransaction/matchAnyInstructionWithPrograms';

export const platform: PlatformRaw = {
  id: "jupiter",
  name: "Jupiter",
  tags: ["dapp"],
  links: {
    website: "https://jup.ag/",
  },
};

const governancePlatformId = 'jupiter-governance';
const launchpadPlatformId = 'jupiter-launchpad';
const predictionMarketPlatformId = 'jupiter-pm';

const gaslessPayer = 'gasTzr94Pmp4Gf8vknQnqxeYxdgwFjbgdJa4msYRpnB';
const lov2GaslessPayer = 'gasAx5Y917MYdmdnwiomwYDhmDKNGDJnN1MmEbxVdVw';
const transferTracker = 'trfb53BmkHNeoqaa3REgqnrbwUZqAFYdjTkivkJ6aWg';

export const jupiterV7Contract: Contract = {
  name: 'Swap V7',
  address: 'JUP7pNXFL1G2BESRYMtZ1jepzfDQVffkkkf5JhXWWhC',
  platformId: platform.id,
};

export const jupiterV6Contract: Contract = {
  name: 'Swap V6',
  address: 'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4',
  platformId: platform.id,
};

const jupiterV5Contract = {
  name: 'Swap v5',
  address: 'JUP5pEAZeHdHrLxh5UCwAbpjGwYKKoquCpda2hfP4u8',
  platformId: platform.id,
};

const jupiterV4Contract = {
  name: 'Swap v4',
  address: 'JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB',
  platformId: platform.id,
};

const jupiterV3Contract = {
  name: 'Swap v3',
  address: 'JUP3c2Uh3WA4Ng34tw6kPd2G4C5BB21Xo36Je1s32Ph',
  platformId: platform.id,
};

const jupiterV2Contract = {
  name: 'Swap v2',
  address: 'JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo',
  platformId: platform.id,
};

const jupiterV1Contract = {
  name: 'Swap v1',
  address: 'JUP6i4ozu5ydDCnLiMogSckDPpbtr7BJ4FtzYWkb5Rk',
  platformId: platform.id,
};

const apeContract: Contract = {
  name: 'Ape',
  address: 'JSWX3pKDbj2EdCMu4ei7sPYSpdcwZNyjkDSteoHQ4UH',
  platformId: platform.id,
};

const jupiterLimitV1Contract: Contract = {
  name: 'Limit v1',
  address: 'jupoNjAxXgZ4rjzxzPMP4oxduvQsQtZzyknqvzYNrNu',
  platformId: platform.id,
};

const jupiterLimitContract: Contract = {
  name: 'Limit',
  address: 'j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X',
  platformId: platform.id,
};

const jupiterDcaContract: Contract = {
  name: 'DCA',
  address: 'DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M',
  platformId: platform.id,
};

const jupiterDcaVaContract: Contract = {
  name: 'VA',
  address: 'VALaaymxQh2mNy2trH9jUqHT1mTow76wpTcGmSWSwJe',
  platformId: platform.id,
};

const jupiterLockContract: Contract = {
  name: 'Lock',
  address: 'LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn',
  platformId: platform.id,
};

const jupiterPerpsContract: Contract = {
  name: 'Perps',
  address: 'PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS2qQJu',
  platformId: platform.id,
};

const aidropContract: Contract = {
  name: 'Airdrop',
  address: 'meRjbQXFNf5En86FXT2YPz1dQzLj4Yb3xK8u1MVgqpb',
  platformId: platform.id,
};

const jupiterJupuaryContract: Contract = {
  name: 'Jupuary',
  address: 'DiS3nNjFVMieMgmiQFm6wgJL7nevk4NrhXKLbtEH1Z2R',
  platformId: platform.id,
};

const jupiterGovernanceContract: Contract = {
  name: 'Governance',
  address: 'GovaE4iu227srtG2s3tZzB4RmWBzw8sTwrCLZz7kN7rY',
  platformId: governancePlatformId,
};

const jupiterVoteContract: Contract = {
  name: 'Locker Vote',
  address: 'voTpe3tHQ7AjQHMapgSue2HJFAh2cGsdokqN3XqmVSj',
  platformId: governancePlatformId,
};

const rfqContract: Contract = {
  name: 'JupiterZ',
  address: '61DFfeTKM7trxYcPQCM78bJ794ddZprZpAwAnLiwTpYH',
  platformId: platform.id,
};

const inviteContract: Contract = {
  name: 'Invite',
  address: 'inv1tEtSwRMtM44tbvJGNiTxMvDfPVnX9StyqXfDfks',
  platformId: platform.id,
};

const lfgContract: Contract = {
  name: 'LFG',
  address: 'DiSLRwcSFvtwvMWSs7ubBMvYRaYNYupa76ZSuYLe6D7j',
  platformId: launchpadPlatformId,
};

const asrContract: Contract = {
  name: 'ASR Distributor',
  address: 'Dis2TfkFnXFkrtvAktEkw37sdb7qwJgY6H7YZJwk51wK',
  platformId: platform.id,
};

const lendContract: Contract = {
  name: 'Lend',
  address: 'jup3YeL8QhtSx1e253b2FDvsMNC87fDrgQZivbrndc9',
  platformId: platform.id,
};

const lendVaultsContract: Contract = {
  name: 'Lend Vaults',
  address: 'jupr81YtYssSyPt8jbnGuiWon5f6x9TcDEFxYe3Bdzi',
  platformId: platform.id,
};

const predictionMarketsContract: Contract = {
  name: 'Prediction Markets',
  address: '3ZZuTbwC6aJbvteyVxXUS7gtFYdf7AuXeitx6VyvjvUp',
  platformId: platform.id,
};

export const services: ServiceDefinition[] = [
  {
    id: `${platform.id}-swap-v7`,
    name: 'Swap v7',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterV7Contract],
    priority: ServicePriority.low,
  },
  {
    id: `${platform.id}-swap`,
    name: 'Swap v6',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterV6Contract],
    priority: ServicePriority.low,
  },
  {
    id: `${platform.id}-swap-v5`,
    name: 'Swap v5',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterV5Contract],
  },
  {
    id: `${platform.id}-swap-v4`,
    name: 'Swap v4',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterV4Contract],
  },
  {
    id: `${platform.id}-swap-v3`,
    name: 'Swap v3',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterV3Contract],
  },
  {
    id: `${platform.id}-swap-v2`,
    name: 'Swap v2',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterV2Contract],
  },
  {
    id: `${platform.id}-swap-v1`,
    name: 'Swap v1',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterV1Contract],
  },
  {
    id: `${platform.id}-ape`,
    name: 'Ape',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [apeContract, jupiterV6Contract],
  },
  {
    id: `${platform.id}-jupiter-z`,
    name: 'JupiterZ',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [rfqContract],
  },
  {
    id: `${platform.id}-limitv1`,
    name: 'Limit v1',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterLimitV1Contract],
  },
  {
    id: `${platform.id}-limit`,
    name: 'Limit',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterLimitContract],
  },
  {
    id: `${platform.id}-limit-v2`,
    name: 'Limit V2',
    platformId: platform.id,
    networkId: NetworkId.solana,
    matchTransaction: (tx) =>
      tx.transaction.message.accountKeys.some(
        (accountKey) =>
          accountKey.signer &&
          (accountKey.pubkey.toString() === lov2GaslessPayer ||
            accountKey.pubkey.toString() === transferTracker)
      ),
  },
  {
    id: `${platform.id}-dca-swap`,
    name: 'DCA',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterDcaContract, jupiterV6Contract],
  },
  {
    id: `${platform.id}-dca-deposit`,
    name: 'DCA',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterDcaContract],
  },
  {
    id: `${platform.id}-dcava`,
    name: 'DCA VA',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterDcaVaContract],
  },
  {
    id: `${platform.id}-lock`,
    name: 'Lock',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterLockContract],
  },
  {
    id: `${platform.id}-perps`,
    name: 'Perps',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterPerpsContract],
  },
  {
    id: `${platform.id}-airdrop`,
    name: 'Airdrop',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [aidropContract],
  },
  {
    id: `${platform.id}-jupuary`,
    name: 'Jupuary',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [jupiterJupuaryContract],
  },
  {
    id: `${platform.id}-governance`,
    name: 'Vote',
    platformId: governancePlatformId,
    networkId: NetworkId.solana,
    matchTransaction: (tx) =>
      matchAnyInstructionWithPrograms(tx, [
        jupiterGovernanceContract.address,
        jupiterVoteContract.address,
      ]),
  },
  {
    id: `${platform.id}-invite`,
    name: 'Invite',
    platformId: platform.id,
    networkId: NetworkId.solana,
    contracts: [inviteContract],
  },
  {
    id: `${launchpadPlatformId}-lfg`,
    name: 'LFG',
    platformId: launchpadPlatformId,
    networkId: NetworkId.solana,
    contracts: [lfgContract],
  },
  {
    id: `${platform.id}-asr`,
    name: 'ASR',
    platformId: governancePlatformId,
    networkId: NetworkId.solana,
    contracts: [asrContract],
  },
  {
    id: `${platform.id}-lend`,
    name: 'Lend',
    platformId: platform.id,
    networkId: NetworkId.solana,
    matchTransaction: (tx) =>
      matchAnyInstructionWithPrograms(tx, [
        lendContract.address,
        lendVaultsContract.address,
      ]),
  },
  {
    id: `${platform.id}-prediction-markets`,
    name: 'Prediction Markets',
    platformId: predictionMarketPlatformId,
    networkId: NetworkId.solana,
    matchTransaction: (tx) =>
      matchAnyInstructionWithPrograms(tx, [predictionMarketsContract.address]),
  },
  {
    id: `${platform.id}-gasless-swap`,
    name: 'Gasless Swap',
    platformId: platform.id,
    networkId: NetworkId.solana,
    matchTransaction: (tx) =>
      tx.transaction.message.accountKeys.some(
        (accountKey) =>
          accountKey.signer && accountKey.pubkey.toString() === gaslessPayer
      ),
  },
];
export default services;
