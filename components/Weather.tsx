import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const Weather = () => {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState("");
  const [temperature, setTemparture] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [weather_icons, setWeatherIcons] = useState("");

  const getWeather = async () => {
    try {
      console.log(city);
      const res = await fetch(
        `http://api.weatherstack.com/current?access_key=c54e085ea948d58beddaba17039ec915&query=${city}`,
      );

      const data = await res.json();
      console.log(data);
      setWeather(data.current.weather_descriptions[0]);
      setTemparture(data.current.temperature);
      setHumidity(data.current.humidity);
      setWind(data.current.wind_speed);
      setWeatherIcons(data.current.weather_icons[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter a city"
      />

      <Button title="get result now" onPress={() => getWeather()} />
      {weather && (
        <View style={styles.weatherContainer}>
          <Image
            source={{ uri: weather_icons }}
            style={{ width: 100, height: 100 }}
          />

          <Text>Weather: {weather}</Text>
          <Text>Temperature: {temperature}°C</Text>
          <Text>Humidity: {humidity}%</Text>
          <Text>Wind: {wind} km/h</Text>
        </View>
      )}
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center", // horizontal center
    backgroundColor: "#8790e2",
    padding: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  weatherContainer: {
    marginTop: 10,
    alignItems: "center", // horizontal center
    justifyContent: "center",
    backgroundColor: "#6e9947",
    padding: 10,
    borderRadius: 10,
  },
});
