"use strict";

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";
    $stateProvider.state('index', {
        url: '/',
        template: require('./Template/IndexController.html'),
        controller: 'IndexController',
        controllerAs: 'vm'
    });

    $urlRouterProvider.when('', '/');
}
