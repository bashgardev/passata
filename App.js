import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import { styles, button } from "./styles";
import { AppButton } from "./AppButton";
import { Appearance } from "react-native";

export default function App() {
  const [timerOn, setTimerOn] = useState(false);
  const [timer, setTimer] = useState(0);

  // determine if environment is dark mode or not
  let isDarkMode = false;
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") {
    isDarkMode = true;
  }

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        // time increment 1s in miliseconds
        setTimer((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, timer]);

  // handler function
  const resetTimer = () => {
    setTimerOn(false);
    setTimer(0);
  };
  return (
    // try using css from styled-components
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <View style={styles.timerSection}>
        <Text
          style={
            isDarkMode
              ? { fontSize: 80, color: "white" }
              : { fontSize: 80, color: "grey" }
          }
        >
          {/* {timer + "   "} */}
          {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}
        </Text>
      </View>

      <View style={styles.buttonSection}>
        {timerOn ? (
          <AppButton
            width="60%"
            style={styles.stopButton}
            onPress={() => setTimerOn(false)}
            title="Stop"
          ></AppButton>
        ) : (
          <AppButton
            width="60%"
            style={styles.startButton}
            onPress={() => setTimerOn(true)}
            title="Start"
          ></AppButton>
        )}

        <AppButton
          width="60%"
          style={styles.resetButton}
          onPress={resetTimer}
          title="Reset"
        ></AppButton>
        <View style={styles.screenContainer}></View>
      </View>
    </View>
  );
}
