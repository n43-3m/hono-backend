import { DefaultLogger } from 'drizzle-orm/logger'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import env from '@/lib/env.js'

export async function checkDb() {
	try {
		const client = new Client({ connectionString: env.DATABASE_URL })
		await client.connect()
		await client.end()
	} catch (err) {
		console.log('failed to connect to the database.', err)
		process.exit(0)
	}
}

class MyLogger extends DefaultLogger {
	logQuery(query: string, params: unknown[]): void {
		console.log({ query, params })
	}
}

// You can specify any property from the node-postgres connection options
const db = drizzle({
	connection: {
		connectionString: env.DATABASE_URL,
		ssl: true,
	},
	casing: 'snake_case',
	logger: env.DEPLOYMENT === 'dev' ? new MyLogger() : false,
})

export default db
