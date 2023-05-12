import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Criacao } from '@screens/Criacao'
import { Estatisticas } from '@screens/Estatisticas'
import { Feedback } from '@screens/Feedback'
import { Refeicao } from '@screens/Refeicao'
import { Edicao } from '@screens/Edicao'

const { Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>

            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name='estatisticas'
                component={Estatisticas}
            /> 
            
            <Screen
                name='criacao'
                component={Criacao}
            />
            
            <Screen
                name='edicao'
                component={Edicao}
            />
            
            <Screen
                name='refeicao'
                component={Refeicao}
            />

            <Screen
                name='feedback'
                component={Feedback}
            />

        </Navigator>
    )
}