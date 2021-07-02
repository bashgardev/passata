import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 200,
    margin: 10,
  },
  timerSection: {
    flex: 6,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSection: {
    flex: 2,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    fontSize: 40,
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7ecb20",
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  stopButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b0bec5",
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  shortButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "goldenrod",
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  longButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 15,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
