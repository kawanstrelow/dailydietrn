import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { Feather } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'LIGHT' | 'DARK';

type ContainerProps = {
    type: ButtonIconTypeStyleProps;
}

type IconProps = {
    type: ButtonIconTypeStyleProps;
    size: number
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    flex: 1;
    flex-direction: row;
    min-height: 50px;
    max-height: 50px;
    width: 100%;

    background-color: ${({theme, type}) => type === 'LIGHT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    border: 1px solid ${({theme, type}) => type === 'LIGHT' ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_1};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 16px 24px;
`

export const Title = styled.Text<ContainerProps>`
    font-size: 14px;
    color: ${({theme, type}) => type === 'LIGHT' ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const Icon = styled(Feather).attrs<IconProps>(({ theme, type }) => ({
    size: 18,
    color: type === 'LIGHT' ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE
}))``