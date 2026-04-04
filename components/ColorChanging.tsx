import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const ColorChanging = () => {
  const arr = [
    "red",
    "green",
    "blue",
    "yellow",
    "black",
    "white",
    "orange",
    "purple",
    "pink",
    "brown",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "navy",
    "maroon",
    "gold",
    "silver",
    "coral",
    "turquoise",
    "violet",
    "indigo",
    "beige",
    "khaki",
    "lavender",
  ];
  const [color, setColor] = useState("white");
  const changeColor = () => {
    let idx = 0;
    setInterval(() => {
      idx = idx + 1;
      if (idx >= arr.length) idx = 0;
      setColor(arr[idx]);
    }, 120);
  };
  return (
    <View>
      <Text>ColorChanging</Text>
      <View
        style={{ width: 200, height: 200, backgroundColor: `${color}` }}
      ></View>
      <Button title="Change color" onPress={changeColor} />
    </View>
  );
};

export default ColorChanging;
