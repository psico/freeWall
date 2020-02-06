import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Test from "../Test/Test";
import {Home} from '../Home/Home';

const AppNavigator = createStackNavigator({
        FreeWall: Home,
    },
    {
        initialRouteName: 'FreeWall',
    }
);

export default createAppContainer(AppNavigator);
