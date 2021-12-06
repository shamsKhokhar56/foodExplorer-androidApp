import React from 'react'
import {View, StyleSheet, TouchableHighlight, ImageBackground, FlatList, Text } from 'react-native';
import Colors from '../constants/Colors'
import Card from '../components/Card'

import LanguageText from '../components/LanguageText';
import weekdays from '../data/WeeklyDietPlansDetails';

const DietPlansWeekView = ({ navigation, route }) => {
    const id = route.params.id
    const name = route.params.name
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.headingText}>
                    {name}
                </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={weekdays}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <Card style={styles.cardStyles} >
                            <TouchableHighlight underlayColor={'white'}
                                style={styles.buttonStyles}
                                onPress={() => {
                                    navigation.navigate('DietPlansDetailsView', {
                                        id: id, name: item.dayName
                                    })
                                }
                                }>
                                <ImageBackground style={styles.imageStyle} source={item.image}>
                                    {/* <LanguageText styles={styles.innerTextStyles} value={`${item.dayName}`} /> */}
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    )
                }}
            />
        </View>
    )
}

export default DietPlansWeekView;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.backgroundGrey
    },
    headingText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    cardStyles: {
        height: 150,
        width: 350,
        margin: 10,
        overflow: 'hidden'
    },
    innerTextStyles: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        color: 'white',
        fontSize: 24,
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonStyles: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        resizeMode: 'contain'
    },
})

