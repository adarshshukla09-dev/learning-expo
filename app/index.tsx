import ColorChanging from "@/components/ColorChanging";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const index = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Set barStyle to light-content for the black background */}
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {/* <Weather /> */}
      <ColorChanging />
      {/* 
      <FlatList
        data={TASKS}
        keyExtractor={(item) => item.id}
        // Using your TasksCard component for each item
        renderItem={({ item }) => <TasksCard task={item} />}
        ListHeaderComponent={
          <>
            <Header />
            <DataSelector />
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Today's Tasks</Text>
            </View>
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Maintain the black theme
  },
  list: {
    paddingBottom: 40, // Space at the bottom
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default index;
