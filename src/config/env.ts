import z from "zod"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const envSchema = z.object({
    PORT: z.coerce.number().int().default(8080)
})

export const env = envSchema.parse(process.env)
