// importing Request/Response interfaces to annotate req/res
import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'

const app = express()
const PORT = 3000;

app.use(router)


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})