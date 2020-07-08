# OTStatusCheck
This will help you set up a cron job that runs everyday at 8am that will notify you of current system load and memory usage. If you do not recieve a notification, it may be wise to check your node.<br><br>
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

0 8 * * * root cd ~/path/to/my/script && node status.js



