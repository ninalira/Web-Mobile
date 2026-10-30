import { Image, StyleSheet, Text, View } from "react-native";

const imagens = {
  1: require("../assets/dados/dado-1.png"),
  2: require("../assets/dados/dado-2.png"),
  3: require("../assets/dados/dado-3.png"),
  4: require("../assets/dados/dado-4.png"),
  5: require("../assets/dados/dado-5.png"),
  6: require("../assets/dados/dado-6.png"),
};

export default function Dado({ valor }) {
  if (!valor) {
    return (
      <View style={[styles.dado, styles.dadoVazio]}>
        <Text style={styles.interrogacao}>?</Text>
      </View>
    );
  }

  return (
    <Image
      style={styles.dado}
      source={imagens[valor]}
      accessibilityLabel={`Dado mostrando o número ${valor}`}
    />
  );
}

const styles = StyleSheet.create({
  dado: {
    width: 68,
    height: 68,
  },
  dadoVazio: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#9ca3af",
    borderRadius: 14,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    justifyContent: "center",
  },
  interrogacao: {
    color: "#9ca3af",
    fontSize: 24,
    fontWeight: "700",
  },
});