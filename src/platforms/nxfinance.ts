import { PlatformRaw, ServiceRaw, NetworkId, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "nxfinance",
  name: "NX Finance",
  defiLlamaId: "nx-finance",
  links: {
    website: "https://www.nxfinance.info/",
    discord: "https://discord.com/invite/nxfinance",
    twitter: "https://twitter.com/NX_Finance",
  },
  tags: ["dapp"],
};

const contract = {
  name: "Lend",
  address: "NXFiKimQN3QSL3CDhCXddyVmLfrai8HK36bHKaAzK7g",
  networkId: NetworkId.solana,
};

const leverageContract = {
  name: "Leverage",
  address: "EHBN9YKtMmrZhj8JZqyBQRGqyyeHw5xUB1Q5eAHszuMt",
  networkId: NetworkId.solana,
};

const vaultsContract: ContractRaw = {
  name: "NX Finance Vaults",
  address: "HYHnL9BB3tqSPxkVbdcAn9CAa4hyqNYUh1FwDc4he7aD",
  networkId: NetworkId.solana,
};

const stakingContract = {
  name: "Staking",
  address: "9un1MopS4NRhgVDLXB1DqoQDTmq1un48YKJuPiMLpSc9",
  networkId: NetworkId.solana,
};

const airdropContract = {
  name: "Airdrop S2",
  address: "AFGtKskic2qabduNyvykojV5nbdMsg8vet74ehreQ4bh",
  networkId: NetworkId.solana,
};

export const service: ServiceRaw = {
  id: `${platform.id}-lend`,
  name: "Lend",
  platformId: platform.id,
  contractsRaw: [contract],
};

export const leverageService: ServiceRaw = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  contractsRaw: [leverageContract],
};

export const vaultsService: ServiceRaw = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  contractsRaw: [vaultsContract],
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const airdropService: ServiceRaw = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  contractsRaw: [airdropContract],
};

export const services: ServiceRaw[] = [
  service,
  leverageService,
  vaultsService,
  stakingService,
  airdropService,
];
