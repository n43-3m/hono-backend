import type { Context } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'

const errorResponse = <T>(
	c: Context,
	statusCode: StatusCode = 500,
	message: string = 'something went wrong',
	errors: T | string[] = []
) => {
	c.status(statusCode)
	return c.json({
		success: false,
		statusCode,
		message,
		errors,
	})
}
export default errorResponse
