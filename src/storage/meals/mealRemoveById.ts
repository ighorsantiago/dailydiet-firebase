import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealRemoveById(id: string) {

    try {
        const storedMeals = await mealsGetAll();

        const storage = JSON.stringify(
            storedMeals.filter((item) => item.id !== id)
        );

        await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}
