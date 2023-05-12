import { TouchableOpacityProps } from 'react-native'
import { ButtonIconTypeStyleProps, Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
    type: ButtonIconTypeStyleProps;
    title: string;
    icon?: string
}

export function Button({type = 'DARK', title, icon = '', ...rest}: Props) {
    return (
        <Container type={type} {...rest}>
            {icon && <Icon name={icon} type={type} />}
            <Title type={type}>{title}</Title>
        </Container>
    )
}