import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { MealSectionDTO, MealStorageDTO } from "./MealStorageDTO";

export async function mealsGetAll() {

    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

        const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];
        return meals;
    } catch (error) {
        throw error;
    }
}

export async function mealsGetAllFB() {

    const querySnapshot = await getDocs(collection(db, "users"));
    try {
        const usersRef = await getDocs(collection(db, "users"));
        return usersRef;
    } catch (error) {
        throw error;
    }

    console.log(querySnapshot.docs.map(item => item.data()));
}
