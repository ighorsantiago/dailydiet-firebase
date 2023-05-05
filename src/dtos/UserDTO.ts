import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export interface UserDTO {
    name: string;
    email: string;
    meals: MealStorageDTO[];
    dates: string[];
}
