import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  Vibration,
} from "react-native";
import { styles, button } from "./styles";
import { AppButton } from "./AppButton";
import { Appearance } from "react-native";

// TODO: add pomodoro technique logic
// (work, short break) x 4 then long break
// TODO: add custom timer values
// TODO: add interface for app settings
// TODO: add notification functionality sound + vibrate
// TODO: add animations, make it pretty

export default function App() {
  const DEFAULT_POMODORO = 1500000;
  const SHORT_BREAK = 300000;
  const LONG_BREAK = 900000;
  const [timerOn, setTimerOn] = useState(false);
  const [timer, setTimer] = useState(DEFAULT_POMODORO);

  const [shortBreakTimer, setshortBreakTimer] = useState(SHORT_BREAK);
  const [longBreakTimer, longhortBreakTimer] = useState(LONG_BREAK);

  const [timerText, setTimerText] = useState("Working");

  // const [startTime, setStartTime] = useState(0);
  // const [endTime, setEndTime] = useState(0);

  // determine if environment is dark mode or not
  let isDarkMode = false;
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") {
    isDarkMode = true;
  }

  useEffect(() => {
    if (timer < 1000) {
      resetTimer();
    }
    return () => {};
  }, [timer]);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      // setStartTime(Date.now());
      let st = Date.now();
      let et;

      interval = setInterval(() => {
        // setEndTime(Date.now());
        et = Date.now();
        setTimer(timer - (et - st));
      }, 200);
    } else {
      stopTimer();
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  // handler function
  const startTimer = () => {
    setTimerOn(true);
  };

  const stopTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {
    stopTimer();
    Vibration.vibrate();
    setTimer(DEFAULT_POMODORO);
    setTimerText("Working");
    // setStartTime(0);
    // setEndTime(0);
  };

  const chooseShortBreak = () => {
    setTimer(shortBreakTimer);
    setTimerOn(true);
    setTimerText("Short Break");
  };

  const chooseLongBreak = () => {
    setTimer(longBreakTimer);
    setTimerOn(true);
    setTimerText("Long Break");
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
          {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}
        </Text>
        <Text
          style={
            isDarkMode
              ? { fontSize: 20, color: "white" }
              : { fontSize: 20, color: "grey" }
          }
        >
          {timerText}
        </Text>
      </View>
      {/* <Text>timerOn: {timerOn ? "true" : "false"}</Text>
      <Text>startTime: {startTime}</Text>
      <Text>endTime: {endTime}</Text>
      <Text>delta: {timer}</Text> */}
      <View style={styles.buttonSection}>
        {!timerOn && (
          <AppButton
            width="60%"
            style={styles.shortButton}
            onPress={chooseShortBreak}
            title="Short Break"
          ></AppButton>
        )}
        {!timerOn && (
          <AppButton
            width="60%"
            style={styles.longButton}
            onPress={chooseLongBreak}
            title="Long Break"
          ></AppButton>
        )}
      </View>
      <View style={styles.buttonSection}>
        {timerOn ? (
          <AppButton
            width="60%"
            style={styles.stopButton}
            onPress={stopTimer}
            title="Stop"
          ></AppButton>
        ) : (
          <AppButton
            width="60%"
            style={styles.startButton}
            onPress={startTimer}
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
