import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tailor
        <Text style={styles.span}>Book.</Text>
      </Text>
      <View style={styles.subContainer}>
        <Icon name="search" size={30} color="#000" />
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Icon name="notifications" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    gap: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    letterSpacing: 1,
  },
  span: {
    fontWeight: "300",
    fontFamily: "Poppins-Regular",
  },
});
export default Navbar;
