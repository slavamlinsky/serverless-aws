var AWS = require("aws-sdk")
var fs = require("fs")

AWS.config.update({
    region: "eu-central-1"
})

console.log("Writing entries to Amenities table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var amenitiesData = 
    JSON.parse(fs.readFileSync('../components/data/amenities.json', 'utf8'))

amenitiesData.forEach(function(accessibility){
    var params = {
        TableName: "Amenities",
        Item: {
            "name": accessibility.name
        }
    }

    dynamodb.put(params, function(err, data){
        if(err)
            console.error("Unable to load data into table for amenities: ", 
                accessibility.name, ". Error: ", JSON.stringify(err, null, 2))
        else
            console.log("Added: ",  accessibility.name, " to table.")
    })
});