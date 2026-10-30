import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import JogoDados from "./componentes/JogoDados";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.pagina}>
        <StatusBar barStyle="dark-content" />
        <JogoDados />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});