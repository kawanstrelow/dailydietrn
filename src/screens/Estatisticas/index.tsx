import { Alert, Text, View } from 'react-native';
import { Container, PercentInfo, PercentInfoText, PercentInfoNumber, Icon, EstatisticasContainer, EstatisticasBoxInfo, EstatisticasBoxInfoNumber, EstatisticasBoxInfoText, EstatisticasContainerHeaderText } from './styles';

import { useCallback, useState } from 'react';
import { MealStorageDTO } from '@storage/meals/MealStorageDTO';
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';	


export function Estatisticas() {

    const [score, setScore] = useState(50)
    const [meals, setMeals] = useState<MealStorageDTO[]>([])
    const [sequenceOfMealsInsideDiet, setSequenceOfMealsInsideDiet] = useState(0)
    const navigation = useNavigation()

    async function fetchMeals() {
        try {
          const data: MealStorageDTO[] = await mealsGetAll()
          setMeals(data)
          calculateScore(data)
          countSequenceOfMealsInsideDiet(data)
          
        } catch (error) {
          Alert.alert('Refeições', 'Não foi possível carregar as refeições.')
        } 
    }

    function calculateScore(data: MealStorageDTO[]) {
        const totalMeals = data.length
        const totalMealsInDiet = data.filter(meal => meal.insideDiet === 'true').length
        const score = (totalMealsInDiet / totalMeals) * 100
        setScore(score)
    }

    function countSequenceOfMealsInsideDiet(data: MealStorageDTO[]) {
        let count = 0
        let consecutive = 0

        for (let i = 0; i < data.length; i++) {
            if(data[i].insideDiet === 'true') {
                consecutive++
            } else {
                consecutive = 0
            }

            if(consecutive > count) {
                count = consecutive
            }
        }

        setSequenceOfMealsInsideDiet(count)
    }

    function handleNavigateToHome() {
        navigation.navigate('home')
    }

    useFocusEffect(useCallback(() => {
        fetchMeals()
    }, []));

    return(
        <Container>
            <PercentInfo 
                ScorePercent={score}
                onPress={handleNavigateToHome}
            >
                <Icon 
                    name="arrow-left"
                    ScorePercent={score}
                />
                <PercentInfoNumber>{score.toFixed(2)}%</PercentInfoNumber>
                <PercentInfoText>das refeições dentro da dieta</PercentInfoText>
            </PercentInfo>

            <EstatisticasContainer>
                <EstatisticasContainerHeaderText>Estatísticas gerais</EstatisticasContainerHeaderText>
                <EstatisticasBoxInfo type='GRAY'>
                    <EstatisticasBoxInfoNumber>{sequenceOfMealsInsideDiet}</EstatisticasBoxInfoNumber>
                    <EstatisticasBoxInfoText>melhor sequencia de pratos dentro da dieta</EstatisticasBoxInfoText>
                </EstatisticasBoxInfo>
                <EstatisticasBoxInfo type='GRAY'>
                    <EstatisticasBoxInfoNumber>
                            {meals.length}
                    </EstatisticasBoxInfoNumber>
                    <EstatisticasBoxInfoText>refeições registradas</EstatisticasBoxInfoText>
                </EstatisticasBoxInfo>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <EstatisticasBoxInfo type='GREEN' style={{width: '48%'}}>
                        <EstatisticasBoxInfoNumber>
                            {meals.filter(meal => meal.insideDiet === 'true').length}
                        </EstatisticasBoxInfoNumber>
                        <EstatisticasBoxInfoText>refeições dentro da dieta</EstatisticasBoxInfoText>
                    </EstatisticasBoxInfo>
                    <EstatisticasBoxInfo type='RED' style={{width: '48%'}}>
                    <EstatisticasBoxInfoNumber>
                            {meals.filter(meal => meal.insideDiet !== 'true').length}
                    </EstatisticasBoxInfoNumber>
                    <EstatisticasBoxInfoText>refeições fora da dieta</EstatisticasBoxInfoText>
                </EstatisticasBoxInfo>
                </View>
            </EstatisticasContainer>
        </Container>
    )
}
