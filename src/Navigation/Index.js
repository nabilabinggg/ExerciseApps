import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Auth from "../Auth";
import BMI from "../BMI/Index";
import CatalogVideo from "../Video/Index";
import Home from "../Home/Index";
import VideoPlay from "../Video/VideoPlay";
import { Ionicons } from "@expo/vector-icons";
import DanceCategory from "../Video/Dance/Category";
import UpperCategory from "../Video/Chest/Category";
import LowerCategory from "../Video/Thighs/Category";
import Profile from "../Profile";
import ChestCategory from "../Video/Chest/Category";
import ThighsCategory from "../Video/Thighs/Category";
import ArmsCategory from "../Video/Arms/Category";
import AbsCategory from "../Video/Abs/Category";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ComponentVidStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export default function Navigation({username}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStackScreen} />
        <Stack.Screen name="Home" component={TabNavigator} initialParams={{username}} />
        <Stack.Screen name="Indeks Massa Tubuh" component={BMI} options={{ title: 'Indeks Massa Tubuh' }}/>
        <Stack.Screen name="Video" component={ComponentVidStackScreen}/>
        <Stack.Screen name="User" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AuthStackScreen(){
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth">
      <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="Authentication" component={Auth} />
    </AuthStack.Navigator>
  )
}

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
        name="Chest Workout"
        component={ChestCategory}
      />
      <ComponentVidStack.Screen
        name="Thighs Workout"
        component={ThighsCategory}
      />
      <ComponentVidStack.Screen
        name="Arms Workout"
        component={ArmsCategory}
      />
      <ComponentVidStack.Screen
        name="Abs Workout"
        component={AbsCategory}
      />
      <ComponentVidStack.Screen name="Pemutar Video" component={VideoPlay} />
    </ComponentVidStack.Navigator>
  );
}

const TabNavigator = () => (
  <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarShowLabel: false,
          tabBarStyle: { height: 70 },
          headerShown: true,
          lazy: false
        })}
      >
        <Tab.Screen
          name="Beranda"
          component={Home}
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
          name="Indeks Massa Tubuh"
          component={BMI}
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
            headerShown: false,
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
          name="Profile"
          component={Profile}
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
)
