"use strict";

// 依存関係
import angular from 'angular';
import ngAdmin from 'ng-admin';

// スタイル
import './Stylesheet/main.scss';

// モジュール
import Admin from './Admin';


const app = angular
    .module('myApp', [
        ngAdmin
    ])
    .config(Admin);
