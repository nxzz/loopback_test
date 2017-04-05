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

    post(body) {
        this.Bbslog
            .create({
                body: body
            })
            .$promise
            .then(() => {
                this.load();
            })
            .catch(err => {
                console.error(err);
            });
    }
}
