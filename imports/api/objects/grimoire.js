import {Meteor} from 'meteor/meteor';

export function code(event) {
    stats = Player.find({}).fetch()[0];

    action  = event.param;
    value   = event.value;


    //if (action && canFire ) etc 
    if (action == "trigger" && stats.grimoire.ammo > 0) {
            console.log("Pan !");
            Player.update({name: "Dreadbond" }, {$inc: {"grimoire.ammo": -1}});
            }
    else if (action == "trigger" && stats.grimoire.ammo <= 0){
            console.log("Clic ...");
            }

    if (action == "reload" && stats.grimoire.ammo < 6 ) {
            console.log("Reloading");
            Player.update({name: "Dreadbond" }, {$set: {"grimoire.ammo": 6}});
            }

    if (action == "target") {
    Player.update({name: "Dreadbond" }, {$set: {"grimoire.directTarget": value}});
    }
}


