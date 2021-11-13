import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableHighlight, Alert } from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/Colors';

import { Entypo } from '@expo/vector-icons';
import LanguageText from '../components/LanguageText';

const PostReviewForm = (props) => {
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

    const filledStar = <Entypo name="star" size={30} color={Colors.primary} />
    const emptyStar = <Entypo name="star-outlined" size={30} color={Colors.primary} />

    return (
        <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={'10'}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {maxRating.map((item, key) => {
                    return (
                        <TouchableHighlight key={item} underlayColor='none' onPress={() => props.setRating(item)}>
                            {
                                item <= props.rating ? filledStar : emptyStar
                            }
                        </TouchableHighlight>
                    )
                })}
            </View>
            <View style={styles.container}>
                <Card style={styles.cardStyles}>
                    <TextInput
                        placeholder='Write Review Here'
                        value={props.value}
                        onChangeText={text => props.setValue(text)}
                    />
                </Card>
            </View>
            <View style={[styles.postReviewView]}>
                <TouchableHighlight
                    style={[styles.postReviewButton, { backgroundColor: 'white' }]}
                    onPress={props.onCancel}
                    underlayColor='none'
                >
                    <LanguageText styles={styles.buttonText} value={'cancel'} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.postReviewButton} onPress={() => props.onPost()}>
                    <LanguageText styles={styles.buttonText} value={'postReview'} />
                </TouchableHighlight>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    cardStyles: {
        height: 50
    },
    postReviewView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    postReviewButton: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        padding: 12,
    },
    buttonText: {
        borderBottomColor: Colors.primary,
        fontSize: 20,
        textAlign: 'center'
    },

})

export default PostReviewForm
