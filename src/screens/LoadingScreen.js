import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0000001a"}}>
      <ActivityIndicator size="large"/>
    </View>
  );
};

export default LoadingScreen;