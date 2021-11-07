import React, { useState, useEffect } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Loading from '../components/Loading'

import firebase from '../Firebase/fire';

const ResultScreen = ({ route }) => {
    const [data, setData] = useState([route.params.data])
    const name = data[0].predicted_class
    const score = data[0].score

    const [foodItems, setFoodItems] = useState();
    const [loading, setLoading] = useState(true);

    const ref = firebase.firestore().collection("FoodDetails");

    const getData = () => {
        ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setFoodItems(items);
            setLoading(false);
        });
    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <View style={styles.screen}>
            {
                loading ? (
                    <Loading />
                ) : (
                    <View style={styles.foodScreen}>
                        {
                            score == '0.0' ? (
                                <View style={{ height:'100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                                        Image not identified or Object not found.
                                    </Text>
                                </View>

                            ) : (
                                <FlatList
                                    data={foodItems}
                                    keyExtractor={item => item.Name}
                                    renderItem={({ item }) => {
                                        if (item.Name === name) {
                                            return (
                                                <View style={styles.screen}>
                                                    <View style={styles.headingView}>
                                                        <Text style={styles.headingText}>
                                                            Food item is idenified:
                                                        </Text>
                                                    </View>
                                                    <Image style={styles.imageStyles} source={{ uri: item.Image }} />
                                                    <View style={[styles.headingView, { flexDirection: 'column' }]}>
                                                        <Text style={styles.headingText}>
                                                            Food Name:
                                                        </Text>
                                                        <Text style={styles.text}>
                                                            {item.Name}
                                                        </Text>
                                                    </View>
                                                    <View style={[styles.headingView, { flexDirection: 'column' }]}>
                                                        <Text style={styles.headingText}>
                                                            Nutritions:
                                                        </Text>
                                                        <View style={{ flexDirection: 'column' }}>
                                                            <Text style={styles.text}>
                                                                -- Calories: {item.Calorie}
                                                            </Text>
                                                            <Text style={styles.text}>
                                                                -- Carbohydrates: {item.Carbohydrate}
                                                            </Text>
                                                            <Text style={styles.text}>
                                                                -- Fat: {item.Fat}
                                                            </Text>
                                                            <Text style={styles.text}>
                                                                -- Fiber: {item.Fiber}
                                                            </Text>
                                                            <Text style={styles.text}>
                                                                -- Proteins: {item.Protein}
                                                            </Text>
                                                            <Text style={styles.text}>
                                                                -- Sodium: {item.Sodium}
                                                            </Text>
                                                            <Text style={styles.text}>
                                                                -- Sugar: {item.Sugar}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <View style={[styles.headingView, { flexDirection: 'column', }]}>
                                                        <Text style={styles.headingText}>
                                                            Types:
                                                        </Text>
                                                        <View style={{ flexDirection: 'column' }}>
                                                            <Text style={[styles.text, { textAlign: 'left' }]}>
                                                                {item.Types.split(",").map((item) =>
                                                                    <Text key={item}>
                                                                        -- {item}{",\n"}
                                                                    </Text>
                                                                )}
                                                            </Text>

                                                        </View>
                                                    </View>
                                                    <View style={[styles.headingView, { flexDirection: 'column', }]}>
                                                        <Text style={styles.headingText}>
                                                            Ingredients:
                                                        </Text>
                                                        <View style={{ flexDirection: 'column' }}>
                                                            <Text style={[styles.text, { textAlign: 'left' }]}>
                                                                {item.Ingredients.split(',').map((item) =>
                                                                    <Text key={item}>
                                                                        --{item}{"\n"}
                                                                    </Text>
                                                                )}
                                                            </Text>

                                                        </View>
                                                    </View>
                                                    <View style={[styles.headingView, { flexDirection: 'column', }]}>
                                                        <Text style={styles.headingText}>
                                                            Recipe:
                                                        </Text>
                                                        <View style={{ flexDirection: 'column' }}>
                                                            <Text style={[styles.text, { textAlign: 'left' }]}>
                                                                {item.Recipe.split('#').map((item) =>
                                                                    <Text key={item}>
                                                                        {item}{"\n"}
                                                                    </Text>
                                                                )}
                                                            </Text>

                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    }}
                                />

                            )
                        }
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    foodScreen: {
        // height: '100%',
        // width: '100%',
    },
    headingView: {
        // height: 60,
        padding: 20,
    },
    headingText: {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        paddingLeft: 20,
        color: 'black'
    },
    imageStyles: {
        height: 250
    },
})

export default ResultScreen
