import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 32px;
`

export const DayText = styled.Text`
    font-size: 18px;
    color: ${({theme}) => theme.COLORS.GRAY_1};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    line-height: 23.4px;

    margin-bottom: 8px;
`

export const MealsBox = styled.View`
    width: 100%;
    gap: 8px;
`