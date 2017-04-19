"use strict";

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";
    $stateProvider.state('index', {
        url: '/',
        template: require('./Template/IndexController.html'),
        controller: 'IndexController',
        controllerAs: 'vm'
    });
    $stateProvider.state('login', {
        url: '/login',
        template: require('./Template/LoginController.html'),
        controller: 'LoginController',
        controllerAs: 'vm'
    });
    $stateProvider.state('todo', {
        url: '/todo',
        template: require('./Template/ToDoController.html'),
        controller: 'ToDoController',
        controllerAs: 'vm'
    });

    $urlRouterProvider.when('', '/');
}
