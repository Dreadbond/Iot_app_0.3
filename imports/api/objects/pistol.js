import {Meteor} from 'meteor/meteor';
//import sound from '../../ui/sound.jsx';



export function code(event) {
    player = Player.find({name: "Dreadbond" }).fetch()[0];

    action  = event.param;
    value   = event.value;


    if (action == "trigger" && value == 1 && player.pistol.ammo > 0) {
            Player.update({name: "Dreadbond" }, {$inc: {"pistol.ammo": -1}, $set: {soundFile: "pistol/shoot"}});
            //event = player.name + " SHOT WITH pistol AT " + Date() ;
            Meteor.call('hubSend', ":pistol", "shootFB", "1", player.tag);
            //{"FROM": "Dreadbond","TO": "Alarik","TYPE": "damage","VALUE": "20"

            var DataToSend = new Object();
            DataToSend.FROM     = player.name ;
            DataToSend.TO       = player.pistol.directTarget ;
            DataToSend.TYPE     = "damage" ;
            DataToSend.VALUE    = 20 ;
                console.log(DataToSend);

            phraseTest = '{"FROM": "Dreadbond","TO": "Alarik","TYPE": "damage","VALUE": "20"}'
                try {
                        phraseTest = JSON.parse(phraseTest);
                }
                catch(e){console.log("Erreur envoi event manuel : ", e)}
                
                World.insert({
                        event: phraseTest , createdAt: new Date() 
                        },()=>{
                        Meteor.call('worldProcess');
                });

            //World.insert({ string: phrase, createdAt: new Date() });
            }
    else if (action == "trigger" && player.pistol.ammo <= 0){
            Player.update({name: "Dreadbond" }, {$set: {soundFile: "pistol/depleted"}});
            World.insert({ text: "Hello world!", createdAt: new Date() });
            }

    if (action == "reload" ){ //&& player.pistol.ammo < 6 ) {
            Player.update({name: "Dreadbond" }, {$set: {"pistol.ammo": 6, soundFile: "pistol/reload"}});
            }

    if (action == "target") {
    Player.update({name: "Dreadbond" }, {$set: {"pistol.directTarget": value, soundFile: "void"}});
    phrase = player.name + " TARGETS " + player.pistol.directTarget + " AT " + Date() ;
    //World.insert({ string: phrase, createdAt: new Date() });
        if (value != 0){
                Meteor.call('hubSend', ":pistol", "sightFB", "0", player.tag);
        }
        else {
                Meteor.call('hubSend', ":pistol", "!sightFB", "0", player.tag);
        }
    }
}


