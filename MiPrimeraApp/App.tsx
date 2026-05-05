import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "./src/components/CustomButton";
import CustomInput from "./src/components/CustomInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Jeremy</Text>
      <StatusBar style="auto" />
      <CustomInput
        type={"number"}
        placeholder={""}
        value={""}
        onChange={function (text: string): void {
          throw new Error("Function not implemented.");
        }}
      />
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
