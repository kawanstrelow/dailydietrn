import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";

type dentroDaDietaProps = {
    dentroDaDieta: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_7};
`

export const HeaderContainer = styled.View`
    width: 310px;

    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 40px;
`

export const HeaderTitle = styled.Text<dentroDaDietaProps>`
    font-size: 24px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme, dentroDaDieta}) => dentroDaDieta ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    line-height: 31.2px;
    text-align: center;
`

export const HeaderSubtitle = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.GRAY_1};
    line-height: 20.8px;
    text-align: center;
`

export const FeedbackImg = styled.Image`
    width: 224px;
    height: 288px;
    margin-bottom: 32px;
`


