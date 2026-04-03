import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type Task = {
  id: string;
  title: string;
  category: string; // Fixed spelling from 'cateogry'
  time: string;
  status: "Pending" | "Completed" | "In Progress";
  icon: {
    name: keyof typeof Ionicons.glyphMap;
    color: string;
  };
};

const STATUS_COLORS = {
  Pending: "orange",
  Completed: "#4CAF50",
  "In Progress": "#2196F3",
};

export const TASKS: Task[] = [
  {
    id: "1",
    title: "Market Research",
    category: "Business Analysis",
    time: "10:00 AM",
    status: "Pending",
    icon: { name: "analytics-outline", color: "orange" },
  },
  {
    id: "2",
    title: "UI Design Review",
    category: "Design",
    time: "12:30 PM",
    status: "Pending",
    icon: { name: "layers-outline", color: "orange" },
  },
  {
    id: "3",
    title: "Client Meeting",
    category: "Relations",
    time: "03:00 PM",
    status: "Pending",
    icon: { name: "people-outline", color: "orange" },
  },
];

const TasksCard = (item: any) => {
  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.card}>
      {/* Left Icon Section */}
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: `${item.icon.color}20` },
        ]}
      >
        <Ionicons name={item.icon.name} size={24} color={item.icon.color} />
      </View>

      {/* Center Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>

      {/* Right Time/Status Section */}
      <View style={styles.metaContainer}>
        <Text style={styles.timeText}>{item.time}</Text>
        <View
          style={[
            styles.statusBadge,
            { borderColor: STATUS_COLORS[item.status] },
          ]}
        >
          <Text
            style={[styles.statusText, { color: STATUS_COLORS[item.status] }]}
          >
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={TASKS}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TasksCard;

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    backgroundColor: "#000", // Black background
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#1a1a1a", // Dark grey card
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#333",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  titleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  categoryText: {
    color: "#888",
    fontSize: 12,
  },
  metaContainer: {
    alignItems: "flex-end",
  },
  timeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
