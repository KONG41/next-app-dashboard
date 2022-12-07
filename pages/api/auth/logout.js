import { serialize } from "cookie"

export default async function (req, res) {
  const { cookies } = req;
  const jwt = cookies.app_cookie_login;

  if (jwt) {
    const serialised = serialize("app_cookie_login", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialised);
    res.status(200).json({ message: "Your successful! logout." });
  } else {
    return res.json({ message: "Your are already not logged in...!" })
  }
}