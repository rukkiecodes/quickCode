import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

const { Navigator, Screen, Group } = createStackNavigator()

// Screens
import GetStarted from '../screens/getStarted/GetStarted'
import TabNavigation from './TabNavigation'
import Codeinfo from '../screens/modal/Codeinfo'
import color from '../color'

const StackNavigation = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                keyboardHandlingEnabled: true,
                animationEnabled: true,
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Screen name="GetStarted" component={GetStarted} />
            <Screen name="Home" component={TabNavigation} />

            <Group screenOptions={{ presentation: 'transparentModal' }}>
                <Screen name="Codeinfo" component={Codeinfo} options={{
                    gestureEnabled: true,
                    ...TransitionPresets.FadeFromBottomAndroid,
                    cardStyle: {
                        backgroundColor: color.transparent
                    }
                }} />
            </Group>
        </Navigator>
    )
}

export default StackNavigation