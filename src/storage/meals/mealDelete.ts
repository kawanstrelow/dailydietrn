import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "./MealStorageDTO";

export async function mealDelete(id: string) {
    try {
        const storedMeals = await mealsGetAll()
        const newStoredMeals = storedMeals.filter(meal => meal.id !== id)

        const storage = JSON.stringify(newStoredMeals)      
        await AsyncStorage.setItem(MEALS_COLLECTION, storage)
    } catch(error) {
        throw error
    }
}