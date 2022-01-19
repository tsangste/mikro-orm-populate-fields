export default {
  entities: ['./**/*.entity.js'],
  entitiesTs: ['./**/*.entity.ts'],
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
  dbName: process.env.POSTGRES_DATABASE || 'postgres',
  type: 'postgresql',
  debug: process.env.NODE_ENV !== 'production',
};
