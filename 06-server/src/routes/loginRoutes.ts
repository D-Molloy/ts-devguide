import { Router, Request, Response, NextFunction } from 'express'

const router = Router()

// ensuring that the body of the request is typed with keys that are either strings or undefined
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

// custom auth middleware
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn === true) {
    next()
    // returning on a new line so its clear that nothing is returned
    return
  }
  res.status(403).send("Not permitted")
}

router.get("/", (req: Request, res: Response) => {

  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <h1>You are now logged in, ${req.session.email}</h1>
      <a href="/protected">Protected Page For Cool People</a>
      <a href="/logout">Logout</a>
    </div>`)

  } else {
    res.send(`
    <div>
      <h1>You are not logged in</h1>
      <a href="/login">Login</a>
    </div>`)
  }
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
  if (email && password && email === "denis@denis.com" && password === "password") {
    //mark the user as logged in
    req.session = { loggedIn: true, email }
    //redirect them to the root route
    res.redirect("/")
  } else {
    res.send("Invalid Credentials")
  }
})

router.get("/logout", (req: RequestWithBody, res: Response) => {
  req.session = undefined
  res.redirect("/login")
})


router.get("/protected", requireAuth, (req: RequestWithBody, res: Response) => {
  res.send(`
  <div>
    <h1>Welcome to Protected Route</h1>
    <a href="/logout">Logout</a>
  </div>`)
})

export { router }