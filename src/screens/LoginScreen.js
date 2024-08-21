import React from "react";
import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default LoginScreen = () => {
    const navigation = useNavigation();
  const handleLogin = () => {
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
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View
          style={[styles.centeredItems, { marginHorizontal: 16, spaceY: 16 }]}
        >
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </View>
          <View style={[styles.inputContainer, { marginBottom: 12 }]}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowCenter}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text style={styles.signUpText}> SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
