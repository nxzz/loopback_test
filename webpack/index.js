"use strict";

// 依存関係
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import ngResource from 'angular-resource';

// スタイル
import './Stylesheet/main.scss';

// モジュール
import Controller from './Controller/module';
import Directive from './Directive/module';
import Filter from './Filter/module';
import Service from './Service/module';
import Router from './router';
import lbServices from './lb-services';

const app = angular
    .module('app', [
        uiRouter,
        uiBootstrap,
        lbServices,
        Controller.name,
        Directive.name,
        Service.name,
        Filter.name
    ])
    .config(Router);
