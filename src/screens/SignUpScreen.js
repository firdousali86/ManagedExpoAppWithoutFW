import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default SignUpScreen = () => {
  const navigation = useNavigation();
  const handleSignUp = () => {
    // setUser(user);
    // navigation.navigate("Home");
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
              <Text style={styles.buttonText}>SignUp</Text>
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
