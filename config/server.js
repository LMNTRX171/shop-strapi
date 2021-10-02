module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cc4c0cba4a7d8e50e5a84ecbf2a6c22e'),
    },
  },
});
