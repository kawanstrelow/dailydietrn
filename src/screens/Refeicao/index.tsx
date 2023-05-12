import { Alert, Modal, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Header, HeaderText, HeaderIcon, BodyContainer, ButtonsGroup, MealTitle, MealDescription, DateTitle, DateDescription, YesNoButton, YesNoButtonIcon, YesNoButtonText, MealInfoBox, ModalCenteredView, ModalView, ModalText, ModalButtonsGroup } from './styles';

import { Button } from '@components/Button';
import { MealStorageDTO } from '@storage/meals/MealStorageDTO';
import { useState } from 'react';
import { mealDelete } from '@storage/meals/mealDelete';


type RouteParams = {
    data: MealStorageDTO
}


export function Refeicao() {

    const route = useRoute()
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);


    const { data } = route.params as RouteParams
    const { id, name, description, date, time, insideDiet } = data

    const insideDietInfo = insideDiet === 'true' ? 'dentro da dieta' : 'fora da dieta'

    function handleEditMeal() {
        navigation.navigate('edicao', { data })
    }

    async function handleDeleteMeal() {
        
        try {
            await mealDelete(id)
            navigation.navigate('home')
        } catch (error) {
            console.log(error)
        } 
    }

    return(
        <Container>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                        <ModalCenteredView>
                            <ModalView>
                                <ModalText>Deseja realmente excluir o registro da refeição?</ModalText>
                                <ModalButtonsGroup>
                                    <Button 
                                        type="LIGHT"
                                        title="Cancelar"
                                        onPress={() => setModalVisible(!modalVisible)}
                                    />
                                    <Button 
                                        title="Sim, exluir"
                                        type="DARK"
                                        onPress={handleDeleteMeal}
                                    />
                                </ModalButtonsGroup>
                            </ModalView>
                        </ModalCenteredView>
                    </Modal>


            <Header
                type={insideDiet}
                onPress={() => navigation.navigate('home')}
            >
                <HeaderIcon
                    name="arrow-left"
                />
                <HeaderText>Refeição</HeaderText>
            </Header>

            <BodyContainer>

                <MealInfoBox>
                    <MealTitle>{name}</MealTitle>
                    <MealDescription>{description}</MealDescription>
                    
                    <DateTitle>Data e hora</DateTitle>
                    <DateDescription>{`${date} às ${time.slice(0,5)}`}</DateDescription>

                    <YesNoButton>
                        <YesNoButtonIcon name='circle' type={insideDiet}/>
                        <YesNoButtonText>{insideDietInfo}</YesNoButtonText>
                    </YesNoButton>
                    
                </MealInfoBox>

                <ButtonsGroup>

                        <Button 
                            icon='edit'
                            title="Editar refeição"
                            type="DARK"
                            onPress={handleEditMeal}
                        />

                        <Button 
                            icon='trash'
                            title="Excluir refeição"
                            type="LIGHT"
                            onPress={() => setModalVisible(true)}
                        />

                    </ButtonsGroup> 

            </BodyContainer>
        </Container>
    )
}
