"use strict";

export default class IndexController {
    constructor($location, $http, $state) {
        "ngInject";
        this.$http = $http;
        this.$state = $state;
        this.text = "Hello";
    }
}
