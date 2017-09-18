

export function general(){

        
    player = Player.find({health : {$gte: 0}}).fetch()[0] ;
        if (player.health > 100){
            Player.update(
                {name: player.name },
                    {$set: {
                        health: 100
                    }
                });
        }

    player = Player.find({health : {$lte: 0}}).fetch()[0] ;
    if (player){
        Player.update({name: player.name },{$set: {health: 0},});

        if (!player.isDead){
            console.log(player.name) ;


            //if (player.health < 0){

                    Player.update(
                        {name: player.name },
                            {
                                $set: {isDead: true, soundFile: "general/death"},
                                $inc: {death: +1}
                        });

                    Meteor.setTimeout( function() { //()=>{ //sinon, 
                        Player.update(
                            {name: player.name },
                                {$set: {
                                    isDead: false,
                                    health: 100,
                                    armor: 0,

                                }
                            });

                            Meteor.call('hubSend', ":hub", "healed", "1", player.name);
                            Meteor.call('hubSend', ":hub", "health", "100", player.name);
                            Player.update({name: player.name }, {$set: {soundFile: "general/respawn"}});
                            //Meteor.call('sound',  ()=> {});
                    }
                    ,3000
                    )
                    //}
            } //player.isDead
       }// <= 0


}