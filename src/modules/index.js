import userRoutes from './users/user.routes';

export default app => {
  app.use('/api/v1/users', userRoutes);
};
