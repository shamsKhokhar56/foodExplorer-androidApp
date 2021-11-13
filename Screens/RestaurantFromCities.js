import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, TextInput, FlatList } from 'react-native'
import Loading from '../components/Loading';

import firebase from '../Firebase/fire'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import Card from '../components/Card';

const RestaurantFromCities = ({ navigation, route }) => {

    const cityName = route.params.cityName

    const [resData, setResData] = useState();
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    const getData = async () => {
        const ref = firebase.firestore().collection(`Restaurant${cityName}`)
        await ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setResData(items);
            setLoading(false);
        })

    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <View style={styles.screen}>
            <View style={styles.searchView}>
                <Card style={styles.searchCard}>
                    <View style={styles.searchIcon}>
                        <FontAwesome name="search" size={30} color={Colors.primary} />
                    </View>
                    <View style={styles.searchInput}>
                        <TextInput
                            placeholder='Search Restaurant'
                            onChangeText={text => { setSearch(text) }}
                            value={search}
                        />
                    </View>
                </Card>
            </View>
            {
                loading ? (
                    <Loading />
                ) : (
                    <FlatList
                        data={resData}
                        keyExtractor={item => item.restaurantId}
                        renderItem={({ item }) => {
                            if (item.restaurantName.toLowerCase().includes(search.toLowerCase()) || search == '') {
                                return (
                                    <View style={styles.restaurantView} key={item.restaurantId}>
                                        <TouchableHighlight activeOpacity={0.6} underlayColor={'white'}
                                            onPress={() => {
                                                navigation.navigate('RestaurantDetail', {
                                                    restId: item.restaurantId,
                                                    name: item.restaurantName,
                                                    linkNumber: item.linkNumber,
                                                    cityCode: item.cityCode,
                                                    rating: item.restaurantRating,
                                                    openTime: item.openingTime,
                                                    closeTime: item.closingTime,
                                                    address: item.restaurantAddress,
                                                    latitude: item.latitude,
                                                    longitude: item.longitude,
                                                    image: item.restaurantImage,
                                                    city: item.city

                                                })
                                            }}>
                                            <View>
                                                <Image style={styles.imageStyles} source={{ uri: item.restaurantImage }} />
                                                <View style={styles.restaurantDetails}>
                                                    <Text style={styles.textStyles}>
                                                        {item.restaurantId} {'  '} {item.restaurantName}
                                                    </Text>
                                                    <View style={styles.ratingStyles}>
                                                        <Entypo name="star" size={20} color={Colors.primary} />
                                                        <Text style={styles.textStyles}>
                                                            {item.restaurantRating.slice(0, -5)}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                )
                            }
                        }}
                    />
                    // <ScrollView>
                    //     {Restaurant.map(
                    //         (item) => {
                    //             if (item.city === cityName) {
                    //                 if (item.restaurantName.toLowerCase().includes(search.toLowerCase()) || search == '') {
                    //                     return (
                    //                         <View style={styles.restaurantView} key={item.restaurantId}>
                    //                             <TouchableHighlight activeOpacity={0.6} underlayColor={'white'}
                    //                                 onPress={() => {
                    //                                     navigation.navigate('RestaurantDetail', {
                    //                                         restId: item.restaurantId,
                    //                                         name: item.restaurantName,
                    //                                         linkNumber: item.linkNumber,
                    //                                         cityCode: item.cityCode,
                    //                                         rating: item.restaurantRating,
                    //                                         openTime: item.openingTime,
                    //                                         closeTime: item.closingTime,
                    //                                         address: item.restaurantAddress,
                    //                                         latitude: item.latitude,
                    //                                         longitude: item.longitude,
                    //                                         image: item.restaurantImage,
                    //                                         city: item.city

                    //                                     })
                    //                                 }}>
                    //                                 <View>
                    //                                     <Image style={styles.imageStyles} source={{ uri: item.restaurantImage }} />
                    //                                     <View style={styles.restaurantDetails}>
                    //                                         <Text style={styles.textStyles}>
                    //                                             {item.restaurantName}
                    //                                         </Text>
                    //                                         <View style={styles.ratingStyles}>
                    //                                             <Entypo name="star" size={20} color={Colors.primary} />
                    //                                             <Text style={styles.textStyles}>
                    //                                                 {item.restaurantRating.slice(0, -5)}
                    //                                             </Text>
                    //                                         </View>
                    //                                     </View>
                    //                                 </View>
                    //                             </TouchableHighlight>
                    //                         </View>
                    //                     )
                    //                 }
                    //             }
                    //         }
                    //     )}
                    // </ScrollView>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchView: {
        height: '10%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '10%'
    },
    searchCard: {
        width: '100%',
        height: '75%',
        flexDirection: 'row'
    },
    searchIcon: {
        height: '100%',
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        width: '85%',
        height: '100%',
        justifyContent: 'center',
    },
    restaurantView: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        margin: 10,
        // padding: 20,
        // height: '20%',
        // width: '100%',
        overflow: 'hidden'
        // alignItems: 'flex-start'
    },
    imageStyles: {
        height: 200,
        width: 400,
    },
    restaurantDetails: {
        padding: 5,
        height: 60,
        // flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyles: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    ratingStyles: {
        flexDirection: 'row'
    },
})

export default RestaurantFromCities
