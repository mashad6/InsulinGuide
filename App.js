import React from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./screens/Splash";
import TestBlood from "./screens/Type2/TestBlood";
import Guide from "./screens/Type2/InsulinGuide";
import Greater from "./screens/Type2/Greater11";
import Lesser from "./screens/Type2/Lesser11";
import Range1 from "./screens/Type2/Range1";
import Range2 from "./screens/Type2/Range2";
import Range3 from "./screens/Type2/Range3";
//type1 screens
import Record from "./screens/Type1/RecordTest";
import Greater1 from "./screens/Type1/Greater";
import Urgent from "./screens/Type1/Urgent";
import Ketone from "./screens/Type1/Ketones";
import Insulin from "./screens/Type1/InsulinDose";
import InsulinDose2 from "./screens/Type1/InsulinDose2";
import Ten from "./screens/Type1/Tenpercent";
import Twenty from "./screens/Type1/Twenty";
import Check from "./screens/Type1/Check";
import Check2 from "./screens/Type2/Check";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splash" component={Splash} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="testblood" component={TestBlood} />
        <Stack.Screen name="guide" component={Guide} />
        <Stack.Screen name="greater" component={Greater} />
        <Stack.Screen name="lesser" component={Lesser} />
        <Stack.Screen name="range1" component={Range1} />
        <Stack.Screen name="range2" component={Range2} />
        <Stack.Screen name="range3" component={Range3} />
        <Stack.Screen name="check2" component={Check2} />

        {/* type1 screens */}
        <Stack.Screen name="record" component={Record} />
        <Stack.Screen name="greater1" component={Greater1} />
        <Stack.Screen name="urgent" component={Urgent} />
        <Stack.Screen name="ketone" component={Ketone} />
        <Stack.Screen name="dose" component={Insulin} />
        <Stack.Screen name="dose2" component={InsulinDose2} />
        <Stack.Screen name="ten" component={Ten} />
        <Stack.Screen name="twenty" component={Twenty} />
        <Stack.Screen name="check" component={Check} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
