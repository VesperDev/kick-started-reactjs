import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'

export const sessionOptions = {
  cookieName: 'token',
  password: 'complex_password_at_least_32_characters_long',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}

export const withSessionRoute = (handler) => {
  return withIronSessionApiRoute(handler, sessionOptions)
}

export const withSessionSsr = (handler) => {
  return withIronSessionSsr(handler, sessionOptions)
}
