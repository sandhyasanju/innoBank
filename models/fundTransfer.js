var mongojs = require("mongojs");
var db = mongojs('mongodb://innobank:innobank@ds123410.mlab.com:23410/innobank', [" fundtransfer "]);
var statementArray = [];
var sortedStatement = [];
var resultantStatement = [];

var sortDate = function(a, b) {
    return new Date(b.date) - new Date(a.date);
}

exports.miniStatement = function(request, response) {
    statementArray = [];
    sortedStatement = [];
    var add = db.fundtransfer.find({
            $or: [{
                fromAccount: request.params.id
            }, { toAccount: request.params.id }]
        },

        function(error, data) {
            if (error) {
                console.log("error in executing the query");
                response.send("error");
                throw error
            } else {
                if (data[0] != "") {
                    statementArray.push(data);
                    console.log(statementArray);
                    response.json(data);
                    sortedStatement = statementArray.sort(sortDate);
                    var lenght = sortedStatement.length;
                    if (lenght > 8) {
                        var resultStatement = sortedStatement.splice(8, lenght - 8);
                        console.log(resultStatement);
                    } else {
                        console.log(sortedStatement);
                    }
                } else {
                    response.send("no transaction are done");
                }
            }
        });
};

exports.detailedStatement = function(request, response) {
    statementArray = [];
    sortedStatement = [];
    resultantStatement = [];
    var add = db.fundtransfer.find({
            $or: [{
                fromAccount: request.params.id
            }, { toAccount: request.params.id }]
        },

        function(error, data) {
            if (error) {
                console.log("error in executing the query");
                response.send("error");
                throw error
            } else {
                if (data[0] != "") {
                    statementArray.push(data);
                    console.log(statementArray);
                    response.json(data);
                    sortedStatement = statementArray.sort(sortDate);
                    var lenght = sortedStatement.length;
                    for (var i = 0; i < lenght; i++) {
                        if (sortedStatement[i].date <= request.body.toDate) {
                            if (sortedStatement[i].date >= request.body.fromDate) {
                                resultantStatement.push(sortedStatement[i]);
                            }
                        }
                    }
                    console.log(resultStatement);
                } else {
                    response.send("no transaction are done");
                }
            }
        });
};