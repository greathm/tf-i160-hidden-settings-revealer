# tf-i160-hidden-settings-revealer
userscript for revealing tf-i160 modem hidden settings

How to use:
- add the script to tampermonkey
- open the modem admin page
- use the two bottons on the down right corner of the page to reveal the hidden settings

How to remove isp restrictions:
- in the admin page go to Settings >> Network >> Sim Management
- use the "reveal hidden settings" botton to reveal the "SIM PLMN" tab
- press "Add" botton to make a new index
- enter 432 for "MCC" 
- add your isp code "MNC" from the list below
- press "Submit"

"MNC" List:
 - Irancell : 35
 - Mci : 11
 - Rightel : 20
 - Shatel : 08
 - Samantel : 01


tested on:
- tf-i160 g1 [wenex]

