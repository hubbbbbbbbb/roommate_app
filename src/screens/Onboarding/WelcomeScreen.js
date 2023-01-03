import "react-native-gesture-handler";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function WelcomeScreen({navigation}){
    return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button mode="contained" onPress={()=>{
            navigation.navigate("LoginScreen");
        }}>Login</Button>
        <Button mode="contained" onPress={()=>{
            navigation.navigate("SignUpScreen");
        }}>Sign up</Button>
    </View>)
}