import { View } from 'react-native'
import React from 'react'

// components styles
import mtnStyle from '../../style/network'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../components/CodeList'
import Header from '../../components/Header'
import { StatusBar } from 'expo-status-bar'


const MTNScreen = () => {
    return (
        <View style={mtnStyle.container}>
            <StatusBar style="light" />
            <Header
                source={require('../../../assets/headBackground.png')}
                headBackground={mtnStyle.headBackground}
                headBackgroundFlex={mtnStyle.headBackgroundFlex}
                logo={require('../../../assets/mtn.png')}
                headBackgroundLogo={mtnStyle.headBackgroundLogo}
                headBackgroundText={mtnStyle.headBackgroundText}
                text={'MTN Nigeria'}
            />
            <CodeList
                codeList={mtnStyle.codeList}
                codeCard={mtnStyle.codeCard}
                codeCardButton={mtnStyle.codeCardButton}
                codeCardButtonText={mtnStyle.codeCardButtonText}
                codeCardName={mtnStyle.codeCardName}
                data={DATA}
            />
        </View>
    )
}

export default MTNScreen