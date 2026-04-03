import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        {/* Changed 'label' to 'name' and fixed spelling */}
        <Ionicons name="chevron-back" size={24} color="orange" />
      </TouchableOpacity>

      <Text style={styles.title}>Tasks</Text>

      <TouchableOpacity style={styles.iconButton}>
        {/* Changed 'label' to 'name' and fixed 'notification' to 'notifications' */}
        <Ionicons name="notifications-outline" size={24} color="orange" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#1a1a1a", // Subtle dark grey for the buttons
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Header;
