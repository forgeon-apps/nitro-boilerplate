export default defineEventHandler(() => {
  return {
    message: 'Nitro API v1 index',
    service: 'nitro-playground',
    routes: {
      html: ['/', '/info', '/about', '/framework'],
      health: ['/status'],
      api: ['/v1'],
    },
  }
})
