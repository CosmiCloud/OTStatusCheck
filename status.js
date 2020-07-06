const { exec } = require("child_process");
require('dotenv').config();
var https = require("https");
var querystring = require('querystring');

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

exec('uptime', (error, uptime, stderr) => {
  exec('free', (error, free, stderr) => {
      PushNotification(process.env.NODENAME + " status check.",uptime+free);
  });
});
