import z from 'zod'

const ENVSchema = z.object({
	PORT: z.coerce.number().min(1, 'port must be greater than 0').max(65535, 'port must be less than 65535'),
})

const result = ENVSchema.safeParse(process.env)

if (!result.success) {
	throw new Error(result.error.message)
}

const env = result.data

export default env
export type ENV = z.infer<typeof ENVSchema>
