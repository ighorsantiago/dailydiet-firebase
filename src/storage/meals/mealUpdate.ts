import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealsGetAll } from "./mealsGetAll";

export async function mealUpdate(meal: MealStorageDTO) {
    try {
        const storedMeals = await mealsGetAll();

        const updatedMeals = storedMeals.filter(item => item.id !== meal.id);

        const storage = JSON.stringify([
            ...updatedMeals,
            meal,
        ]);

        await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}