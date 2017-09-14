import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Player from '../api/collections/player.js';
import './sound.jsx';
import Sound from 'react-sound';
//import '../api/rules.js';
//meteor add brentjanderson:buzz
//http://buzz.jaysalvat.com/documentation/sound/
class App extends Component {  

  _refresh() {
    Meteor.call('button',  ()=> {
    });
  }

  _inputTest(){
    Meteor.call('_inputTest',  ()=> {
    });
  }

  _sound(){
    Meteor.call('sound',  ()=> {
    });
  }

  _manualSends(){
      var from = document.getElementById("from").value;
      var to = document.getElementById("to").value;
      var param = document.getElementById("param").value;
      var value = document.getElementById("value").value;      
    Meteor.call('hubSend', to, param, value, from, ()=> {
    });
  }


  componentDidUpdate(){
    this._sound();
  }

  render() {
function stat(asked, asked2, asked3) {
  player = Player.find({}).fetch()[0] ;
    try {
        if (!asked2) {asked = player[asked];}
    else if (asked2) {asked = player[asked][asked2];}
    }
    catch(e){
    }  

    if (asked == undefined) {asked = "???"};

    asked = JSON.stringify(asked);

    return asked ;
}

 
  // function event() {
  //   player = Player.find({}).fetch()[0] ;
  //     try {
  //       player = player.event;
  //       player = JSON.stringify(player);
  //     }
  //     catch(e){
  //     }  

  //     if (player == undefined) {asked = "???"};
  //     return player ;
  // }

    return (
      <div id="interface">
<h3>Wizapp</h3>

         <p>{stat("name")} 
         <br/>Number {stat("number")} 
          <br/>Frag : {stat("frag")} Death : {stat("death")}

          <br/> <img src="/gui/barres/healthbar2.png" style={{width: 20,height: 20}} /> {stat("health")}
                <img src="/gui/zsources/496_RPG_icons/E_Wood03.png" style={{width: 20,height: 20, marginLeft: 20}} /> {stat("armor")} 
                <img src="/gui/zsources/painterly-spell-icons-4/light-blue-3.png" style={{width: 20,height: 20, marginLeft: 20}} />{stat("wizar")} 
          </p>
        
        <div id="currentWeapon">
        <h2>{"Pistol"}</h2>
          <ul>
            <li>ammo : {stat("pistol","ammo")} {stat("pistol","ammoType")}</li>
            
            <li>target : {stat("pistol","directTarget")}</li>
          </ul>
        </div> 

        <div id="event">
          {stat("event")}
          <div onClick={this._sound}>sound : {stat("soundFile")}</div>
          <button onClick={this._refresh}>Refresh</button>

        </div>

        <div id="manual-sends">
          <br/>
          <button onClick={this._manualSends}>Envoi 1</button>
          <br/>
              <select id="from" defaultValue="!11">
                <option value="!11">!11</option> 
              </select>

              <select id="to" defaultValue=":hub">
                <option value=":hub">Hub</option> 
                <option value=":pistol" >Pistol</option>
                <option value=":wizbla">Wizbla</option>
                <option value=":glove">Gant</option>
                <option value=":grimoire">Grimoire</option>
              </select>

              <select id="param" defaultValue="shoot">
                <option value="poisoned">empoisonné</option>
                <option value="onFire" >enflammé</option>
                <option value="beenShot" >touché</option>
                <option value="shield" >bouclier</option>
                <option value="shieldShot" >shield shot</option>
                <option value="healed" >healed</option>
                <option value="health" >vie à</option>
                <option value="shoot" >tire</option>
                <option value="shoot" >tire</option>
                <option value="shoot" >tire</option>
                <option value="shoot" >tire</option>
                <option value="shoot" >tire</option>
                <option value="shoot" >tire</option>
                <option value="shoot" >tire</option>
                <option value="shoot" >tire</option>
                <option value="shoot" >tire</option>
              </select>

              <input id="value" type="number" defaultValue="1"></input>

        </div>

      </div>
      );
  }
}


App.propTypes = {
  player: PropTypes.array.isRequired,
};


export default createContainer(() => {  
  return {
    player: Player.find({}).fetch(),
  };  
}, App);





