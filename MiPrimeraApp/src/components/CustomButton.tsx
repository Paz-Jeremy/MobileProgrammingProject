import { Touchable, TouchableOpacity, StyleSheet, Text } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;

  // Tipo: Union de literales
  variant?: "primary" | "secundary" | "tertiary";

  // Tipo: Literal
  // variant "primary"
};

export function CustomButton({
  title,
  onPress,
  variant = "primary",
}: CustomButtonProps) {
  const styles = getStyles(variant);
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const getStyles = (variant: "primary" | "secundary" | "tertiary") =>
  StyleSheet.create({
    button: {
      borderColor: variant === "tertiary" ? "transparent" : "#80d373",
      borderRadius: 6,
      borderWidth: 2,
      backgroundColor: variant === "primary" ? "#303030" : "transparent",
      padding: 12,
      width: 150,
      marginTop: 4,
    },

    buttonText: {
      color:
        variant === "primary"
          ? "#fff"
          : variant === "secundary"
            ? "#80d373"
            : "#303030",
      textAlign: "center",
      textDecorationLine: variant === "tertiary" ? "underline" : "none",
    },
  });
