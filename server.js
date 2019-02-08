'use strict';
const aws=require('aws-sdk');
const dynamodb = new aws.DynamoDB;
const siteDests=[
  "https://www.cnn.com",
  "https://www.google.com",
  "https://www2.gmu.edu",
  "https://www.baidu.com",
  "https://www.youtube.com",
  "https://www.yahoo.com",
  "https://www.reddit.com",
  "https://www.github.com",
  "https://www.linkedin.com",
  "https://www.apple.com"
];


module.exports.getCoordServer = async (event, context) => {
  let choice=Math.floor((Math.random()*10)+1)-1;
  console.log("choice is "+choice);
  var siteDestChoice=siteDests[choice];
  return {
    statusCode: 200,
    body: JSON.stringify({
      address: siteDestChoice
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
