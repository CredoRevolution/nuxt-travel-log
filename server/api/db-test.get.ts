import { createClient } from '@libsql/client'

export default defineEventHandler(async () => {
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN

  if (!url || !authToken) {
    throw createError({ statusCode: 500, statusMessage: 'Missing TURSO env vars' })
  }

  const client = createClient({ url, authToken })

  // самый простой тест
  const rs = await client.execute('SELECT 1 as ok')

  return { ok: true, result: rs.rows }
})
