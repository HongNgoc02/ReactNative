import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Text,View,Image,TouchableOpacity, TextInput} from "react-native";

export default function App() {
  return (
    <View style={{backgroundColor: "#f6c701",width: "100%",height: "100%",}}>

      <View style={{width: "100%",height: "25%",}}>
        <View style={{width: 120,height: 50,marginTop: 110,marginLeft: 35}}>
          <Text style={{fontWeight: "700",fontSize: 35}}>LOGIN</Text>
        </View>
      </View>


      <View style={{width: "100%",height: "30%",justifyContent: "center",alignItems: "center"}}>
        <View
          style={{height: "100%",width: "100%",justifyContent: "center",alignItems: "center" }}>
          <View
            style={{height: 60,width: "90%",borderWidth: 1,borderColor: "#fff",flexDirection: "row",backgroundColor: "#ddbe3b"  }}>
            <View
              style={{
                height: "100%",
                width: "20%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            <Image source={require("./assets/user.png")} 
            style={[styles.Image, { width: 32, height: 32 }]}/>
            </View>
            <View style={{ justifyContent: "center", paddingLeft: 10 }}>
              <TextInput
                placeholder="Name"
                style={{ fontSize: 18, fontWeight: "400" }}></TextInput>
            </View>
          </View>

          <View
            style={{height: 60,width: "90%",borderWidth: 1,borderColor: "#fff",marginTop: 25,     backgroundColor: "#ddbe3b",flexDirection: "row",}} >
            <View
              style={{height: "100%",width: "20%",justifyContent: "center",alignItems: "center"}}>
            <Image
            source={require("./assets/lock.png")}
            style={[styles.Image, { width: 32, height: 32 }]}/>
            </View>
            
            <View
              style={{ height: "100%",width: "65%",justifyContent: "center",paddingLeft: 10}}>
              <TextInput
                placeholder="Password"
                style={{ fontSize: 18, fontWeight: "400" }}></TextInput>
            </View>
            
            <View
              style={{height: "100%",width: "15%",justifyContent: "center",alignItems: "center"}} >
            <Image
            source={require("./assets/eye.png")}
            style={[styles.Image, { width: 32, height: 32 }]}/>
</View>
</View>
        </View>
      </View>
 
      <View style={{ width: "100%", height: "12%",justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={{ height: 50, width: "90%" }}>
          <View style={{width: "100%",height: 50,backgroundColor: "#060000",justifyContent: "center",
alignItems: "center"}}>
            <Text style={{ 
              width: "100%",
              height: 50,
              backgroundColor: "#060000",
              justifyContent:"center",           
              alignItems: "center"}}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={ {width: "100%",height: "8%",justifyContent: "center",alignItems: "center"}}>
        <View
          style={{
            width: 250,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 22 }}>
            Forgot your Password?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});