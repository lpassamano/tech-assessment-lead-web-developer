import { Pool } from 'pg'

const pool = new Pool({
  user: "dev",
  host: 'localhost',
  database: 'event_management_dev',
  password: "development"
})

export default pool
