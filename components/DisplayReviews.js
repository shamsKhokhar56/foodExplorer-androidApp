import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import firebase from '../Firebase/fire';

import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Loading from './Loading';

const DisplayReviews = (props) => {
    const restId = props.restId
    const city = props.cityName
    const [reviewsData, setReviewsData] = useState();

    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const ref = firebase.firestore().collection(`Review${city}`)
        await ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setReviewsData(items);
            setLoading(false);
        })

    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <View>
                        {reviewsData.map(item => {
                            if (item.restaurantId === restId) {
                                return (
                                    <View style={styles.reviewView} key={item.reviewId} >
                                        <View style={styles.leftSide}>
                                            <Text>
                                                {item.reviewBy}
                                            </Text>
                                            <Text>
                                                {item.reviewAt}
                                            </Text>
                                            <Text>
                                                {item.reviewDescription}
                                            </Text>
                                        </View>
                                        <View style={styles.rightSide}>
                                            <Text style={styles.textStyles}>
                                                {item.reviewRating.slice(0, -5)}
                                            </Text>
                                            <Entypo name="star" size={24} color={Colors.primary} />
                                        </View>
                                    </View>
                                )
                            }
                        })}
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    reviewView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },

    leftSide: {
        width: '80%'
    },
    rightSide: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '20%',
        alignItems: 'center'
    },
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default DisplayReviews
