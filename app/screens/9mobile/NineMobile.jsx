import { View } from 'react-native'
import React from 'react'

// components styles
import nineMobileStyle from './style'

// import codes array
import DATA from './codes'

// import components
import CodeList from '../../components/CodeList'
import Header from '../../components/Header'

const NineMobile = () => {
    return (
        <View style={nineMobileStyle.container}>
            <Header
                source={require('../../../assets/headBackground.png')}
                headBackground={nineMobileStyle.headBackground}
                headBackgroundFlex={nineMobileStyle.headBackgroundFlex}
                logo={require('../../../assets/9mobile.png')}
                headBackgroundLogo={nineMobileStyle.headBackgroundLogo}
                headBackgroundText={nineMobileStyle.headBackgroundText}
                text={'9Mobile Nigeria'}
            />
            <CodeList
                codeList={nineMobileStyle.codeList}
                codeCard={nineMobileStyle.codeCard}
                codeCardButton={nineMobileStyle.codeCardButton}
                codeCardButtonText={nineMobileStyle.codeCardButtonText}
                codeCardName={nineMobileStyle.codeCardName}
                data={DATA}
            />
        </View>
    )
}

export default NineMobile