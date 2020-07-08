const { exec } = require("child_process");
require('dotenv').config();
var https = require("https");
var querystring = require('querystring');
var nodeCheck = "sudo docker ps --quiet"
var statPull = "sudo docker stats --no-stream otnode"

function PushNotification(PushTitle, PushText)
    {
             var apiKey = process.env.APIKEY
             var postdata = querystring.stringify({
                     'ApiKey': apiKey,
                     'PushTitle': PushTitle,
                     'PushText': PushText,
                     });
                     var options = {
                     hostname: 'www.notifymydevice.com',
                     port: 443,
                     path: '/push?',
                     method: 'POST',
                     headers: {
                     'Content-Type': 'application/x-www-form-urlencoded',
                     'Content-Length': postdata.length
                     }
             };

     callback = function (response) {
             var str = '';
                     //another chunk of data has been recieved, so append it to `str`
                             response.on('data', function (chunk) {
                             str += chunk;
                             });
                             //the whole response has been recieved, so we just print it out here
                             response.on('end', function () {
                             console.log('Response: ' + str);
                             });
                     }
             var req = https.request(options, callback);
             req.write(postdata);
             req.end();
             req.on('error', function (e) {
             Log(e);
     });
    }

    exec(nodeCheck, (error, found, stderr) => {
      if(found){
        exec(statPull, (error, stats, stderr) => {
          if(error){
            PushNotification(process.env.NODENAME + " status check failed.","Failed to pull stats.");
          }else{
            PushNotification(process.env.NODENAME + " status check.",stats);
          }
        });
      }else if(error){
          PushNotification(process.env.NODENAME + " status check failed.","Failed to get running state.");
      }else{
        PushNotification(process.env.NODENAME + " status check.","Container is not running.");
      }
    });
