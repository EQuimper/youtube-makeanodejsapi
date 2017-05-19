import { Router } from 'express';
import validate from 'express-validation';

import { authLocal } from '../../services/auth.services';
import * as userController from './user.controllers';
import userValidation from './user.validations';

const routes = new Router();

routes.post('/signup', validate(userValidation.signup), userController.signUp);
routes.post('/login', authLocal, userController.login);

export default routes;
