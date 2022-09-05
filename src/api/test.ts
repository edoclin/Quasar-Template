import { GET } from 'boot/axios'

export const TEST = () => GET("/user", {})
