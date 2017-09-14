/*
import messageImporté de hub.js
import exporteMessage de hub.js 


importe le message du hub et checke s'il y a des trucs à faire, mais au niveau individuel

PLUS TARD : transforme le "event" en step

présenter tous les objets ici

result = object.pistol();

Meteor.call() etc : feedback pistol, plus confirmation au serveur

*/
import {Meteor} from 'meteor/meteor';
import Player from '../api/collections/player.js';
import World from '../api/collections/world.js';
import pistol from './objects/pistol.js'

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






