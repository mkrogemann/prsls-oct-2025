import { config } from 'dotenv'

export default function setup() {
  config({ path: './.env.cfnoutputs' })
  config()
  process.env.AWS_REGION = 'us-east-1'
}
