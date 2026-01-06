import { PlatformRaw, ServiceRaw, NetworkId } from "../types";
export const platform: PlatformRaw = {
  id: "dumpy",
  name: "Dumpy",
  description:
    "Dumpy.fun is a platform by Save Finance enabling users to short memecoins with collateral-backed positions and leverage.",
  links: {
    website: "https://dumpy.fun/",
    twitter: "https://x.com/save_finance",
  },
  tags: ["dapp", "memecoin"],
};

const lendingContract = {
  name: "Short Lending",
  address: "3JmCcXAjmBpFzHHuUpgJFfTQEQnAR7K1erNLtWV1g7d9",
  networkId: NetworkId.solana,
};

export const lendingService: ServiceRaw = {
  id: `${platform.id}-short-lending`,
  name: "Short Lending",
  platformId: platform.id,
  contractsRaw: [lendingContract],
};

export const services: ServiceRaw[] = [lendingService];
