import { ContractRaw, NetworkId, PlatformRaw, ServiceRaw } from "../types";
export const platform: PlatformRaw = {
  id: "helio",
  name: "MoonPay Commerce (Helio)",
  description:
    "MoonPay Commerce (formerly Helio) is a crypto payment infrastructure enabling merchants to accept cryptocurrency payments.",
  tags: ["tool", "infrastructure", "payments"],
  defiLlamaId: "helio",
  links: {
    website: "https://www.hel.io/",
    twitter: "https://x.com/MoonPayCommerce",
  },
};

const contractV2: ContractRaw = {
  name: "Payment",
  address: "ENicYBBNZQ91toN7ggmTxnDGZW14uv9UkumN7XBGeYJ4",
  networkId: NetworkId.solana,
};

const contractV1 = {
  name: "Payment V1",
  address: "3KPRuKWxV6PtneZXbokMBwdF4T9brCFx7FcmKJ2tPqqt",
  networkId: NetworkId.solana,
};

export const paymentService: ServiceRaw = {
  id: `${platform.id}-payment`,
  name: "Payment",
  platformId: platform.id,
  contractsRaw: [contractV2],
  description:
    "Crypto payment processing enabling merchants to accept token payments with fiat conversion options.",
};

export const paymentV2Service: ServiceRaw = {
  id: `${platform.id}-payment-v1`,
  name: "Payment V1",
  platformId: platform.id,
  contractsRaw: [contractV1],
};

export const services: ServiceRaw[] = [paymentService, paymentV2Service];
