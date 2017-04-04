"use strict";
import Controller from './Controller/module';
import Directive from './Directive/module';
import Filter from './Filter/module';
import Service from './Service/module';
import Router from './router';

angular
    .module('app', [
        'ui.router',
        'ui.bootstrap',
        Controller.name,
        Directive.name,
        Service.name,
        Filter.name
    ])
    .config(Router);
