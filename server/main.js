import {Meteor} from 'meteor/meteor';
import Player from '../imports/api/collections/player.js';
import World from '../imports/api/collections/world.js';
import '../imports/api/hub.js';


Meteor.startup(() => {
  Player.remove({});
  World.remove({});
  date = Date();

    let defaultPlayer = {
        name : "Dreadbond",
        number: 1,
        tag: "!11",
        health: 100,
        armor: 0,
        wizar: 100,

        inventory: [],
        buff: [],

        pistol: {
            directTarget: "none",
            ammoType: "standart",
            ammo: 6,
            },

        frag: 0,
        death: 0,

        isDead: false,

        event: "",
        soundFile: "void",
        feedback: "",
    };

    
    
    let defaultWorld = {
        event : "creation",
        createdAt : date
    };

    Player.insert(defaultPlayer);
    defaultPlayer.name = "Alarik";
    defaultPlayer.tag = "!22";
    Player.insert(defaultPlayer);

    World.insert(defaultWorld);

});