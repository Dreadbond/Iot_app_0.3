import {Meteor} from 'meteor/meteor';
//import sound from '../../ui/sound.jsx';



export function code(event) {
    stats = Player.find({name: "Dreadbond" }).fetch()[0];

    action  = event.param;
    value   = event.value;


    if (action == "trigger" && stats.pistol.ammo > 0) {
            Player.update({name: "Dreadbond" }, {$inc: {"pistol.ammo": -1}, $set: {soundFile: "pistol/shoot"}});
            phrase = stats.name + " SHOT WITH pistol AT " + Date() ;
            //World.insert({ string: phrase, createdAt: new Date() });
            }
    else if (action == "trigger" && stats.pistol.ammo <= 0){
            Player.update({name: "Dreadbond" }, {$set: {soundFile: "pistol/depleted"}});
            //World.insert({ text: "Hello world!", createdAt: new Date() });
            }

    if (action == "reload" ){ //&& stats.pistol.ammo < 6 ) {
            Player.update({name: "Dreadbond" }, {$set: {"pistol.ammo": 6, soundFile: "pistol/reload"}});
            }

    if (action == "target") {
    Player.update({name: "Dreadbond" }, {$set: {"pistol.directTarget": value, soundFile: "void"}});
    phrase = stats.name + " TARGETS " + stats.pistol.directTarget + " AT " + Date() ;
    //World.insert({ string: phrase, createdAt: new Date() });
    }
}


