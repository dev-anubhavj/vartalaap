import z from "zod"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const envSchema = z.object({
    PORT: z.coerce.number().int().default(8080),

    // Db variables
    DATABASE_URL: z.url(),
    MAX_POOL_SIZE: z.coerce.number().int().default(50),
    MIN_POOL_SIZE: z.coerce.number().int().default(5)
})

export const env = envSchema.parse(process.env)
