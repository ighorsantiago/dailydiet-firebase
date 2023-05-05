import 'react-native-get-random-values';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorageDTO } from "./MealStorageDTO";
import { mealsGetAll } from "./mealsGetAll";

import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { useAuth } from '../../hooks/useAuth';

export async function mealCreate(meal: MealStorageDTO) {
    try {

        const storedMeals = await mealsGetAll();

        const storage = JSON.stringify([
            ...storedMeals,
            { id: uuidv4(), ...meal },
        ]);

        await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}

// export async function mealCreateFB(meal: MealStorageDTO) {
export async function mealCreateFB(meal: MealStorageDTO, key: string) {

    try {
        console.log("mealCreateFB key:", key)
        // const userRef = doc(db, "users", 'yasmin@email.test');

        // // Atomically add a new meal to the meals array field.
        // await updateDoc(userRef, {
        //     meals: arrayUnion(meal)
        // });
    } catch (error) {
        throw error;
    }
}
