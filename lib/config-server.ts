import { z } from "zod"

const envSchema = z.object({
  W3GPT_API_SECRET: z.string().min(1),
  CRON_SECRET: z.string().min(1),
  INFURA_API_KEY: z.string().min(1),
  PINATA_JWT: z.string().min(1)
})

const env = envSchema.parse({
  W3GPT_API_SECRET: process.env.W3GPT_API_SECRET,
  CRON_SECRET: process.env.CRON_SECRET,
  INFURA_API_KEY: process.env.INFURA_API_KEY,
  PINATA_JWT: process.env.PINATA_JWT
})

export const { W3GPT_API_SECRET, CRON_SECRET, INFURA_API_KEY, PINATA_JWT } = env
