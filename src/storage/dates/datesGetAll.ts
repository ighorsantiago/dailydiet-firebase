

import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATES_COLLECTION } from "@storage/storageConfig";

export async function datesGetAll() {

    try {

        const storage = await AsyncStorage.getItem(DATES_COLLECTION);

        const days: string[] = storage ? JSON.parse(storage) : [];

        return days;

    } catch (error) {
        throw error;
    }
}
