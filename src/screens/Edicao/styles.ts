import { TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from '@expo/vector-icons'

import styled, { css } from "styled-components/native";

export type YesNoButtonStyleProps = 'GREEN' | 'RED';

type YesNoButtonProps = {
    type: YesNoButtonStyleProps;
}

type InsideDietProps = {
    isInsideDiet: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    position: relative;
`

export const Header = styled.View`

    min-height: 132px;
    max-height: 132px;
    padding: 2px 82px;
    background-color: ${({theme}) => theme.COLORS.GRAY_5};
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

export const FormContainer = styled.View`
    width: 100%;
    flex: 1;
    padding: 32px 24px;
    align-items: center;
    gap: 24px;

    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const FormView = styled.View`
    width: 100%;
    gap: 4px;
    height: 70px;
`

export const LabelText = styled.Text`

    text-align: left;
    
    font-size: 14px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    line-height: 18.2px;
    margin-bottom: 4px;
`

export const MultipleInput = styled(TextInput)`
    flex: 1;
    width: 100%;
    min-height: 120px;
    
    ${({ theme }) => css`
        border: 1px solid ${theme.COLORS.GRAY_5};
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: 16px;
    `}
    
    border-radius: 6px;
    padding: 14px;
    align-items: flex-start;
    justify-content: flex-start;
    
    margin-bottom: 4px;
`

export const YesButton = styled(TouchableOpacity)<InsideDietProps>`
    flex-direction: row;
    flex: 1;
    height: 50px;
    padding: 16px;
    gap: 8px;

    background-color: ${({theme, isInsideDiet}) => isInsideDiet === 'true' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_6};
    border-radius: 6px;
    border: 1px solid ${({theme, isInsideDiet}) => isInsideDiet === 'true' ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_6};
    
    align-items: center;
    justify-content: center;
`

export const NoButton = styled(TouchableOpacity)<InsideDietProps>`
    flex-direction: row;
    flex: 1;
    height: 50px;
    padding: 16px;
    gap: 8px;

    background-color: ${({theme, isInsideDiet}) => isInsideDiet === 'false' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6};
    border-radius: 6px;
    border: 1px solid ${({theme, isInsideDiet}) => isInsideDiet === 'false' ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_6};
    
    align-items: center;
    justify-content: center;
`

export const YesNoButtonIcon = styled(FontAwesome).attrs<YesNoButtonProps>(({ theme, type }) => ({
    size: 8,
    color: type === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``

export const YesNoButtonText = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-size: 14px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    line-height: 18.2px;
`