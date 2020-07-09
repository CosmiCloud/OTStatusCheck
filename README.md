# OTStatusCheck
This will help you set up a cron job that triggers a script everyday at 8am that will notify you of current system load and memory usage. You will receive a Push notification whenever ever the script completes or fails. If the script does fail, the notification will include log statements to identify the issue.
<br><br>
Note: Adjust the cronjob listed below if you do not want notified with system information every day.

------------------------------------------------------------------------------------------------------------------------------------------------------------------
Install the 'Notify My Device' app from the app store and install it onto your mobile device.

Navigate to https://www.notifymydevice.com/ and create an account. Go to 'My applications' and create an application. Copy the API key and save it for later.

On your node:<br>
Install npm, nodejs
<ul>
<li>sudo apt install npm</li>
<li>sudo apt install nodejs</li>
</ul>

Edit your environment variables inside of your directory and add your API key and change your node name.
<ol>
<li>Sudo nano .env</li>
<li>Paste and edit the variables below</li>
</ol>

APIKEY="myapikey"<br>
NODENAME="my node name"


Add a Cron job to the bottom of your crontab to trigger the script. Test running the command before adding it to your crontab.
<ol>
<li>Sudo nano /etc/crontab</li>
<li>Edit and Paste the command below to the end of your crontab</li>
</ol>

0 12 * * * root cd ~/path/to/my/script && node status.js



