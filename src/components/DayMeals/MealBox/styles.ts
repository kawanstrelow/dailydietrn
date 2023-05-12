import styled from "styled-components/native";
import { Feather, FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export type IconTypeStyleProps = 'CHECKED' | 'NO-CHECKED';

type IconProps = {
    type: IconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 52px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 14px 16px 14px 12px;

    border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
    border-radius: 6px;
`

export const InfoBox = styled.View`
    flex-direction: row;
`

export const TimeBorder = styled.View`
    border: 1.4px solid ${({theme}) => theme.COLORS.WHITE};
    border-right-color: ${({theme}) => theme.COLORS.GRAY_4};

`

export const Time = styled.Text`
    font-size: 12px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_1};
    padding-right: 12px;
`

export const Title = styled.Text`
    font-size: 16px;
    line-height: 20.8px;
    color: ${({theme}) => theme.COLORS.GRAY_2};
    padding-left: 12px;
`

export const Icon = styled(FontAwesome).attrs<IconProps>(({ color }) => ({
    size: 24,
    color: color
}))`
    position: absolute;
    top: 14px;
    right: 14px;
`