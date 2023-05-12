import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import MealBox from "./MealBox";
import { Container, DayText, MealsBox } from "./styles";
import { mealsGetAll } from "@storage/meals/mealsGetAll";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

type Props = {
    day: string
}

export default function DayMeals({day}: Props) {

    const [mealsByDay, setMealsByDay] = useState<MealStorageDTO[]>([])

    const isFocused = useIsFocused()

    async function fetchMealsByDay() {
        try {
          const data: MealStorageDTO[] = await mealsGetAll()
          const newData = data.filter(meal => meal.date === day)
          setMealsByDay(newData)
          
        } catch (error) {
          Alert.alert('Refeições', 'Não foi possível carregar as refeições.')
        } 
    }

    useFocusEffect(useCallback(() => {
        fetchMealsByDay()
    }, [isFocused]));

    return(
        <Container>
            <DayText>{day.replaceAll('/','.')}</DayText>
            <MealsBox>
                {
                    // mealsByDay.map(meal => <MealBox time={meal.time.slice(0,5)} key={meal.id} title={meal.name} checked={meal.insideDiet === 'true' ? true : false} />)
                    mealsByDay.map(meal => <MealBox data={meal} key={meal.id} />)
                }
            </MealsBox>
        </Container>
    )
}