import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATES_COLLECTION } from './../storageConfig';
import { mealGetByDate } from '@storage/meals/mealsGetByDate';
import { datesGetAll } from "./datesGetAll";

export async function removeEmptyDates(date: string) {
    try {
        const storedMeals = await mealGetByDate(date);

        if (storedMeals.length === 0) {

            const storedDays = await datesGetAll();
            const filtered = storedDays.filter(notEmpytDate => notEmpytDate !== date);
            const dates = JSON.stringify(filtered);

            await AsyncStorage.setItem(DATES_COLLECTION, dates);
        }

    } catch (error) {
        throw error;
    }
}
