import app from "./app.js"
import { env } from "./config/env.js"

app.listen(env.PORT, () => {
    console.log(`Vartalaap running and listening at port: ${env.PORT}`)
})
