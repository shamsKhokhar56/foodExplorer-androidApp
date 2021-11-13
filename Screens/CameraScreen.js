import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

import { Camera } from 'expo-camera';
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import LanguageText from '../components/LanguageText';

import axios from "axios";

const CameraScreen = ({ navigation }) => {
    const [cameraRef, setCameraRef] = useState(null);
    const [clicked, setClicked] = useState(false)
    const [imageUri, setImageUri] = useState('')
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const [response1, setResponse] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // const takePicture = async () => {
    //     if (cameraRef) {
    //         const options = { quality: 1, base64: true };
    //         const data = await cameraRef.takePictureAsync(options);
    //     }
    // };

    const takePicture = () => {

        if (cameraRef) {
            cameraRef.takePictureAsync({ onPictureSaved: onPictureSaved });
        }
    };

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
                            <LanguageText styles={styles.textStyles} value={'imageIsProcessing'} />
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
                <TouchableOpacity stlye={styles.button} onPress={() => takePicture()}>
                    <Entypo name="circle" size={100} color="white" />
                </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderTopColor: 'white',
        borderTopWidth: 1
    },
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
})

export default CameraScreen
