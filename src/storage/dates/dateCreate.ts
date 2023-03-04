import 'react-native-get-random-values';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATES_COLLECTION } from "@storage/storageConfig";
import { datesGetAll } from './datesGetAll';

export async function dateCreate(newDate: string) {
    try {

        const storedDates = await datesGetAll();

        const datesAlreadyRegistered = storedDates.filter(date => date === newDate);

        if (datesAlreadyRegistered.length > 0) {      
            return;
        }

        const storage = JSON.stringify([newDate, ...storedDates]);
        await AsyncStorage.setItem(DATES_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}
