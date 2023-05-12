import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "./MealStorageDTO";
import OrganizeArrayByMealDate from "@utils/OrderArrayByMealDate";

export async function mealUpdate(newMeal: MealStorageDTO) {
    try {
        const storedMeals = await mealsGetAll()
        const differentMeals = storedMeals.filter(meal => meal.id !== newMeal.id)

        const storageOrganized = OrganizeArrayByMealDate([...differentMeals, newMeal])

        const storage = JSON.stringify(storageOrganized)     

        await AsyncStorage.setItem(MEALS_COLLECTION, storage)
    } catch(error) {
        throw error
    }
}