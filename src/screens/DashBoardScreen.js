import React from "react";
import { View, Text, Image } from "react-native";
import auth from "@react-native-firebase/auth";

const Dashboard = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.replace("Login");
    } catch (error) {
      console.error("Logout Error:", error);
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
          <Text style={styles.loginText}>Welcome to Dashboard!</Text>
        </View>
        <View
          style={[styles.centeredItems, { marginHorizontal: 16, spaceY: 16 }]}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.loginText}>
              Welcome, {auth().currentUser.email}
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
