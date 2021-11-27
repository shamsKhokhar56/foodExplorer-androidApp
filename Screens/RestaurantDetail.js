import React, { useState, useEffect } from 'react'
import { Dimensions, FlatList, TouchableHighlight, Image, ScrollView, StyleSheet, Text, View, TextInput, Alert } from 'react-native';

import MapView, { Callout, Circle, Marker } from 'react-native-maps';

import { Entypo } from '@expo/vector-icons';

import firebase from '../Firebase/fire';

import Colors from '../constants/Colors';

import PostReviewForm from './PostReviewForm';
import DisplayReviews from '../components/DisplayReviews';
import LanguageText from '../components/LanguageText';
import Loading from '../components/Loading';

const RestaurantDetail = ({ navigation, route }) => {


    const [foodData, setFoodData] = useState();

    const [food, setFood] = useState(true)
    const [about, setAbout] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const [postReview, setPostReview] = useState(false)
    const [review, setReview] = useState('')
    const [defaultRating, setDefaultRating] = useState(0)
    const [loading, setLoading] = useState(true)

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

    const getData = async () => {
        const ref = firebase.firestore().collection(`Food${city}`)
        await ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setFoodData(items);
            setLoading(false);
        })
    }
    useEffect(() => {
        getData();
    }, [review]);





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
    const getDate = () => {
        const today = new Date()
        const date = today.getDate()
        const month = today.getMonth()
        const year = today.getFullYear()
        return `${date}-${month}-${year}`
    }

    const postHandler = async () => {

        const userName = await firebase.auth().currentUser.displayName
        const data = {
            city: city,
            cityCode: restId.slice(0, 1),
            linkNumber: restId.substring(1),
            restaurantId: restId,
            reviewAt: getDate(),
            reviewBy: userName,
            reviewDescription: review,
            reviewRating: `${defaultRating}/5 Stars`
        }
        const ref = firebase.firestore().collection(`Review${city}`).doc()
        const id = ref.id
        return (
            await firebase.firestore().collection(`Review${city}`).doc().set({
                city: city,
                cityCode: restId.slice(0, 1),
                linkNumber: restId.substring(1),
                restaurantId: restId,
                reviewAt: getDate(),
                reviewBy: userName,
                reviewDescription: review,
                reviewId: id,
                reviewRating: `${defaultRating}/5 Stars`
            })
                .then(() => Alert.alert('Review posted', 'Review has been posted succesfully'))
        )
    }

    return (
        <ScrollView style={styles.screen} keyboardShouldPersistTaps={'always'}>
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
                loading ? (<Loading />) : food ? (
                    <View>
                        <LanguageText
                            styles={[styles.textStyles, { borderBottomColor: 'grey', borderTopWidth: 2, fontSize: 28 }]}
                            value={'foodItems'}
                        />
                        {foodData.map(item => {
                            if (item.restaurantId === restId) {
                                return (
                                    <View style={styles.foodView} key={item.foodId}>
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
                                    <TouchableHighlight
                                        underlayColor="none" style={styles.postReviewButton}
                                        onPress={() => setPostReview(true)}
                                    >
                                        <LanguageText styles={styles.buttonText} value={'postReview'} />
                                    </TouchableHighlight>
                                </View>
                            )
                        }
                        <DisplayReviews restId={restId} cityName={city} />
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
