function isValidString (val: unknown): val is string {
  const value = val as string
  return value != null && typeof value === 'string' && value.trim().length > 0
}

export default {
  isValidString
}