import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "./src/components/CustomButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Jeremy</Text>
      <StatusBar style="auto" />
      <CustomButton
        title={"App"}
        onPress={() => {
          console.log("Press desde boton app");
        }}
      />
      <CustomButton
        title={"Secondary Button"}
        onPress={() => {
          console.log("Press desde boton secundario");
        }}
        variant="secundary"
      />
      <CustomButton
        title={"Tertiary Button"}
        onPress={() => {
          console.log("Press desde boton terciario");
        }}
        variant="tertiary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
