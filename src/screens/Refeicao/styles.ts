import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from '@expo/vector-icons'

import styled from "styled-components/native";

type InsideDietProps = {
    type: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    position: relative;
    justify-content: center;
    align-items: center;
`

export const Header = styled(TouchableOpacity)<InsideDietProps>`

    min-height: 132px;
    max-height: 132px;
    width: 100%;
    padding: 2px 82px;
    background-color: ${({theme, type}) => type ==='true' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    margin-bottom: -28px;

    gap: 2px;

    justify-content: center;
    align-items: center;

`

export const HeaderText = styled.Text`
    font-size: 18px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const HeaderIcon = styled(Feather).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_2
}))`
    position: absolute;
    top: 56px;
    left: 24px;
`

export const BodyContainer = styled.View`
    width: 100%;
    flex: 1;
    padding: 32px 24px;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const MealInfoBox = styled.View`
    width: 100%;
    align-items: flex-start;
    gap: 8px;
`

export const MealTitle = styled.Text`
    font-size: 20px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_1};
`
export const MealDescription = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.GRAY_2};
`

export const DateTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_1};
`
export const DateDescription = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    color: ${({theme}) => theme.COLORS.GRAY_2};
    line-height: 20.8px;
`

export const YesNoButton = styled.View`
    flex-direction: row;
   
    width: 144px;
    height: 34px;

    padding: 8px 16px;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.GRAY_6};
    border-radius: 1000px;
    
    align-items: center;
    justify-content: center;
`

export const YesNoButtonIcon = styled(FontAwesome).attrs<InsideDietProps>(({ theme, type }) => ({
    size: 8,
    color: type === 'true' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``

export const YesNoButtonText = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-size: 14px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    line-height: 18.2px;
`

export const ButtonsGroup = styled.View`
    width: 100%;
    gap: 8px;
    position: absolute;
    bottom: 50px;
`

export const ModalCenteredView = styled.View`
    flex: 1;
    justify-content: center;
    background-color: (rgba(0,0,0,0.25));
    align-items: center;

`

export const ModalView = styled.View`
    width: 327px;
    height: 192px;
    align-items: center;
    justify-content: center;
    gap: 32px;

    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    background-color: ${({theme}) => theme.COLORS.WHITE};

`

export const ModalText = styled.Text`
    width: 279px;
    text-align: center;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: 18px;
    line-height: 23.4px;
    color: ${({theme}) => theme.COLORS.GRAY_2};

`

export const ModalButtonsGroup = styled.View`
    flex-direction: row;

    width: 279px;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

`

