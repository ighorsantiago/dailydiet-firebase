export type MealStorageDTO = {
  id?: string;
  title: string;
  description: string;
  date: string;
  time: string;
  isDiet: boolean;
}

export type MealSectionDTO = {
  title: string;
  data: MealStorageDTO[];
}
