var AWS = require("aws-sdk")
var fs = require("fs")

AWS.config.update({
    region: "eu-central-1"
})

console.log("Writing entries to Gallery Images table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var galleryImages = 
    JSON.parse(fs.readFileSync('../components/data/welcome_imgs.json', 'utf8'))

    galleryImages.forEach(galleryImage => {    
        var className = galleryImage.className;
        if(className.trim() =="")
            className = "no_class";

        var params = {
            TableName: "GalleryImages",
            Item: {
                "src": galleryImage.src,
                "alt": galleryImage.alt,
                "className": className
            }
    }

    dynamodb.put(params, function(err, data){
        if(err)
            console.error("Unable to load data into table for Gallery Images: ", 
            galleryImage.src, ". Error: ", JSON.stringify(err, null, 2))
        else
            console.log("Added: ",  galleryImage.src, " to table.")
    })
});