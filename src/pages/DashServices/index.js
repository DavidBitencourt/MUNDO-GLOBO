import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Home from "../Home";
import HomeServices from "./HomeServices";
import Settings from "./Settings";
export default function DashServices(props) {
  const navigation = useNavigation();

  const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
  );

  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
  );

  const initialLayout = { width: Dimensions.get("window").width };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "homeServices",
      title: "Início",
      accessibilityLabel: "Início",
    },
    {
      key: "account",
      title: "Conta",
      accessibilityLabel: "Configurações",
    },
    {
      key: "exit",
      title: "Sair",
      accessibilityLabel: "Sair",
    },
  ]);

  useEffect(() => {
    if (index === 2) navigation.navigate("Home");
  }, [index]);

  const renderScene = SceneMap({
    homeServices: HomeServices,
    account: Settings,
    exit: Home,
  });

  const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#f31d1d",
      }}
      style={{ backgroundColor: "black" }}
      getAccessibilityLabel={({ route }) => route.accessibilityLabel}
      renderLabel={({ route, focused }) => (
        <Text
          style={{
            color: focused ? "#f31d1d" : "white",
            padding: 5,
            fontSize: 14,
            width: "100%",
          }}
        >
          {route.title}
        </Text>
      )}
      renderIcon={({ route, focused }) => (
        <MaterialIcons
          name={
            route.title === "Início"
              ? "home"
              : route.title === "Conta"
              ? "account-circle"
              : "exit-to-app"
          }
          size={25}
          color={focused ? "#f31d1d" : "white"}
        />
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition={"bottom"}
      swipeEnabled={false}
      renderTabBar={renderTabBar}
    />
  );
}
