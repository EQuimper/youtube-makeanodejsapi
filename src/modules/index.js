import userRoutes from './users/user.routes';
import postRoutes from './posts/post.routes';

export default app => {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/posts', postRoutes);
};
