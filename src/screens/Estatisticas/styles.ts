import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons'

import styled from "styled-components/native";

export type InfoBoxStyleProps = 'GRAY' | 'GREEN' | 'RED';

type InfoBoxProps = {
    type: InfoBoxStyleProps;
}

type ScorePercentProps = {
    ScorePercent: number;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    position: relative;
`

export const PercentInfo = styled(TouchableOpacity)<ScorePercentProps>`

    min-height: 200px;
    max-height: 200px;
    padding: 2px 82px;
    background-color: ${({theme, ScorePercent}) => ScorePercent >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    margin-bottom: -32px;

    gap: 2px;

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

export const Icon = styled(Feather).attrs<ScorePercentProps>(({ theme, ScorePercent }) => ({
    size: 24,
    color: ScorePercent >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    top: 56px;
    left: 24px;
`

export const EstatisticasContainer = styled.View`
    width: 100%;
    flex: 1;
    padding: 32px 24px;
    align-items: center;
    gap: 12px;

    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`

export const EstatisticasContainerHeaderText= styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: 14px;
    line-height: 18.2px;
    text-align: center;

    margin-bottom: 11px;
`

export const EstatisticasBoxInfo = styled.View<InfoBoxProps>`
    width: 100%;
    gap: 8px;
    padding: 16px;

    background-color: ${({theme, type}) => type === 'GRAY' ? theme.COLORS.GRAY_6 : type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
`

export const EstatisticasBoxInfoNumber = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: 24px;
    line-height: 31.2px;
    text-align: center;
`

export const EstatisticasBoxInfoText = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_2};
    font-size: 14px;
    line-height: 18.2px;
    text-align: center;
`