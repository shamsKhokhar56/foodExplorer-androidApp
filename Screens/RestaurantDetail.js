import React, { useState, useEffect } from 'react'
import { Dimensions, FlatList, TouchableHighlight, Image, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';

import MapView, { Callout, Circle, Marker } from 'react-native-maps';

import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import Food from '../data/Food';
import PostReviewForm from './PostReviewForm';
import DisplayReviews from '../components/DisplayReviews';
import LanguageText from '../components/LanguageText';

const RestaurantDetail = ({ navigation, route }) => {

    const [food, setFood] = useState(true)
    const [about, setAbout] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const [postReview, setPostReview] = useState(false)
    const [review, setReview] = useState('')
    const [defaultRating, setDefaultRating] = useState(0)

    const restId = route.params.restId
    const name = route.params.name
    const linkNumber = route.params.linkNumber
    const cityCode = route.params.cityCode
    const rating = route.params.rating
    const openTime = route.params.openTime
    const closeTime = route.params.closeTime
    const address = route.params.address
    // const latitude = route.params.latitude
    // const longitude = route.params.longitude
    const image = route.params.image
    const city = route.params.city

    const handleStates = (value) => {
        if (value === 'food') {
            setFood(true)
            setAbout(false)
            setShowReview(false)
        }
        if (value === 'about') {
            setFood(false)
            setAbout(true)
            setShowReview(false)
        }
        if (value === 'review') {
            setFood(false)
            setAbout(false)
            setShowReview(true)
        }
    }

    const postHandler = () => {
        //Post Review function here
    }

    return (
        <ScrollView style={styles.screen}>
            <Image style={styles.imageStyles} source={{ uri: image }} />
            <View style={styles.restaurantDetails}>
                <Text style={styles.textStyles}>
                    {name}
                </Text>
                <View style={styles.ratingStyles}>
                    <Text style={styles.textStyles}>
                        {rating.slice(0, -5)}
                    </Text>
                    <Entypo name="star" size={24} color={Colors.primary} />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableHighlight
                    underlayColor={'white'}
                    activeOpacity={0.4}
                    style={food ? styles.buttonStylesTrue : styles.buttonStylesFalse}
                    onPress={() => handleStates('food')}>
                    <LanguageText styles={styles.buttonText} value={'food'} />
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor={'white'}
                    activeOpacity={0.4}
                    style={about ? styles.buttonStylesTrue : styles.buttonStylesFalse}
                    onPress={() => handleStates('about')}>
                    <LanguageText styles={styles.buttonText} value={'about'} />
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor={'white'}
                    activeOpacity={0.4}
                    style={showReview ? styles.buttonStylesTrue : styles.buttonStylesFalse}
                    onPress={() => handleStates('review')}>
                    <LanguageText styles={styles.buttonText} value={'reviews'} />
                </TouchableHighlight>
            </View>
            {
                food ? (
                    <View>
                        <LanguageText
                            styles={[styles.textStyles, { borderBottomColor: 'grey', borderTopWidth: 2, fontSize: 28 }]}
                            value={'foodItems'}
                        />
                        {Food.map(item => {
                            if (item.restaurantID === restId) {
                                return (
                                    <View style={styles.foodView} key={item.foodID}>
                                        <View stlye={styles.childView}>
                                            <Image style={styles.foodImageStyles} source={{ uri: item.foodImage }} />
                                        </View>
                                        <View style={styles.foodDetailsView}>
                                            <View style={styles.ratingStyles}>
                                                <LanguageText styles={[styles.textStyles, { paddingHorizontal: 5 }]} value={'name'} />
                                                <Text style={styles.timeTextStyles}>
                                                    {item.foodName}
                                                </Text>
                                            </View>
                                            <View style={styles.ratingStyles}>
                                                <LanguageText styles={[styles.textStyles, { paddingHorizontal: 5 }]} value={'price'} />
                                                <Text style={styles.timeTextStyles}>
                                                    {item.foodPrice}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                        })}
                    </View>
                ) : showReview ? (
                    <View>
                        <LanguageText styles={[styles.textStyles, { borderBottomColor: 'grey', borderTopWidth: 2, paddingLeft: 5, fontSize: 28 }]} value={'reviews'} />
                        {
                            postReview ? (
                                <View>
                                    <PostReviewForm
                                        onCancel={() => setPostReview(false)}
                                        onPost={() => postHandler()}
                                        value={review}
                                        setValue={setReview}
                                        rating={defaultRating}
                                        setRating={setDefaultRating}
                                    />
                                </View>
                            ) : (
                                <View style={styles.postReviewView}>
                                    <TouchableHighlight style={styles.postReviewButton} onPress={() => setPostReview(true)}>
                                        <LanguageText styles={styles.buttonText} value={'postReview'} />
                                    </TouchableHighlight>
                                </View>
                            )
                        }
                        <DisplayReviews restId={restId} />
                    </View>
                ) : (
                    <View>
                        <LanguageText styles={[styles.textStyles, { borderBottomColor: 'grey', borderTopWidth: 2, fontSize: 28 }]} value={'about'} />
                        <Text>
                            <Text style={styles.timeTextStyles}>
                                <LanguageText styles={styles.timeTextStyles} value={'timing'} />: {openTime} - {closeTime}
                            </Text>
                        </Text>
                        <Text>
                            <Text style={styles.timeTextStyles}>
                                <LanguageText styles={styles.timeTextStyles} value={'address'} />: {address}
                            </Text>
                        </Text>
                        {/* <View style={{ height: 200, backgroundColor: 'green', alignItems: 'center' }}>
                            <MapView style={{ height: '100%', width: '90%' }}
                                initialRegion={{
                                    latitude: parseInt(latitude),
                                    longitude: parseInt(longitude),
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                >
                                <Marker 
                                    coordinate={{ 
                                        latitude: parseInt(latitude),
                                        longitude: parseInt(longitude),
                                     }}
                                />
                            </MapView> 
                        </View>*/}
                    </View>
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imageStyles: {
        height: 300
    },
    restaurantDetails: {
        padding: 5,
        height: 60,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ratingStyles: {
        flexDirection: 'row',
    },
    timeTextStyles: {
        fontSize: 18,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 50,
    },
    buttonStylesTrue: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 5,
        height: 40,
        width: 100
    },
    buttonStylesFalse: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        height: 40,
        width: 100
    },
    postReviewView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    postReviewButton: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        borderBottomColor: Colors.primary,
        fontSize: 20,
        textAlign: 'center'
    },
    foodView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    foodImageStyles: {
        height: 150,
        width: 150
    },
    childView: {
        flexBasis: '50%'
    },
    foodDetailsView: {
        padding: 10,
        width: 200,
        justifyContent: 'center'
    },
})

export default RestaurantDetail;
