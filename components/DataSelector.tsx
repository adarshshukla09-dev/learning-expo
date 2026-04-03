import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type DateItem = {
  month: string;
  day: string;
  weekday: string;
  key: string;
};

const generateData = (): DateItem[] => {
  const base = new Date(2026, 0, 1);
  return Array.from({ length: 5 }).map((_, i) => {
    const date = new Date(base);
    date.setDate(date.getDate() + i);
    return {
      month: date.toLocaleString("default", { month: "short" }), // 'short' usually fits better in rows
      day: date.getDate().toString(),
      weekday: date.toLocaleString("default", { weekday: "short" }),
      key: i.toString(),
    };
  });
};

const DATES = generateData();
const DEFAULT_SELECTED = DATES[2].key;

const DataSelector = () => {
  const [selected, setSelected] = React.useState(DEFAULT_SELECTED);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {DATES.map((item) => {
          const isSelected = selected === item.key;
          return (
            <TouchableOpacity
              key={item.key}
              onPress={() => setSelected(item.key)}
              activeOpacity={0.7}
              style={[styles.dataItem, isSelected && styles.dataItemselected]}
            >
              <Text style={[styles.month, isSelected && styles.selectedText]}>
                {item.month}
              </Text>
              <Text style={[styles.day, isSelected && styles.selectedText]}>
                {item.day}
              </Text>
              <Text style={[styles.weekday, isSelected && styles.selectedText]}>
                {item.weekday}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DataSelector;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#000", // Black background for the section
  },
  container: {
    paddingHorizontal: 20,
    gap: 12,
    paddingVertical: 20,
  },
  dataItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#333", // Dark grey border for unselected
    backgroundColor: "#1a1a1a", // Darker black/grey for cards
    gap: 8,
  },
  dataItemselected: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
  month: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888", // Dimmed text for unselected
  },
  day: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // White for unselected
  },
  weekday: {
    fontSize: 16,
    color: "#888",
  },
  selectedText: {
    color: "black", // Black text on Orange background looks sharp
    fontWeight: "bold",
  },
});
