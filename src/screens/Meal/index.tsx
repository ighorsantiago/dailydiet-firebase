import { useState, useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";

import { useAuth } from "../../hooks/useAuth";

import {
    Container,
    Title,
    Content,
    Info,
    MealInfo,
    MealTitle,
    MealSubitle,
    DateInfo,
    DateTitle,
    DateSubitle,
    BackButton,
} from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { DietTag } from "@components/DietTag";

import { MealDTO } from "../../dtos/MealDTO";
import { getMeal, mealRemoveById } from "@storage/storageMeal";
import { removeEmptyDatesFB } from "@storage/storageDate";

type RouteParams = {
    id: string;
};

export function Meal() {

    const { user } = useAuth();

    const [meal, setMeal] = useState<MealDTO>();

    const navigation = useNavigation();
    const { params } = useRoute();

    const { id } = params as RouteParams;

    function handleGoBack() {
        navigation.navigate("home");
    }

    function handleMealEdit() {
        if(!!meal) {
            navigation.navigate("edit", { mealToEdit: meal });
        }
    }

    async function handleMealRemove() {
        Alert.alert("Remover", "Deseja remover a refeição?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: mealRemove },
        ]);
    }

    async function fetchMeal() {
        setMeal(await getMeal(id, user.email));
    }

    async function mealRemove() {
        // await mealRemoveById(id);
        await mealRemoveById(id, user.email);
        await removeEmptyDatesFB(meal!.date, user.email);

        handleGoBack();
    }

    useFocusEffect(
        useCallback(() => {
            fetchMeal();
        }, [])
    );

    return (
        <Container>

            <Header title='Refeição' />

            <Content>
                <Info>
                    <MealInfo>
                        <MealTitle>{meal?.title}</MealTitle>
                        <MealSubitle>{meal?.description}</MealSubitle>
                    </MealInfo>
                    <DateInfo>
                        <DateTitle>Data e hora</DateTitle>
                        <DateSubitle>{meal?.date} às {meal?.time}</DateSubitle>
                    </DateInfo>

                    {
                        meal?.isDiet
                            ? <DietTag title='dentro da dieta' />
                            : <DietTag type='SECONDARY' title='fora da dieta' />
                    }
                </Info>

                <Button
                    title='Editar refeição'
                    iconName='edit'
                    iconColor='white'
                    onPress={handleMealEdit}
                />
                <Button
                    type='SECONDARY'
                    title='Excluir refeição'
                    iconName='trash-2'
                    iconColor='black'
                    onPress={handleMealRemove}
                />
            </Content>
        </Container>
    );
}
