import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';
import { systemContract } from './solana/contracts';

export const platform: PlatformRaw = {
  id: "solcasino",
  name: "Solcasino",
  links: {
    website: "https://solcasino.io/",
    twitter: "https://x.com/Solcasinoio",
    discord: "https://discord.gg/solcasinoio",
    telegram: "https://t.me/SolcasinoIOBot",
  },
  tags: ["gaming", "dapp"],
};

const contract = {
  name: 'Solcasino',
  address: 'CQ36xjMHgmgwEM1yvJYUWg3YxMvzwM4Mntn6vZrMk86z',
  platformId: platform.id,
};

const depositService: ServiceDefinition = {
  id: `${platform.id}-deposit`,
  name: 'Deposit',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const withdrawService: ServiceDefinition = {
  id: `${platform.id}-withdraw`,
  name: 'Withdraw',
  platformId: platform.id,
  networkId: NetworkId.solana,
  matchTransaction: (txn) =>
    txn.transaction.message.instructions.some(
      (ix) => ix.programId.toString() === systemContract.address
    ) &&
    txn.transaction.message.accountKeys.some(
      (x) =>
        x.pubkey.toString() ===
          '6qkh2JcHt3ctFeiL4HBn1e9NU5aPw25XNhtgEv6ZCJ4U' && x.signer
    ),
};

export const services: ServiceDefinition[] = [depositService, withdrawService];
export default services;
