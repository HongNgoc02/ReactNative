import react from 'react';
import { Text, SafeAreaView, StyleSheet,View, Image, Button } from 'react-native';

const App = () => {
  return (
    <View style={{
      flexDirection:'column',
      backgroundColor:'#fff',
      overflow:"hidden"} }> 

      <View style={{flexDirection:'column',}}>
        <Image source={require('./assets/vs_blue.png')}
      style= {{height:361, width:301}}></Image>
      </View>
      



      <View style={{flexDirection:'column'}}>
        <View style={{flex:1,flexDirection:'column'}}>
          <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
      
        <View style={{flexDirection:'row'}}>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly', 
          alignItems:'center'}}>
          <Text>1.790.000 đ</Text>
          <Text>1.790.000 đ</Text>
        </View>
        <View>
          
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style= {{ color:'red',fontWeight:'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image source={require('./assets/Group 1.png')}></Image>
        </View>
        <View style={
        {
          
          alignItems:'center',
          
        }}>
        <button style={
          { 
            backgroundColor: '#fff', 
            color: 'black' , 
            height:34, width:332, 
            fontSize:15,      
            borderRadius:10,
            fontFamily: "Roboto"
            }}>4 MÀU-CHỌN MÀU
            <Image source={require('./assets/Vector.png')}></Image>
            </button>
        
        </View>
      </View>
     

     <View style={
        {
          
          justifyContent:'space-evenly', 
          alignItems:'center',
          
        }}>
        <button style={
          { 
            backgroundColor: 'red', 
            color: 'white' , 
            height:34, width:332, 
            fontSize:20,      
            borderRadius:10,
            fontWeight:'bold',
            fontFamily: "Roboto"}}>CHỌN MUA</button>
        
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
  
});
export default App;