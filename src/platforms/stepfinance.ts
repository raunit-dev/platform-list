import { PlatformRaw, ServiceRaw } from "../types";
import { NetworkId } from '@sonarwatch/portfolio-core';
import { ServiceDefinition } from '../ServiceDefinition';

export const platform: PlatformRaw = {
  id: "stepfinance",
  name: "Step Finance",
  defiLlamaId: "step-finance",
  links: {
    website: "https://app.step.finance/",
    twitter: "https://twitter.com/StepFinance_",
    github: "https://github.com/step-finance",
  },
  tokens: [
    "StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT",
    "xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G",
    "StPsoHokZryePePFV8N7iXvfEmgUoJ87rivABX7gaW6",
  ],
  tags: ["tool", "dapp"],
};

const stakingContract = {
  name: 'Staking',
  address: 'Stk5NCWomVN3itaFjLu382u9ibb5jMSHEsh6CuhaGjB',
  platformId: platform.id,
};

const service: ServiceDefinition = {
  id: `${platform.id}-staking`,
  name: 'Staking',
  platformId: platform.id,
  networkId: NetworkId.solana,
  contracts: [stakingContract],
};

export const services: ServiceDefinition[] = [service];
export default services;
