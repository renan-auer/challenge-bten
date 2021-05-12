import { UserRoutes } from '@routes/UserRoute';
import { DashboardRoute } from '@routes/DashboardRoute';
import { LoginRoute } from '@routes/LoginRoute';

const API = '/api';

export default (app) => {
  app.use(API, UserRoutes);
  app.use(API, LoginRoute);
  app.use(API, DashboardRoute);
};