import { AsyncStorage } from 'react-native'

export const _storeData = async (phone) => {
    console.log("storing user Async Storage")
    try {
        await AsyncStorage.setItem('phone', phone);
    } catch (error) {
        console.log("Error saving data") 
        console.log(error)
    }
        
} 

    // fetch the data back asynchronously
export const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('phone');
            if (value !== null) {
                // Our data is fetched successfully
                console.log("coming from AsyncStorage:", value);
            }
        } catch (error) {
            // Error retrieving data
        }
    }