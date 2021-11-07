import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import { LanguageContext } from '../LanguageContext';

import translations from '../services/translations';

import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import Colors from '../constants/Colors';

import i18n from 'i18n-js';

const Dashboard = ({ navigation }) => {
    const {context, setContext} = useContext(LanguageContext)
    i18n.locale = context
    i18n.fallbacks = true;
    i18n.translations = translations
    return (
        <View style={styles.screen}>
            <View style={styles.dashboardItems}>
                <ScrollView style={styles.scrollViewStyles}>
                    <View style={styles.dashboardItemsViewLower}>
                        <Card style={styles.lowerCard}>
                            <TouchableHighlight onPress={() => navigation.navigate('RestaurantScreen',
                                { city: 'islamabad' }
                            )}>
                                <ImageBackground style={styles.imageStyle} source={require('../assets/Restaurant1.jpg')}>
                                    <Text style={styles.textStyles}>
                                        {i18n.t('restaurant')}
                                    </Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    </View>
                    <View style={styles.dashboardItemsViewLower}>
                        <Card style={styles.lowerCard}>
                            <TouchableHighlight onPress={() => navigation.navigate('CitiesScreen')}>
                                <ImageBackground style={styles.imageStyle} source={require('../assets/cities.jpeg')}>
                                    <Text style={styles.textStyles}>
                                        {i18n.t('cities')}
                                    </Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    </View>
                    <View style={styles.dashboardItemsViewLower}>
                        <Card style={styles.lowerCard}>
                            <TouchableHighlight onPress={() => navigation.navigate('WorkoutMain')}>
                                <ImageBackground style={styles.imageStyle} source={require('../assets/workout.jpg')}>
                                    <Text style={styles.textStyles}>
                                        {i18n.t('workout')}
                                    </Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    </View>
                    <View style={styles.dashboardItemsViewLower}>
                        <Card style={styles.lowerCard}>
                            <TouchableHighlight onPress={() => navigation.navigate('DietPlans')}>
                                <ImageBackground style={styles.imageStyle} source={require('../assets/dietPlan.jpg')}>
                                    <Text style={styles.textStyles}>
                                        {i18n.t('diet')}
                                    </Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottom}>
                <View style={styles.cameraButtonView}>
                    <TouchableHighlight activeOpacity={0.1} underlayColor="white"
                        onPress={() => { navigation.navigate('Camera') }}
                    >
                        <Ionicons style={styles.scanIcon} name="scan-circle-outline" size={70} color={Colors.primary} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundGrey,
    },
    scrollViewStyles: {
        padding: 10
    },
    textStyles: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 15
    },
    dashboardItems: {
        height: '94%',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    dashboardItemsViewUpper: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: 200,
        width: '100%',
        margin: 1
    },
    upperCard: {
        width: '42%',
        height: '85%',
        overflow: 'hidden'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    dashboardItemsViewLower: {
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    lowerCard: {
        width: '90%',
        height: '90%',
        overflow: 'hidden'
    },
    bottom: {
        height: '6%',
        backgroundColor: Colors.primary,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    },
    cameraButtonView: {
        alignItems: 'center',
        backgroundColor: Colors.backgroundGrey,
        borderRadius: 35,
        height: 70,
        justifyContent: 'center',
        width: 70
    },
    scanIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Dashboard;