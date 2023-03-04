import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";

export async function getMeal(id: string) {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

        const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

        const meal = meals.find(meal => meal.id === id);

        return meal;
    } catch (error) {
        throw error;
    }
}