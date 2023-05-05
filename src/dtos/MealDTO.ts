export type MealDTO = {
  id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  isDiet: boolean;
}

export type MealSectionDTO = {
  title: string;
  data: MealDTO[];
}

export type MealsStatisticsDTO = {
  percentage: number;
  totalMeals: number;
  inDiet: number;
  outDiet: number;
  bestSequence: number;
}
