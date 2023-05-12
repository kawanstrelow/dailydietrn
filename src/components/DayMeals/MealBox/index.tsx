import { View } from "react-native";
import { Container, Icon, InfoBox, Time, TimeBorder, Title } from "./styles";
import theme from "src/theme";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

interface MealBoxProps {
    data: MealStorageDTO
}

export default function MealBox({ data }: MealBoxProps) {

    const { id, name, description, date, time, insideDiet } = data

    const iconColor = insideDiet === 'true' ? `#CBE4B4` : '#F3BABD';

    const navigation = useNavigation()
    const isFocused = useIsFocused()


    function handleAccessMeal() {
        navigation.navigate('refeicao', { data })
    }

    

    return(
        <Container onPress={handleAccessMeal}>
            <InfoBox>
                <TimeBorder>
                    <Time>{time.slice(0,5)}</Time>
                </TimeBorder>
                <Title>{name}</Title>
            </InfoBox>
            
            <Icon name="circle" color={iconColor}/>
        </Container>
    )
}