import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Calculator = () => {
  const buttons = [
    ["C", "%", "⌫", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const [input, setInput] = useState<string>("");

  const handleClick = (btn: string) => {
    if (btn === "C") {
      setInput("");
      return;
    }

    if (btn === "⌫") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    if (btn === "=") {
      try {
        const result = eval(input); // simple calculation
        setInput(String(result));
      } catch {
        setInput("Error");
      }
      return;
    }

    setInput((prev) => prev + btn);
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.result}>{input || "0"}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                onPress={() => handleClick(btn)}
                style={[
                  styles.button,
                  btn === "=" && styles.equalButton,
                  btn === "0" && styles.zeroButton,
                ]}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "flex-end",
  },
  display: {
    padding: 20,
    alignItems: "flex-end",
  },
  result: {
    fontSize: 48,
    color: "#fff",
  },
  buttonsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    height: 70,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  equalButton: {
    backgroundColor: "#22c55e",
  },
  zeroButton: {
    flex: 2,
  },
});
