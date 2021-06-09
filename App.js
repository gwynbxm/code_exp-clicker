import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import CounterText from "./components/CounterText";

export default function App() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(count - count);
  }

  function renderEncourageText() {
    if (count >= 20) return "Almost done!!!!!!!!";
    else if (count >= 10) return "Keep going!!!!!!!!!!!";
  }

  return (
    <View style={styles.container}>
      <CounterText color="blue" fontSize={20}>
        {count}
      </CounterText>
      <CounterText color="red" fontSize={30}>
        {count}
      </CounterText>
      <CounterText color="green" fontSize={40}>
        {count}
      </CounterText>
      <CounterText color="yellow" fontSize={50}>
        {count}
      </CounterText>
      <Text style={{ fontSize: 60 }}>{count}</Text>
      <Button title="Increment" onPress={increment}></Button>
      <Button title="Decrement" onPress={() => setCount(count - 1)}></Button>
      <Button title="Reset" onPress={reset}></Button>

      <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
      <Text>{renderEncourageText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "black",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
});
