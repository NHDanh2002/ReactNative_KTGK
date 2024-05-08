import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Registration from "../screens/Registration";

const Stack = createStackNavigator()
const Router = () =>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Registration" component={Registration}/>
        </Stack.Navigator>
    )
}
export default Router;