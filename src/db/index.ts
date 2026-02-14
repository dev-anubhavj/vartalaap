import { Pool } from "pg"
import { env } from "../config/env.js"
import { drizzle } from "drizzle-orm/node-postgres"

const connectionPool = new Pool({
    connectionString: env.DATABASE_URL,
    max: env.MAX_POOL_SIZE,
    min: env.MIN_POOL_SIZE
})

export const db = drizzle(connectionPool)
