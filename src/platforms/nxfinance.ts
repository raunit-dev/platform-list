import { PlatformRaw, ServiceRaw } from "../types";
import { Contract, NetworkId } from "@sonarwatch/portfolio-core";
import { ServiceDefinition } from "../ServiceDefinition";

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
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-lend`,
  name: "Lend",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [contract],
};

const leverageContract = {
  name: "Leverage",
  address: "EHBN9YKtMmrZhj8JZqyBQRGqyyeHw5xUB1Q5eAHszuMt",
  platformId: platform.id,
};

const leverageService: ServiceDefinition = {
  id: `${platform.id}-leverage`,
  name: "Leverage",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [leverageContract],
};

const stakingContract = {
  name: "Staking",
  address: "9un1MopS4NRhgVDLXB1DqoQDTmq1un48YKJuPiMLpSc9",
  platformId: platform.id,
};

const stakingService: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

const airdropContract = {
  name: "Airdrop S2",
  address: "AFGtKskic2qabduNyvykojV5nbdMsg8vet74ehreQ4bh",
  platformId: platform.id,
};

const airdropService: ServiceDefinition = {
  id: `${platform.id}-airdrop`,
  name: "Airdrop",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [airdropContract],
};

const vaultsContract: Contract = {
  name: "NX Finance Vaults",
  address: "HYHnL9BB3tqSPxkVbdcAn9CAa4hyqNYUh1FwDc4he7aD",
  platformId: platform.id,
};

const vaultsService: ServiceDefinition = {
  id: `${platform.id}-vaults`,
  name: "Vaults",
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [vaultsContract],
};

export const services: ServiceDefinition[] = [
  service,
  stakingService,
  leverageService,
  airdropService,
  vaultsService,
];
export default services;
