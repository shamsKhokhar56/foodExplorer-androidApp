import AsyncStorage from '@react-native-async-storage/async-storage'


const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value) {
            return value
        }
        else {
            return 'null'
        }
    } catch (e) {
        return e.mesaage
    }
}

const saveData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    }
    catch (error) {
        e.message
    }
}

const AsyncStorageHelper = {
    getData,
    saveData
}

export default AsyncStorageHelper;