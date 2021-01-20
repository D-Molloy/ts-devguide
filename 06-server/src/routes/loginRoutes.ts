import { Router, Request, Response } from 'express'

const router = Router()


router.get("/", (req: Request, res: Response) => {
  res.send(`<h1>HELLO WORLD</h1>`)
})


router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <label for="email">
      Email
      <input name="email" placeholder="joe@joe.com" />
    </label>
    <br>
    <br>
    <label for="password">
      Password
      <input name="password" type="password" />
    </label>
  </form>`)
})


export { router }