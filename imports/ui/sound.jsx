//meteor add brentjanderson:buzz
//http://buzz.jaysalvat.com/documentation/sound/
//var s = new buzz.sound(sound);

Meteor.methods({
    button(){
        try {
            var s = new buzz.sound('/sounds/pistol/shoot.mp3');
            s.play();
            }
            catch(e) {}
    },

    sound(){
    sound = Player.find({}).fetch()[0] ;
    if (sound.soundFile != "void") {
      try {
        sound = sound.soundFile ;
        sound += ".mp3";
        sound = "/sounds/" + sound ;
        var s = new buzz.sound(sound);
        s.play();
        }
      catch(e) {}
      }

    }
});