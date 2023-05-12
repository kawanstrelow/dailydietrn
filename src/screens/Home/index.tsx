import { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { useNavigation, useFocusEffect, useRoute, useIsFocused } from '@react-navigation/native';

import { Container, PercentInfo, PercentInfoText, PercentInfoNumber, Icon, Refeicoes } from './styles';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import DayMeals from '@components/DayMeals';

import { MealStorageDTO } from '@storage/meals/MealStorageDTO';
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {

    const [days, setDays] = useState<string[]>([])
    const [score, setScore] = useState(50)
    const [meals, setMeals] = useState<MealStorageDTO[]>([])

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    console.log(isFocused)
    function handleNewMeal() {
        navigation.navigate('criacao')
    }

    function handleGoToStatistics() {
        navigation.navigate('estatisticas')
    }
    
    async function fetchMeals() {
        console.log('fetch meals')
        try {
          const data: MealStorageDTO[] = await mealsGetAll()
          const days = data.map(meal => meal.date)
          const uniqueDays = [...new Set(days)]
          setDays(uniqueDays)
          setMeals(data)
          calculateScore(data)
          
        } catch (error) {
          Alert.alert('Refeições', 'Não foi possível carregar as refeições.')
        } 
    }

    function calculateScore(data: MealStorageDTO[]) {
        const totalMeals = data.length
        const totalMealsInDiet = data.filter(meal => meal.insideDiet === 'true').length

        if (totalMealsInDiet === 0) return setScore(0)
        const score = (totalMealsInDiet / totalMeals) * 100
        setScore(score)
    }
    
    useFocusEffect(useCallback(() => {
        fetchMeals()
    }, [isFocused]));

    return(
        <Container>
            <Header />
            <PercentInfo ScorePercent={score} onPress={handleGoToStatistics}>
                <Icon 
                    name="arrow-up-right"
                    ScorePercent={score}
                />
                <PercentInfoNumber>{score.toFixed(2)}%</PercentInfoNumber>
                <PercentInfoText>das refeições dentro da dieta</PercentInfoText>
            </PercentInfo>

            <Refeicoes>
                <Text style={{marginBottom: -24}}>Refeições</Text>
                <Button title='Nova refeição' icon='plus' type='DARK' onPress={handleNewMeal}/>
                <FlatList 
                    data={days} 
                    renderItem={({item}) => <DayMeals day={item} />}
                    showsVerticalScrollIndicator={false}
                />             
            </Refeicoes>
        </Container>
    )
}
