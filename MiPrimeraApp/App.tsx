import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "./src/components/CustomButton";
import CustomInput from "./src/components/CustomInput";
import { useState } from "react";

export default function App() {
  // Definicion de una variable de estado en Ract
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text>Hello Jeremy</Text>
      <StatusBar style="auto" />
      <CustomInput
        type={"text"}
        placeholder={"Ingresa tu nombre"}
        value={name}
        onChange={setName}
      />
      <CustomInput
        type={"number"}
        placeholder={"Ingresa tu numero"}
        value={number}
        onChange={setNumber}
      />
      <CustomInput
        type={"email"}
        placeholder={"Ingresa tu email"}
        value={email}
        onChange={setEmail}
      />
      <CustomInput
        type={"password"}
        placeholder={"Ingresa tu contraseña"}
        value={password}
        onChange={setPassword}
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
