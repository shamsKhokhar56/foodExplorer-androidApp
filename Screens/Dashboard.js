import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableHighlight, ScrollView, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import LanguageText from '../components/LanguageText';

const Dashboard = ({ navigation }) => {

    return (
        <View style={styles.screen}>
            <View style={styles.dashboardItems}>
                <ScrollView style={styles.scrollViewStyles}>
                    <View style={styles.dashboardItemsView}>
                        <Card style={styles.lowerCard}>
                            <TouchableHighlight onPress={() => navigation.navigate('RestaurantScreen',
                                { city: 'Islamabad' }
                            )}>
                                <ImageBackground style={styles.imageStyle} source={require('../assets/Restaurant1.jpg')}>
                                    <LanguageText styles={styles.textStyles} value={'restaurant'} />
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    </View>
                    <View style={styles.dashboardItemsView}>
                        <Card style={styles.lowerCard}>
                            <TouchableHighlight onPress={() => navigation.navigate('CitiesScreen')}>
                                <ImageBackground style={styles.imageStyle} source={require('../assets/cities.jpeg')}>
                                    <LanguageText styles={styles.textStyles} value={'cities'} />
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    </View>
                    <View style={styles.dashboardItemsView}>
                        <Card style={styles.lowerCard}>
                            <TouchableHighlight onPress={() => navigation.navigate('WorkoutMain')}>
                                <ImageBackground style={styles.imageStyle} source={require('../assets/workout.jpg')}>
                                    <LanguageText styles={styles.textStyles} value={'workout'} />
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    </View>
                    <View style={styles.dashboardItemsView}>
                        <Card style={styles.lowerCard}>
                            <TouchableHighlight onPress={() => navigation.navigate('DietPlans')}>
                                <ImageBackground style={styles.imageStyle} source={require('../assets/dietPlan.jpg')}>
                                    <LanguageText styles={styles.textStyles} value={'diet'} />
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottom}>
                <View style={styles.cameraButtonView}>
                    <TouchableHighlight activeOpacity={0.1} underlayColor="none"
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
    dashboardItems: {
        height: '94%',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    scrollViewStyles: {
        padding: 10
    },
    dashboardItemsView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    lowerCard: {
        width: '95%',
        height: '90%',
        overflow: 'hidden'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
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
    bottom: {
        height: '7%',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40
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
        alignItems: 'center',
    }
})

export default Dashboard;
