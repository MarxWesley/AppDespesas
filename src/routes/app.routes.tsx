import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyList } from "../screens/MyList";
import { NewList } from "../screens/NewList";
import { List } from "../screens/List";

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes () {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="myList"
                component={MyList}
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