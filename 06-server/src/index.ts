// importing Request/Response interfaces to annotate req/res
import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
const app = express()
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
// keys used for encryption
app.use(cookieSession({ keys: ['adfdasf'] }))
app.use(router)


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})