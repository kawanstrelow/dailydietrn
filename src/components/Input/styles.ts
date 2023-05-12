import styled, {css} from "styled-components/native";
import { TextInput} from 'react-native'

export const Container = styled(TextInput)`
    flex: 1;
    width: 100%;
    min-height: 48px;
    
    ${({ theme }) => css`
        border: 1px solid ${theme.COLORS.GRAY_5};
        color: ${theme.COLORS.GRAY_1};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: 16px;
    `}
    
    border-radius: 6px;
    padding: 14px;
    
    margin-bottom: 4px;
`
