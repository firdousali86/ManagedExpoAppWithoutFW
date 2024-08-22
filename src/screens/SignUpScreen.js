import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import {
  isEmailValid,
  isPasswordValid,
} from "../utils/EmailPasswordValidation";

export default SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (!isPasswordValid(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 6 characters and contain a number and a special character"
      );
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate("Dashboard");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  return (
    <View style={styles.fullScreenAbsolute}>
      <Image
        style={styles.fullScreenAbsolute}
        source={require("../../assets/images/background.jpg")}
      />
      <View style={styles.fullScreenContainer}>
        <View style={styles.centeredItems}>
          <Text style={styles.loginText}>Sign Up</Text>
        </View>
        <View
          style={[styles.centeredItems, { marginHorizontal: 16, spaceY: 16 }]}
        >
          <View style={styles.inputContainer}>
            <TextInput placeholder="User Name" placeholderTextColor={"gray"} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </View>
          <View style={[styles.inputContainer, { marginBottom: 22 }]}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText} onPress={handleSignUp}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowCenter}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text style={styles.signUpText}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
