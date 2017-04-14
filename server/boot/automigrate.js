const async = require('async');

module.exports = function (app) {
    let ds = app.dataSources.db;

    async.waterfall([
        createAccounts,
        createTodos
    ], function (err, result) {
        if (err) console.log('Error: ' + err);
        console.log('Success!');
    });

    function createAccounts(callback) {
        ds.automigrate(['Account', 'AccessToken', 'ACL', 'RoleMapping', 'Role'], function (err) {
            if (err) return callback(err);

            var accounts = [
                {
                    email: 'foo@foo.com',
                    password: 'foo'
                },
                {
                    email: 'bar@bar.com',
                    password: 'bar'
                },
                {
                    email: 'baz@baz.com',
                    password: 'baz'
                }
            ];

            app.models.Account.create(accounts, callback);
        });
    }

    function createTodos(accounts, callback) {
        ds.automigrate('ToDo', function (err) {
            if (err) return callback(err);

            var todos = [];
            for (var i = 0, len = accounts.length; i < len; i++) {
                todos.push(createSampleTodo(accounts[i]));
            }
            app.models.ToDo.create(todos, callback);
        });

        function createSampleTodo(account) {
            var name = account.email.split('@')[0];
            return [
                {
                    title: name + '-task1',
                    done: false,
                    accountId: account.id
                },
                {
                    title: name + '-task2',
                    done: true,
                    accountId: account.id
                },
                {
                    title: name + '-task3',
                    done: false,
                    accountId: account.id
                }
            ];
        }
    }
};