import angular from 'angular';

import sendPostController from './sendPostController';
import loginController from './loginController';

export default angular.module('app.Controller', [])
    .controller('sendPostController', sendPostController)
    .controller('loginController', loginController);
