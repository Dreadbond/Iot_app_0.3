//import {Meteor} from 'meteor/meteor';
//import Player from '../api/collections/player.js';
//import World from '../api/collections/world.js';
import pistol from './objects/pistol.js'
import combats from './world/combats.js';

var event ;

export function general() {
    Meteor.call('general', function() {
        event = Player.find({name: "Dreadbond" }).fetch()[0].event;

        
    if (event.from == ":pistol") pistol.code(event) ;
    if (event.from == ":wizbla") wizbla.code(event) ;
    if (event.from == ":grimoire") grimoire.code(event) ;
        //autre objets

    });
}






