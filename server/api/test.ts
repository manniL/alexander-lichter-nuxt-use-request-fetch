export default defineEventHandler(async (event) => {
  return event.$fetch('/api/cookies')
})