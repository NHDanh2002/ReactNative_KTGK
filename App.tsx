import { Text, View } from "react-native"
import Login from './screens/Login'
import Registration from "./screens/Registration";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./routers/Router";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

const App = ()=>{
  return(
    <NavigationContainer>
        <Router/>
    </NavigationContainer>
  )
}
export default App