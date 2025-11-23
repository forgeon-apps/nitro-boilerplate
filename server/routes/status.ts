export default defineEventHandler(() => {
  return {
    status: 'ok',
    service: 'nitro-playground',
    runtime: 'nitro',
    timestamp: new Date().toISOString(),
  }
})
