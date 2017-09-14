import {Meteor} from 'meteor/meteor';
import Player from '../imports/api/collections/player.js';
import World from '../imports/api/collections/world.js';
import '../imports/api/hub.js';


Meteor.startup(() => {
  Player.remove({});
  World.remove({});


    let defaultPlayer = {
        name : "Dreadbond",
        number: 1,
        health: 100,
        armor: 0,
        wizar: 100,

        pistol: {
            directTarget: "none",
            ammoType: "standart",
            ammo: 6,
            },

        frag: 0,
        death: 0,

        event: "",
        soundFile: "void",
        feedback: "",
    };
    let defaultWorld = {
        string : "creation"
    };

    Player.insert(defaultPlayer);
    World.insert(defaultPlayer);

});