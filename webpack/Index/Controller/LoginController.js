"use strict";

export default class LoginController {
    constructor($location, $http, $state, Account) {
        "ngInject";
        this.$http = $http;
        this.$state = $state;
        this.$location = $location;
        this.Account = Account;
    }

    login() {
        this.Account
            .login({
                email: this.email,
                password: this.password,
                rememberMe: true
            })
            .$promise
            .then((user) => {
                this.$state.go('todo');
            })
            .catch((err) => {
                this.$state.go('login');
            });
    }
}
