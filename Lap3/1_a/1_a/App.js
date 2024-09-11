import react from 'react';
import { Text, View, Image, Button,StyleSheet} from 'react-native';

const YouApp = ()=> {
  
  return (
    <View style={{flex:1, flexDirection:'column'} } style={styles.gradient}>
    <View style={
      {
        flex:2, flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        
      }}> 

      <Image source={require('./Ellipse 8.png')}
      style= {{height:140, width:140}}/>

      </View>
      
      <View style={
        {
          flex: 1, flexDirection:'column' ,
          justifyContent: "center",
          alignItems: "center",
         
        }}>
      <Text style={{fontWeight: "bold",fontFamily: "Roboto", fontSize:25,}}> GROW </Text>
      <Text style={{fontWeight: "bold",fontFamily: "Roboto", fontSize:25,}}> YOUR BUSINESS </Text>
      </View>

      <View style={
        {
          flex:1, flexDirection:'column', 
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
            fontFamily: "Roboto"}}>LOGIN</button>
        
        <button style={
          { 
            backgroundColor: '#E3C000', 
            color: 'black',
            height:48, width:119 ,
            fontSize:20,   
            fontWeight:'bold', 
            fontFamily: "Roboto"}}>SIGN UP</button>
        
      </View> 
      <View style={
        {
          flex: 1, flexDirection:'column' ,
          justifyContent: "flex-start",
          alignItems: "center",
          
          backgroundColor:'#00CCF9 '
        }}>
      <Text style={{fontWeight: "bold",fontFamily: "Roboto", fontSize:18 ,textAlign:'center', width:302, height:53}}> HOW WE WORK? </Text>
      
      </View>
    </View>
      
  );
  
};
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundImage: 'linear-gradient(#C7F4F6, #D1F4F6, #E5F4F5,#00CCF9)'
  },
});
export default YouApp;