import { Router, Request, Response } from 'express'

const router = Router()

// ensuring that the body of the request is typed with keys that are either strings or undefined
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

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
    <button>Submit</button>
  </form>`)
})

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  // type guard
  if (email && password) {
    res.send({ email: email.toUpperCase(), password: password.toUpperCase() })
  } else {
    res.send("You must provide an email")
  }
})


export { router }