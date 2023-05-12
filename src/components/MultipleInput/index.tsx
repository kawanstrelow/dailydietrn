import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native'

import { Container } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function MultipleInput({ inputRef, ...rest }: Props) {

    const {COLORS} = useTheme()

    return (
    <Container 
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_5}
        {...rest} 
    />
  );
}