import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewExpense } from "../screens/NewExpense";
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
                name="newExpense"
                component={NewExpense}
            />

            <Screen
                name="list"
                component={List}
            />
        </Navigator>
    )
}