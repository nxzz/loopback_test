"use strict";

export default class loginController {
    constructor($location, $http, $state, $stateParams, $sessionStorage) {
        "ngInject";
        this.$http = $http;
        this.$sessionStorage = $sessionStorage;
        this.$stateParams = $stateParams;
        this.$state = $state;
        console.log(this.$stateParams);
        this.id = 'foo@foo.com';
        this.pass = 'foo';

        this.$storage = $sessionStorage.$default({
            userId: null,
            token: null
        });
    }

    login() {
        this
            .$http({
                method: 'POST',
                url: '/api/Accounts/login',
                data: {
                    email: this.id,
                    password: this.pass
                }
            })
            .then(payload => {
                console.log(payload);
                this.$storage.userId = payload.data.userId;
                this.$storage.token = payload.data.id;
                window.location.hash = '#/dashboard';
            })
            .catch(error => {
                this.text = '認証情報が一致しません。再度確認してください。';
                console.error(error);
            });
    }
}
