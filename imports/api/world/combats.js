import health from './health.js';


Meteor.methods({

    worldProcess(){

    console.log("yep !");
    timeLine = World.find({}, { sort: { createdAt: -1 } }).fetch() ;
    lastEvent = timeLine[0].event ;


    if (lastEvent.TYPE == "damage") {
        console.log("dégâts", lastEvent.VALUE);
        Meteor.call('hubSend', ":hub", "beenShot", "1", lastEvent.TO);
        //Player.update({name: lastEvent.FROM }, {$set: {soundFile: "general/target"}});
        //Player.update({name: lastEvent.TO }, {$set: {soundFile: "general/hit"}});

        Player.update(
            {
                name: lastEvent.TO },
                {$inc: {
                    health: -lastEvent.VALUE
                }
            });
        }

    if (lastEvent.TYPE == "heal") {
        console.log("soins", lastEvent.VALUE);
        Meteor.call('hubSend', ":hub", "healed", "1", lastEvent.TO);
        Player.update({name: "Dreadbond" }, {$set: {soundFile: "general/healed"}});
        Player.update(
            {
                name: lastEvent.TO },
                {$inc: {
                    health: +lastEvent.VALUE
                }
            });
        }
    
        //affichage stats
        player = Player.find({name: lastEvent.TO}).fetch()[0] ;
        Meteor.call('hubSend', ":hub", "health", player.health, player.tag);
        
        health.general();


    
},









});