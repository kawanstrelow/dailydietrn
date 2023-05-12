import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons'

import styled from "styled-components/native";

type ScorePercentProps = {
    ScorePercent: number;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 24px;
    position: relative;
`

export const PercentInfo = styled(TouchableOpacity)<ScorePercentProps>`

    min-height: 102px;
    max-height: 102px;
    padding: 20px 16px;
    gap: 2px;
    margin-bottom: 40px;
    
    background-color: ${({theme, ScorePercent}) => ScorePercent >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    
    border-radius: 8px;

    justify-content: center;
    align-items: center;

`

export const PercentInfoNumber = styled.Text`
    font-size: 32px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_1};
`

export const PercentInfoText = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_2};
`

export const Icon = styled(Feather).attrs<ScorePercentProps>(({ theme, ScorePercent}) => ({
    size: 24,
    // color: ${({theme, ScorePercent}) => ScorePercent >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    color: ScorePercent >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    top: 8px;
    right: 8px;
`

export const Refeicoes = styled.View`
    flex: 1;
    gap: 32px;
`

export const RefeicoesHeader = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-size: 16px;
`