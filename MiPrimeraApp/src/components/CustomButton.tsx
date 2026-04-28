import { Touchable, TouchableOpacity, StyleSheet, Text } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

export function CustomButton({ title, onPress }: CustomButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "#80d373",
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: "#303030",
    padding: 12,
    width: 150,
  },

  buttonText: {
    color: "#fff",
  },
});
