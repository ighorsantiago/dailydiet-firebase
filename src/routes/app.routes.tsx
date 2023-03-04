import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { Register } from "@screens/Register";
import { Edit } from "@screens/Edit";
import { Statistics } from "@screens/Statistics";
import { Feedback } from "@screens/Feedback";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="meal" component={Meal} />
            <Screen name="register" component={Register} />
            <Screen name="edit" component={Edit} />
            <Screen name="statistics" component={Statistics} />
            <Screen name="feedback" component={Feedback} />
        </Navigator>
    );
}