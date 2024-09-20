export default defineEventHandler(async (event) => {
  const cookies = getHeader(event, 'cookie') ?? ''
  return cookies.split('; ')
})