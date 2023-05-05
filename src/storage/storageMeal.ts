import { v4 as uuidv4 } from "uuid";

import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import { MealDTO, MealsStatisticsDTO } from "../dtos/MealDTO";
import { UserDTO } from "../dtos/UserDTO";
import { storageGetUser, storageUpdateUser } from "./storageUser";

export async function getMeal(id: string, key: string) {
    try {

        const storage = await mealsGetAllFB(key)

        const meal = storage.find(meal => meal.id === id);

        return meal;
    } catch (error) {
        throw error;
    }
}

export async function mealCreateFB(meal: MealDTO, key: string) {

    try {
        const userRef = doc(db, "users", key);

        const newMeal = { id: uuidv4(), ...meal };
        // Atomically add a new meal to the meals array field.
        await updateDoc(userRef, {
            meals: arrayUnion(newMeal),
        });

        const userLogged = await storageGetUser();

        await storageUpdateUser({
            ...userLogged,
            meals: [...userLogged.meals, newMeal]
        });
    } catch (error) {
        throw error;
    }
}

export async function mealsGetAllFB(key: string) {

    try {
        const userRef = await getDoc(doc(db, "users", key));
        const userFB = userRef.data() as UserDTO;

        await storageUpdateUser(userFB);
        
        return userFB.meals;
    } catch (error) {
        throw error;
    }

}

export async function getMealsByDate(date: string, key: string) {

    try {

        const userLogged = await storageGetUser();

        const meals = userLogged.meals;

        const mealsByDate = meals ? meals.filter(item => item.date === date) : [];

        return mealsByDate;

    } catch (error) {
        throw error;
    }
}

// export async function getMealsByDate(date: string, key: string) {

//     try {

//         const storage = await mealsGetAllFB(key);

//         const mealsByDate = storage ? storage.filter(item => item.date === date) : [];

//         return mealsByDate;

//     } catch (error) {
//         throw error;
//     }
// }

export async function mealsStatistics(key: string) {

    const stats: MealsStatisticsDTO = {
        percentage: 0,
        totalMeals: 0,
        inDiet: 0,
        outDiet: 0,
        bestSequence: 0
    }

    const meals = await mealsGetAllFB(key);

    stats.totalMeals = meals.length;

    meals.forEach(meal => {
        if (meal.isDiet) {
            stats.inDiet++;
            stats.bestSequence++;
        } else {
            stats.outDiet++;
            stats.bestSequence = 0;
        }
    })

    if (stats.inDiet > 0) {
        stats.percentage = Math.round((stats.inDiet / stats.totalMeals) * 100 * 100) / 100;
    }

    return stats;
}

export async function mealUpdate(meal: MealDTO, key: string) {
    try {
        const storedMeals = await mealsGetAllFB(key);

        const updatedMeals = storedMeals.filter(item => item.id !== meal.id);

        const storage = [
            ...updatedMeals,
            meal,
        ];

        const userRef = doc(db, "users", key);

        await updateDoc(userRef, {
            meals: storage
        });

        const userLogged = await storageGetUser();

        await storageUpdateUser({
            ...userLogged,
            meals: storage
        });

    } catch (error) {
        throw error;
    }
}

export async function mealRemoveById(id: string, key: string) {

    try {
        const storedMeals = await mealsGetAllFB(key);

        const updatedMeals = storedMeals.filter(item => item.id !== id);

        const userRef = doc(db, "users", key);

        await updateDoc(userRef, {
            meals: updatedMeals
        });

        const userLogged = await storageGetUser();

        await storageUpdateUser({
            ...userLogged,
            meals: updatedMeals
        });
    } catch (error) {
        throw error;
    }
}
