module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env('JWT_SECRET'),
    }
  },
  seo: {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        episode: {
          field: 'Slug',
          references: 'Title',
        },
      },
    },
  },  
})