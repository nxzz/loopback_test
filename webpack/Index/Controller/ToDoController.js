"use strict";

export default class ToDoController {
    constructor($location, $http, $state, Account) {
        "ngInject";
        this.$http = $http;
        this.$state = $state;
        this.Account = Account;
        this.load();
    }

    load() {
        if (!this.Account.isAuthenticated()) {
            return this.$state.go('login');
        }
        console.log(this.Account.prototype$__create__toDos);
        this.Account
            .getCurrent()
            .$promise
            .then((val) => {
                this.user = val;
                return this.Account.prototype$__get__toDos({ id: val.id });
                // return this.Account.gettodos({ id: val.id });
            })
            .then((val) => {
                console.log(val);
                this.todos = val;
            })
            .catch(err => {
                console.error(err);
            });
    }

    post() {
        this.Account
            .getCurrent()
            .$promise
            .then((val) => {
                return this.Account.prototype$__create__toDos({
                    id: val.id
                }, {
                        title: this.title,
                        done: true
                    });
            })
            .then(() => {
                this.title = "";
                this.load();
            })
            .catch(err => {
                console.error(err);
            });
    }
}
