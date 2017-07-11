"use strict";

export default class sendEmail {
    constructor($state) {
        // constructor($http) {
        "ngInject";
        // this.selector = 'vtable';
        this.template = '<a class="btn btn-default" ng-click="send()">Send post by email</a>';
        this.restrict = 'E';
        this.scope = {
            post: '&'
        };
        this.$state = $state;
    }

    link(scope, element, attrs) {
        scope.send = () => this.$state.go('send-post', {
            id: scope.post().values.id
        });
    }

    static activate() {
        return new sendEmail();
    }
}