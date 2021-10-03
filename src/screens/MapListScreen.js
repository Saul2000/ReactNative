import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

const MapListScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 50 }}>MapListScreen</Text>
        </SafeAreaView>
    )
}

export default MapListScreen