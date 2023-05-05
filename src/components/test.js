var AWS = require("aws-sdk")

AWS.config.update({
    region: "eu-central-1"
})

var dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback){
    var params = {
        TableName: "Services"
    }
    
    dynamodb.scan(params, function(err, data) {
        if(err){
            callback(err,null);
        } else {
            callback(null, data.Items);
        }
    })    
}



// export const handler = async(event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };
