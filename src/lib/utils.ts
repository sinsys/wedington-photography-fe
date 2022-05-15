/* 
	UTILITIES
	Set of utilities that are commonly used within the app
	Type Guards, validations, and common mutations are available here
*/
function isValidString(val: unknown): val is string {
	const value = val as string
	return value != null && typeof value === 'string' && value.trim().length > 0
}

export default {
	isValidString
}
