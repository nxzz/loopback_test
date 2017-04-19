import angular from 'angular';

import IndexController from './IndexController';
import LoginController from './LoginController';
import ToDoController from './ToDoController';

export default angular.module('app.Controller', [])
    .controller('IndexController', IndexController)
    .controller('LoginController', LoginController)
    .controller('ToDoController', ToDoController);
