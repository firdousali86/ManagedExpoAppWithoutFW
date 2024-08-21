import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fullScreenAbsolute: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  fullScreenContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 10,
  },
  centeredItems: {
    alignItems: "center",
  },
  loginText: {
    color: "gray",
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 40,
  },
  inputContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#38BDF8",
    padding: 12,
    borderRadius: 20,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "#0EA5E9",
  },
});
