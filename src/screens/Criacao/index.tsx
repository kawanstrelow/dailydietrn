import { useRef, useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';	

import { Container, Header, HeaderText, HeaderIcon, FormContainer, LabelText, YesNoButtonIcon, YesNoButtonText, FormView, YesButton, NoButton } from './styles';

import { Input } from '@components/Input';
import { MultipleInput } from '@components/MultipleInput';
import { Button } from '@components/Button';

import { mealCreate } from '@storage/meals/mealCreate';
import { MealStorageDTO } from '@storage/meals/MealStorageDTO';

export function Criacao() {

    let allowChangeText = true;
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [insideDiet, setInsideDiet] = useState('')
    
    const newMealDescriptionInputRef = useRef<TextInput>(null)
    const newMealDateInputRef = useRef<TextInput>(null)
    const newMealTimeInputRef = useRef<TextInput>(null)

    function handleName(event: any) {
        const newName = event.nativeEvent.text
        setName(newName)
    }

    function handleDescription(event: any) {
        const newDescription = event.nativeEvent.text
        setDescription(newDescription)
    }

    function handleDate(event: any) {

        let newDate = event ?? event.nativeEvent.text

        // Remove qualquer caractere que não seja número
        newDate = newDate.replace(/\D/g, "");

        // Insere a barra entre os valores de dia, mês e ano
        newDate = newDate.replace(/(\d{2})(\d)/, "$1/$2");
        newDate = newDate.replace(/(\d{2})(\d)/, "$1/$2");

        // Retorna a data formatada
        setDate(newDate)

    }

    function handleTime(event: any) {
        
        let newTime = event ?? event.nativeEvent.text

        // Remove qualquer caractere que não seja número
        newTime = newTime.replace(/\D/g, "");

        // Insere os dois pontos entre a hora e os minutos
        newTime = newTime.replace(/(\d{2})(\d)/, "$1:$2");

        // Retorna o time formatado
        setTime(newTime)
       
    }

    function handleInsideDiet() {
        newMealDescriptionInputRef.current?.blur()
        newMealDateInputRef.current?.blur()
        newMealTimeInputRef.current?.blur()
        setInsideDiet('true')
    }

    function handleOutsideDiet() {
        newMealDescriptionInputRef.current?.blur()
        newMealDateInputRef.current?.blur()
        newMealTimeInputRef.current?.blur()
        setInsideDiet('false')
    }

    async function handleNewMeal() {

        if(name.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Digite o nome da refeição para adicionar.')
        }

        if(description.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Digite a descrição da refeição para adicionar.')
        }

        if(insideDiet.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Selecione uma das opções se está dentro ou fora da sua dieta.')
        }

        const newMeal: MealStorageDTO = {
            id: uuidv4(),
            name,
            description,
            date,
            time,
            insideDiet
        }

        try {
            await mealCreate(newMeal)
            navigation.navigate("feedback", { insideDiet })
        } catch (error) {
            console.log(error)
        } 
    }

    return(
        <Container>
            <Header>
                <HeaderIcon 
                        name="arrow-left"
                        onPress={() => navigation.navigate('home', {id: uuidv4()})}
                />
                <HeaderText>Nova refeição</HeaderText>
            </Header>

            <FormContainer>

                <FormView>
                    <LabelText>Nome</LabelText>
                    <Input onChange={handleName} returnKeyType='done'/>
                </FormView>
                

                <FormView style={{minHeight: 142}}>
                    <LabelText>Descrição</LabelText>
                    <MultipleInput 
                        multiline={true}
                        numberOfLines={4}
                        onChange={handleDescription}
                        inputRef={newMealDescriptionInputRef}
                        returnKeyType='done'/>
                </FormView>

                <FormView style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4}}>
                    <View style={{flex: 1, marginRight: 8, alignItems: 'flex-start'}}>
                        <LabelText>Data</LabelText>
                        <Input 
                            value={date}
                            maxLength={10}
                            keyboardType='number-pad'
                            onChangeText={handleDate}
                            inputRef={newMealDateInputRef}
                            returnKeyType='done'
                        />
                    </View>
                    
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <LabelText>Hora</LabelText>
                        <Input 
                            value={time}
                            maxLength={5}
                            keyboardType='number-pad'
                            onChangeText={handleTime}
                            inputRef={newMealTimeInputRef}
                            returnKeyType='done'
                        />
                    </View>
                </FormView>

                <FormView>
                    <LabelText>Está dentro da dieta?</LabelText>

                    <FormView style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <YesButton isInsideDiet={insideDiet} style={{marginRight: 8}} onPress={handleInsideDiet}>
                            <YesNoButtonIcon name="circle" type="GREEN"/>
                            <YesNoButtonText>Sim</YesNoButtonText>
                        </YesButton>
                        <NoButton isInsideDiet={insideDiet} onPress={handleOutsideDiet} >
                            <YesNoButtonIcon name="circle" type="RED"/>
                            <YesNoButtonText>Não</YesNoButtonText>
                        </NoButton>
                    </FormView>              
                </FormView>

                <Button 
                    title="Cadastrar refeição"
                    type="DARK"
                    style={{position: 'absolute', bottom: 50}}
                    onPress={handleNewMeal}
                />

            </FormContainer>
        </Container>
    )
}
