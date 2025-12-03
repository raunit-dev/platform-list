import { z } from "zod";

export const ContractSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  serviceId: z.string(),
  platformId: z.string(),
  networkId: z.string(),
});

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  platformId: z.string(),
  networkId: z.string(),
  contracts: z.array(ContractSchema),
  link: z.string().url().optional(),
  description: z.string().optional(),
});

export const PlatformSchema = z.object({
  id: z
    .string()
    .regex(
      /^[a-z0-9][a-z0-9-]*$/,
      "Platform ID must be in kebab-case: lowercase letters, numbers, and hyphens only. Cannot start with a hyphen.",
    ),
  name: z.string(),
  image: z.string().url(),
  tags: z.array(z.string()).min(1),
  links: z.object({
    website: z.string().url(),
    discord: z.string().url().optional(),
    telegram: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    medium: z.string().url().optional(),
    documentation: z.string().url().optional(),
  }),
});
