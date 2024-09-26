import react from 'react';
import { View, Image, Button ,Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={{flexDirection:'column' }}>
      <View style ={{flex:1,flexDirection:'row',backgroundColor:'#1BA9FF', alignItems: "center",justifyContent:'space-around'     
}}>
        <Image source={require('./assets/Vector.png')}></Image>
        <h2 style={{color: 'white',height:12.16, width:31.68,fontSize:20,}}>Chat</h2>
        <Image source={require('./assets/Group.png')}></Image>

      </View>


      <View  style={{flex:1}}>
        <Text style={{height:28.54, width:294,}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>

      <View style={{flexDirection:'column'}}>
       <hr color="#c4c4c4" width="360px" top='261px' height='1px'   />
        <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
          <Image source={require('./assets/ca_nau_lau.png')} style={{height: 74, width: 74}}></Image>
        <View style={{flex:'column', justifyContent:'space-evenly'}}>
          <Text>Ca nấu lẩu, nấu mì mini...</Text>
          <Text style={{color:'red'}}>Shop Devang</Text>
        </View>
        <button style={
          { 
            backgroundColor: 'red', 
            color: 'white',
            height:38, width:88 ,
            fontSize:20,   
            }}>Chat</button>
        
        </View>
        <hr color="#c4c4c4" width="360px" top='261px' height='1px'   />
        <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
          <Image source={require('./assets/ga_bo_toi.png')} style={{height: 74, width: 74}}></Image>
        <View style={{flex:'column', justifyContent:'space-evenly'}}>
          <Text>1KG KHO GÀ BƠ TỎI</Text>
          <Text style={{color:'red'}}>Shop TD food</Text>
        </View>
        <button style={
          { 
            backgroundColor: 'red', 
            color: 'white',
            height:38, width:88 ,
            fontSize:20,   
            }}>Chat</button>
        </View>
        <hr color="#c4c4c4" width="360px" top='261px' height='1px'   />
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <Image source={require('./assets/xa_can_cau.png')} style={{height: 74, width: 74}}></Image>
        <View style={{flex:'column', justifyContent:'space-evenly'}}>
          <Text>Xe cẩu đa năng</Text>
          <Text style={{color:'red'}}>Shop Thế giới đồ chơi</Text>
        </View>
        <button style={
          { 
            backgroundColor: 'red', 
            color: 'white',
            height:38, width:88 ,
            fontSize:20,   
            }}>Chat</button>
        </View>
        <hr color="#c4c4c4" width="360px" top='261px' height='1px'   />
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <Image source={require('./assets/do_choi_dang_mo_hinh.png')} style={{height: 74, width: 74}}></Image>
        <View style={{flex:'column', justifyContent:'space-evenly'}}>
          <Text>Đồ hơi dạng mô hình</Text>
          <Text style={{color:'red'}}>Shop Thế giới đồ chơi</Text>
        </View>
        <button style={
          { 
            backgroundColor: 'red', 
            color: 'white',
            height:38, width:88 ,
            fontSize:20,   
            }}>Chat</button>
        </View>
        <hr color="#c4c4c4" width="360px" top='261px' height='1px'   />
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <Image source={require('./assets/lanh_dao_gian_don.png')} style={{height: 74, width: 74}}></Image>
        <View style={{flex:'column', justifyContent:'space-evenly'}}>
          <Text>Lãnh đạo giản đơn</Text>
          <Text style={{color:'red'}}>Shop Thế giới đồ chơi</Text>
        </View>
        <button style={
          { 
            backgroundColor: 'red', 
            color: 'white',
            height:38, width:88 ,
            fontSize:20,   
            }}>Chat</button>
        </View>
         <hr color="#c4c4c4" width="360px" top='261px' height='1px'   />
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <Image source={require('./assets/hieu_long_con_tre.png')} style={{height: 74, width: 74}}></Image>
        <View style={{flex:'column', justifyContent:'space-evenly'}}>
          <Text>Hiểu lòng con trẻ</Text>
          <Text style={{color:'red'}}>Shop Thế giới đồ chơi</Text>
        </View>
        <button style={
          { 
            backgroundColor: 'red', 
            color: 'white',
            height:38, width:88 ,
            fontSize:20,   
            }}>Chat</button>
        </View>
      </View>
        

    </View>
  );
}

const styles = StyleSheet.create({
  
});
