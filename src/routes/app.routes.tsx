import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewList } from "../screens/NewList";
import { List } from "../screens/List";
import { Home } from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes () {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="newList"
                component={NewList}
            />

            <Screen
                name="list"
                component={List}
            />
        </Navigator>
    )
}