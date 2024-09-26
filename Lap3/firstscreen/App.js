import react from 'react';
import { Text, View, Image, Button} from 'react-native';

const YouApp = ()=> {
  
  return (
    <View style={{flex:1, flexDirection:'colum',backgroundColor: "#00CCF9"}}>
    <View style={
      {
        flex:2, flexDirection:'colum',
        justifyContent: 'center',
        alignItems:'center',
      }}> 

      <Image source={require('./assets/Ellipse 8.png')}
      style= {{height:140, width:140}}/>

      </View>
      
      <View style={
        {
          flex: 1, flexDirection:'colum' ,
          justifyContent: "center",
          alignItems: "center",
          
        }}>
      <Text style={{fontWeight: "bold",fontFamily: "Roboto", fontSize:25,}}> GROW </Text>
      <Text style={{fontWeight: "bold",fontFamily: "Roboto", fontSize:25,}}> YOUR BUSINESS </Text>
      </View>

      <View style={
        {
          flex:1, flexDirection:'colum', 
          justifyContent:'center', 
          alignItems:'center',
          
        }}>
      <Text style={{fontWeight: "bold",fontFamily: "Roboto", fontSize:15,width:302,height:36}}> We will help you to grow your business using online server </Text>
     
      </View>
      
    <View style={
        {
          flex:1, flexDirection:'row', 
          justifyContent:'space-evenly', 
          alignItems:'center',
          
          
        }}>
     <button style={
          { 
            backgroundColor: '#E3C000', 
            color: 'black' , 
            height:48, width:119, 
            fontSize:20,      
            fontWeight:'bold',
            borderRadius:10,
            fontFamily: "Roboto"}}>LOGIN</button>
        
        <button style={
          { 
            backgroundColor: '#E3C000', 
            color: 'black',
            height:48, width:119 ,
            fontSize:20,   
            fontWeight:'bold', 
            borderRadius:10,
            fontFamily: "Roboto"}}>SIGN UP</button>
        
      </View> 
    
    </View>
   
  );
  
};

export default YouApp;