import { View, Text, StyleSheet } from "react-native";

export default function ChatRoomListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ChatRoomList Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
