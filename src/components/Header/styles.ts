import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
`

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`

export const ProfilePicture = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    /* border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2}; */
`