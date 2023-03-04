import { mealsGetAll } from "./mealsGetAll";

export async function mealGetByDate(date: string) {

    try {

        const storage = await mealsGetAll();

        const mealsByDate = storage ? storage.filter(item => item.date === date) : [];

        return mealsByDate;

    } catch (error) {
        throw error;
    }
}
