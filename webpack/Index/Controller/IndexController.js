"use strict";

export default class IndexController {
    constructor($location, $http, $state, Bbslog) {
        "ngInject";
        this.$http = $http;
        this.$state = $state;
        this.Bbslog = Bbslog;

        this.load();
    }

    load() {
        this.list = this.Bbslog.find();
    }

    post() {
        this.Bbslog
            .create({
                body: this.body
            })
            .$promise
            .then(() => {
                this.body = "";
                this.load();
            })
            .catch(err => {
                console.error(err);
            });
    }
}
