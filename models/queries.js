// var mongojs = require("mongojs");
// var db = mongojs('mongodb://innobank:innobank@ds123410.mlab.com:23410/innobank', [" fundtransfer "]);
// var statementArray = [];
// var sortedStatement = [];

// var sortDate = function(a, b) {
//     return new Date(b.date) - new Date(a.date);
// }

// exports.statement = function(request, response) {
//     statementArray = [];
//     sortedStatement = [];
//     var add = db.fundtransfer.find({
//             $or: [{
//                 fromAccount: request.params.id
//             }, { toAccount: request.params.id }]
//         },

//         function(error, data) {
//             if (error) {
//                 console.log("error in executing the query");
//                 response.send("error");
//                 throw error
//             } else {
//                 if (data[0] != "") {
//                     statementArray.push(data);
//                     console.log(statementArray);
//                     response.json(data);
//                     // statementArray.sort(function(a, b) {
//                     //     // Turn your strings into dates, and then subtract them
//                     //     // to get a value that is either negative, positive, or zero.
//                     //     return new Date(b.date) - new Date(a.date);
//                     // });
//                     sortedStatement = statementArray.sort(sortDate)
//                         // exports.sortedStatement = function() {
//                         //     console.log("hello");
//                         //     return statementArray.sort(sortDate);
//                         // }
//                         // return statementArray.sort(sortDate);
//                         // console.log(sortDate);

//                     // return "hello";
//                     console.log(sortedStatement);
//                     // module.exports = { variableName: sortedStatement };
//                 } else {
//                     response.send("no transaction are done");
//                 }
//             }
//         });
//     // return "hello ";
//     // return sortedStatement;
// };

// module.exports = { variableName: sortedStatement };