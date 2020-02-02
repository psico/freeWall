import React, {Component}  from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Test from "./src/components/Test/Test";

export default createDrawerNavigator({
    Test: {
        screen: () => <Test texto='opa mundo'/>
    }
}, {drawerWidth: 300})

