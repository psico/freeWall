import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Test from "../Test/Test";

const AppNavigator = createStackNavigator({
        Test: Test,
    },
    {
        initialRouteName: 'Test',
    }
);

export default createAppContainer(AppNavigator);
