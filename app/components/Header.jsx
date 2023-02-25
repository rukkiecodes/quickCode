import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import head from '../style/head'
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import color from '../style/color';
import { useSelector } from 'react-redux';

const Header = () => {
    const { text, logo } = useSelector(state => state.header)
    const navigation = useNavigation()

    const image = () => {
        if (logo == 'MTN') return require('../../assets/mtn.png')

        if (logo == 'GLO') return require('../../assets/glo.png')

        if (logo == 'AIRTEL') return require('../../assets/airtel.png')

        if (logo == '9MOBILE') return require('../../assets/9mobile.png')

    }

    return (
        <ImageBackground source={require('../../assets/headBackground.png')} style={head.headBackground}>
            <View style={head.headBackgroundFlex}>
                <Image source={image()} style={head.headBackgroundLogo} />
                <Text style={head.headBackgroundText}>{text}</Text>
            </View>
            <TouchableOpacity style={head.menuButton} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={24} color={color.white} />
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Header