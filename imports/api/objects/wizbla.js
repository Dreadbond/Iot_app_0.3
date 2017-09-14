import {Meteor} from 'meteor/meteor';

export function code(event) {
    stats = Player.find({}).fetch()[0];

    action  = event.param;
    value   = event.value;


    //if (action && canFire ) etc 
    if (action == "trigger" && stats.wizbla.ammo > 0) {
            console.log("Pan !");
            Player.update({name: "Dreadbond" }, {$inc: {"wizbla.ammo": -1}});
            }
    else if (action == "trigger" && stats.wizbla.ammo <= 0){
            console.log("Clic ...");
            }

    if (action == "reload" && stats.wizbla.ammo < 6 ) {
            console.log("Reloading");
            Player.update({name: "Dreadbond" }, {$set: {"wizbla.ammo": 6}});
            }

    if (action == "target") {
    Player.update({name: "Dreadbond" }, {$set: {"wizbla.directTarget": value}});
    }
}


