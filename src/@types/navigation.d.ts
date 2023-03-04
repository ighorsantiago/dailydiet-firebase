import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            register: undefined;
            edit: {
                mealToEdit: MealStorageDTO;
            };
            statistics: undefined;
            meal: {
                id: string;
            },
            feedback: {
                isGoodFeedback: boolean;
            };
        }
    }
}
