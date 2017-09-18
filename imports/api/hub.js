//import {Meteor} from 'meteor/meteor';
import serialport from 'serialport';
//import Player from './collections/player.js';
import rules from './rules.js';

var port = "COM5" ; //process.argv[2];

var sp = new serialport.SerialPort(port, {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

sp.on('open', onPortOpen);
sp.on('data', onData);
sp.on('close', onClose);
sp.on('error', onError);

function onPortOpen(){
    console.log("Port ouvert !");
}

function onClose(){
    console.log("Port is closed, yo");
}
function onError(){
    console.log("Arduino branché ?");
}

function onData(incomingData)
{
        try {
            mess = JSON.parse(incomingData);
            }
        catch(e){console.log("Erreur réception Ardu : ", e)}

        Meteor.call('writeDB', ()=> {
            Player.update({health: { $lt: 101} }, {$set: {event: mess}});
        }
    );

rules.general() ;
}


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////SENDS/////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

Meteor.methods({
    hubSend( to, param, value, from = "!11"){
        value = value.toString()
        
    var DataToSend = new Object();
    DataToSend.to = to;
    DataToSend.from  = from;
    DataToSend.param = param;
    DataToSend.value = value;
    DataToSend= JSON.stringify(DataToSend);

        console.log("Envoi Ardu :", DataToSend);

    sp.write(DataToSend);
    },


});













