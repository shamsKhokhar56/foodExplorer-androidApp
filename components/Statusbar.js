import React from 'react'
import { View, Text, StatusBar } from 'react-native'

const Statusbar = props => {
    return (
        <View style={{ ...props.style }}>
            {props.children}
            <StatusBar animated="auto" />
        </View>
    )
}

export default Statusbar
