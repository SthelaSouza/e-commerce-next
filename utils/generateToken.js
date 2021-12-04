import jwt from 'jsonwebtoken'
import { env } from '../next.config'

export const createAcessToken = (payload) => {
    console.log(process.env.ACESS_TOKEN_SECRET)
    return jwt.sign(payload, process.env.ACESS_TOKEN_SECRET, {expiresIn: '15m'})
}

export const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.ACESS_TOKEN_SECRET, {expiresIn: '7d'})
}