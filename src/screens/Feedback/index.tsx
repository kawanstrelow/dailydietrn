import { Text } from 'react-native';
import { Container, HeaderTitle, HeaderContainer, HeaderSubtitle, FeedbackImg } from './styles';
import { useTheme } from 'styled-components/native';

import PositiveFeedbackIllustration from "@assets/positiveillustration.png";
import NegativeFeedbackIllustration from "@assets/negativeillustration.png";

import { v4 as uuidv4 } from 'uuid';	


import { Button } from '@components/Button';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

type RouteParams = {
    insideDiet: string
}

export function Feedback() {
    
    const route = useRoute()
    const theme = useTheme();
    const navigation = useNavigation()

    const { insideDiet } = route.params as RouteParams

    const [dentroDaDieta, setDentroDaDieta] = useState(false);

    useEffect(() => {
        handleInsideDiet()
    }, [])

    function handleInsideDiet() {
        if (insideDiet === 'true') {
            setDentroDaDieta(true)
        } else {
            setDentroDaDieta(false)
        }
    }

    const Feedback = {
        title: dentroDaDieta ? 'Continue assim!' : 'Que pena!',
        subtitle1: dentroDaDieta ? 'Você continua' : 'Você',
        subtitlestrong: dentroDaDieta ? ' dentro da dieta. ' : ' saiu da dieta ',
        subtitle2: dentroDaDieta ? 'Muito bem!' : 'dessa vez, mas continue se esforçando e não desista!',
        image: dentroDaDieta ? PositiveFeedbackIllustration : NegativeFeedbackIllustration
    }

    return(
        <Container>
            <HeaderContainer>
                <HeaderTitle dentroDaDieta={dentroDaDieta}>{Feedback.title}</HeaderTitle>
                <HeaderSubtitle>
                    {Feedback.subtitle1}
                    <Text style={{fontFamily: theme.FONT_FAMILY.BOLD}}>{Feedback.subtitlestrong}</Text>
                    {Feedback.subtitle2}
                </HeaderSubtitle>
            </HeaderContainer>
            <FeedbackImg source={Feedback.image} />
            <Button 
                title='Ir para a página inicial'
                type='DARK'
                style={{width: 190}}
                onPress={() => navigation.navigate('home')}
            />
        </Container>
    )
}