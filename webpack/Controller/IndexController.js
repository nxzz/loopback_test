"use strict";

export default class IndexController {
    constructor($location, $http, $state, Bbslog) {
        "ngInject";
        this.$http = $http;
        this.$state = $state;
        this.text = "Hello";

        this.list = Bbslog.find();
    }
}
