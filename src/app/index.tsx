import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (isRegister && !name.trim()) {
      Alert.alert("Registration Failed", "Please enter your name.");
      return;
    }

    if (!email.trim() || !password.trim()) {
      Alert.alert(
        "Login Failed",
        "Email and password are required."
      );
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Invalid Password",
        "Password must contain at least 6 characters."
      );
      return;
    }

    // Prototype authentication only
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoIcon}>P</Text>
            </View>
            <Text style={styles.logoText}>PocketTrack</Text>
          </View>

          {/* Welcome */}
          <View style={styles.header}>
            <Text style={styles.title}>
              {isRegister ? "Create Account" : "Welcome Back!"}
            </Text>

            <Text style={styles.subtitle}>
              {isRegister
                ? "Start managing your money smarter."
                : "Take control of your money, one step at a time."}
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {isRegister && (
              <>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  placeholderTextColor="#9CA3AF"
                  value={name}
                  onChangeText={setName}
                />
              </>
            )}

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="example@email.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.showPassword}>
                  {showPassword ? "Hide" : "Show"}
                </Text>
              </TouchableOpacity>
            </View>

            {!isRegister && (
              <TouchableOpacity style={styles.forgotContainer}>
                <Text style={styles.forgotText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <Text style={styles.submitText}>
                {isRegister ? "Create Account" : "Sign In"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Switch Login / Register */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>
              {isRegister
                ? "Already have an account? "
                : "Don't have an account? "}
            </Text>

            <TouchableOpacity
              onPress={() => {
                setIsRegister(!isRegister);
                setName("");
                setEmail("");
                setPassword("");
              }}
            >
              <Text style={styles.switchLink}>
                {isRegister ? "Sign In" : "Sign Up"}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>
            POCKETTRACK © 2026{"\n"}
            Smart Money Management
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 35,
    paddingBottom: 25,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#059669",
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  logoText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#0F172A",
  },
  header: {
    marginTop: 65,
    marginBottom: 35,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748B",
    lineHeight: 23,
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 9,
    marginTop: 18,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    color: "#0F172A",
  },
  passwordContainer: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    color: "#0F172A",
  },
  showPassword: {
    color: "#059669",
    fontWeight: "600",
    fontSize: 13,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginTop: 15,
  },
  forgotText: {
    color: "#059669",
    fontWeight: "600",
    fontSize: 13,
  },
  submitButton: {
    height: 55,
    backgroundColor: "#059669",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    elevation: 3,
  },
  submitText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  switchText: {
    color: "#64748B",
    fontSize: 14,
  },
  switchLink: {
    color: "#059669",
    fontWeight: "bold",
    fontSize: 14,
  },
  footer: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 11,
    lineHeight: 19,
    marginTop: 65,
    letterSpacing: 1,
  },
});
