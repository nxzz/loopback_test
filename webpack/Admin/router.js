"use strict";

export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";
    $stateProvider.state('send-post', {
        parent: 'ng-admin',
        url: '/sendPost/:id',
        controller: 'sendPostController',
        controllerAs: 'vm',
        template: require('./Template/sendPostController.html')
    });
}
