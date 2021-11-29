import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Image, Dimensions } from 'react-native';

import { Camera } from 'expo-camera';
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import LanguageText from '../components/LanguageText';

import axios from "axios";

const CameraScreen = ({ navigation }) => {
    const [cameraRef, setCameraRef] = useState(null);
    const [clicked, setClicked] = useState(false)
    const [imageUri, setImageUri] = useState('')
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = () => {

        if (cameraRef) {
            cameraRef.takePictureAsync({ onPictureSaved: onPictureSaved });
        }
    };

    const ImagePickerHandler = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
            else {
                pickImage()
            }
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            onPictureSaved(result)
        }
    }

    const onPictureSaved = async (photo) => {
        console.log(photo.uri)
        setClicked(true)
        setImageUri(photo.uri)

        const formData = new FormData();
        const fileName = photo.uri.split("/");
        const fName = fileName[fileName.length - 1];
        console.log("FILE NAME ==========>");
        console.log(fName);
        formData.append("backgroundImage", {
            uri: photo.uri,
            type: "image/jpg",
            name: fName,
        });
        // formData.append("", );
        console.log(formData);
        setLoading(true);
        try {
            const response = await axios.post(
                // "http://192.168.10.9:5000/:5000/predict/class",
                "http://192.168.10.15:5000/predict/class",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Successful response", response.data, "done");
            navigation.navigate('ResultScreen', { data: response.data })
            // setResponse(response.data)
        } catch (error) {
            // console.log("Error response", JSON.stringify(error));
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {
                clicked ? (
                    <View style={styles.camera}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <LanguageText value={'imageIsProcessing'} />
                        </View>
                    </View>
                ) : (
                    <Camera style={styles.camera} type={type}
                        ref={(ref) => {
                            setCameraRef(ref);
                        }}>

                    </Camera>

                )
            }
            <View style={styles.bottom}>
                <View style={styles.innerBottom}>
                </View>
                <View style={styles.innerBottom}>
                    <TouchableOpacity onPress={() => takePicture()}>
                        <Entypo name="circle" size={100} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.innerBottom}>
                    <TouchableHighlight style={styles.imagePickerButton} onPress={() => ImagePickerHandler()}>
                        <FontAwesome name="photo" size={50} color="white" />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        height: '80%'
    },
    bottom: {
        height: '20%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black',
        borderTopColor: 'white',
        borderTopWidth: 1
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
        // backgroundColor: 'black',
        // borderTopColor: 'white',
        // borderTopWidth: 1,
        // flexDirection: 'row'
    },
    innerBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '100%',
    },
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    imagePickerButton: {

    },
    imageStyles: {
        height: 60,
        width: 60
    },
})

export default CameraScreen
