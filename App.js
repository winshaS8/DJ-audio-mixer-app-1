import React, { Component } from 'react';
import {Text, Button, View } from 'react-native';
import {Audio} from 'expo-av';
import { TouchableOpacity } from 'react-native'

class PinkButton extends Component 
{  
  displayAlert = function () 
   {
    alert('going to play music');
  };
  render() {
    return (
     <TouchableOpacity style = {{
        marginTop:30,        
        marginLeft:100,
        marginRight:100,
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center',
        width:130,
        height:40,
        borderRadius:10,        
}} >
 <Text> Sound Button </Text>
     </TouchableOpacity >
    );
  }
}

class BlueButton extends Component 
{
  displayAlert = function () {
    alert('going to play music');
  };

  playSound =  async () =>
  {
    await Audio.Sound.creatAsync(
     {uri:''},
     {shouldPlay:true}
     )
  }  
  render() {
    return (
     <TouchableOpacity style = {{
        marginTop:30,        
        marginLeft:100,
        marginRight:100,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        width:130,
        height:40,
        borderRadius:10,        
}}>
 <Text> Sound Button </Text>
     </TouchableOpacity>
    );
  }
}

   class YellowButton extends Component 
{
  displayAlert = function () {
    alert('going to play music');
  };

  
   
  render() {
    return (
     <TouchableOpacity style = {{
        marginTop:30,        
        marginLeft:100,
        marginRight:100,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        width:130,
        height:40,
        borderRadius:10,        
}}>
 <Text> Sound Button </Text>
     </TouchableOpacity>
    );
  }
}
  
class GreenButton extends Component 
{
  displayAlert = function () {
    alert('going to play music');
  };

  
    
  render() {
    return (
     <TouchableOpacity style = {{
        marginTop:30,        
        marginLeft:100,
        marginRight:100,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        width:130,
        height:40,
        borderRadius:10,        
}}>
 <Text> Sound Button </Text>
     </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style = {{marginTop:50}}>
        {' '}       
        <PinkButton/>
        <BlueButton/>
        <YellowButton/>
        <GreenButton/>
      </View>

     
    );
    
  }
}


  