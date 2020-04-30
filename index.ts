import Obniz from 'obniz';

const OBNIZ_ID = '3060-2821';

const obniz = new Obniz(OBNIZ_ID);
obniz.onconnect = async () => {
  obniz.io0.output(true);
  obniz.ad1.start(function(voltage){
    console.log("changed to "+voltage+" v")
   });
};