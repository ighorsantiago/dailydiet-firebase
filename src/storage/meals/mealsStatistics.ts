import { mealsGetAll } from "./mealsGetAll";

export type MealsStatistics = {
    percentage: number;
    totalMeals: number;
    inDiet: number;
    outDiet: number;
    bestSequence: number;
}

export async function mealsStatistics() {

    const stats: MealsStatistics = {
        percentage: 0,
        totalMeals: 0,
        inDiet: 0,
        outDiet: 0,
        bestSequence: 0
    }

    const meals = await mealsGetAll();

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
