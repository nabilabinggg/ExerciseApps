import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BMI from "../BMI/Index";
import CatalogVideo from "../Video/Index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Index";
import VideoPlay from "../Video/VideoPlay";
import { Ionicons } from "@expo/vector-icons";
import DanceCategory from "../Video/Dance/Category";
import UpperCategory from "../Video/Upper/Category";
import LowerCategory from "../Video/Lower/Category";
import Profile from "../Profile";

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Beranda" component={Home} />
    </HomeStack.Navigator>
  );
}

const BMIStack = createNativeStackNavigator();
function BMIStackScreen() {
  return (
    <BMIStack.Navigator>
      <BMIStack.Screen name="Indeks Massa Tubuh" component={BMI} />
    </BMIStack.Navigator>
  );
}

const ComponentVidStack = createNativeStackNavigator();
function ComponentVidStackScreen() {
  return (
    <ComponentVidStack.Navigator
      mode=""
      screenOptions={{
        headerShown: true,
      }}
    >
      <ComponentVidStack.Screen
        name="Kategori Olahraga"
        component={CatalogVideo}
      />
      <ComponentVidStack.Screen
        name="Dance Workout"
        component={DanceCategory}
      />
      <ComponentVidStack.Screen
        name="Upper Body Workout"
        component={UpperCategory}
      />
      <ComponentVidStack.Screen
        name="Lower Body Workout"
        component={LowerCategory}
      />
      <ComponentVidStack.Screen name="Pemutar Video" component={VideoPlay} />
    </ComponentVidStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();
function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Profile" component={Profile} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarShowLabel: false,
          tabBarStyle: { height: 70 },
          headerShown: false,
          lazy: false
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="BMI"
          component={BMIStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "speedometer" : "speedometer-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ComponentVid"
          component={ComponentVidStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "play-circle" : "play-circle-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
