import { View, Text } from "react-native";
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={()=>{
        navigation.navigate('ChatRoomList');
      }}>Open messages</Button>
    </View>
  );
}
