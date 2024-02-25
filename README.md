# tf-i160-G1-hidden-settings-revealer
userscript for revealing tf-i160 G1 modem hidden settings

How to use:
- add the script to tampermonkey
- open the modem admin page
- use the two bottons on the down right corner of the page to reveal the hidden settings on each tab

How to remove isp restrictions:
- in the admin page navigate to Settings >> Network >> Sim Management
- use the "reveal hidden settings" botton to reveal the "SIM PLMN" tab
- press "Add" botton to make a new index
- enter 432 for "MCC" 
- add your isp code to "MNC" from the list below
- press the "submit" button

"MNC" List:
 - Irancell : 35
 - MCI : 11
 - Rightel : 20
 - Shatel : 08
 - Samantel : 01

How to disable TR-069:
- in the admin page navigate to Settings >> System >> TR069
- use the "enable disabled checks" botton to enable the check boxes
- uncheck the check boxes
- use the "reveal hidden settings" botton to reveal the "submit" button
- press the "submit" button


tested on:
- tf-i160 g1 [wenex]

