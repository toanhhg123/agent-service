import dotenv from 'dotenv'

dotenv.config()

export const env = {
  grpc_port_auth: process.env.GRPC_PORT_AUTH! || -9999
}
