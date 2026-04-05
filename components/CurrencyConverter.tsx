import { Picker } from "@react-native-picker/picker";
import React, { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

const CurrencyConverter = () => {
  const inputRef = useRef<TextInput | null>(null);

  const [source, setSource] = useState("USD");
  const [dest, setDest] = useState("INR");
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState("");

  const currencies = ["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY"];

  const convertCurrency = async () => {
    if (!amount) return;

    try {
      const res = await fetch(
        `http://api.currencylayer.com/live?access_key=29ec6cd4f8632e1bc0ce60c1f6fb6353&source=${source}&currencies=${dest}`,
      );

      const data = await res.json();

      if (!data.success) {
        console.log("API Error", data);
        return;
      }

      const key = source + dest; // e.g. USDINR
      const rate: Float = data.quotes[key];

      if (!rate) {
        console.log("Invalid currency pair");
        return;
      }

      const ans = parseFloat(amount) * rate;
      setResult(`${amount} ${source} = ${ans.toFixed(2)} ${dest}`);
      console.log(result);
      console.log(ans);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const swapCurrencies = () => {
    setSource(dest);
    setDest(source);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💱 Currency Converter</Text>

      {/* Card */}
      <View style={styles.card}>
        {/* Amount Input */}
        <Text style={styles.label}>Amount</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Enter amount"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text: string) => setAmount(text)}
        />
        {/* From / To */}
        <View style={styles.row}>
          <View style={styles.dropdownBox}>
            <Text style={styles.label}>From</Text>
            <Picker
              selectedValue={source}
              onValueChange={(val) => setSource(val)}
              style={styles.picker}
            >
              {currencies.map((cur) => (
                <Picker.Item label={cur} value={cur} key={cur} />
              ))}
            </Picker>
          </View>

          {/* Swap Button */}
          <TouchableOpacity style={styles.swapBtn} onPress={swapCurrencies}>
            <Text style={styles.swapText}>⇄</Text>
          </TouchableOpacity>

          <View style={styles.dropdownBox}>
            <Text style={styles.label}>To</Text>
            <Picker
              selectedValue={dest}
              onValueChange={(val) => setDest(val)}
              style={styles.picker}
            >
              {currencies.map((cur) => (
                <Picker.Item label={cur} value={cur} key={cur} />
              ))}
            </Picker>
          </View>
        </View>
        <TextInput
          style={styles.output}
          placeholder="exachanged  amount"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={result}
        />
        {/* Convert Button */}
        <TouchableOpacity style={styles.button} onPress={convertCurrency}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>

        {/* Result */}
        {result ? <Text style={styles.result}>{result}</Text> : null}
      </View>
    </View>
  );
};

export default CurrencyConverter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#334155",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 16,
  },
  label: {
    color: "#94a3b8",
    marginBottom: 5,
    fontSize: 14,
  },
  output: {
    backgroundColor: "#334155",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownBox: {
    flex: 1,
  },
  picker: {
    color: "#fff",
    backgroundColor: "#334155",
    borderRadius: 10,
  },
  swapBtn: {
    marginHorizontal: 10,
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 50,
  },
  swapText: {
    color: "#fff",
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#22c55e",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});
