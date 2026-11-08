
import { StyleSheet, Text, View } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PocketTrack</Text>
      <Text style={styles.subtitle}>
        Welcome to your financial dashboard!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#059669",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 15,
    color: "#64748B",
  },
});
