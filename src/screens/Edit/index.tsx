import { useCallback, useEffect, useState } from "react";
import { Container, Header, Title, Content, Form, Box, Label, BackButton } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { DietButton } from "@components/DietButton";
import { Input } from "@components/Input";

import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { mealUpdate } from "@storage/meals/mealUpdate";
import { dateCreate } from "@storage/dates/dateCreate";

type RouteParams = {
    mealToEdit: MealStorageDTO;
};

export function Edit() {

    const navigation = useNavigation();
    const route = useRoute();

    const { mealToEdit } = route.params as RouteParams;
    
    const [meal, setMeal] = useState<MealStorageDTO>({} as MealStorageDTO);

    function handleGoBack() {
        navigation.navigate('home');
    }

    async function handleSubmit() {

        try {
            
            await mealUpdate(meal);
            await dateCreate(meal.date);

            navigation.navigate("feedback", { isGoodFeedback: meal.isDiet });
        
        } catch (error) {
            console.log(error);
        }
    }

    function handleSelectDietButton() {
        setMeal({...meal, isDiet: !meal.isDiet});
    }

    useFocusEffect(
        useCallback(() => {
            setMeal(mealToEdit);
        }, [])
    );

    return (
        <Container>
            <Header>
                <BackButton onPress={handleGoBack}>
                    <Feather name='arrow-left' size={24} color='#333638' />
                </BackButton>
                <Title>Nova refeição</Title>
            </Header>

            <Content>
                <Form>
                    <Input
                        label='Nome'
                        value={meal.title}
                        onChangeText={(text) => setMeal({ ...meal, title: text })}
                    />
                    <Input
                        label='Descrição'
                        inputHeight={120}
                        value={meal.description}
                        multiline
                        onChangeText={(text) => setMeal({ ...meal, description: text })}
                    />
                    <Box>
                        <Input
                            label='Data'
                            value={meal.date}
                            onChangeText={(text) => setMeal({ ...meal, date: text })}
                        />
                        <Input
                            label='Hora'
                            value={meal.time}
                            onChangeText={(text) => setMeal({ ...meal, time: text })}
                        />
                    </Box>

                    <Label>Está dentro da dieta?</Label>

                    <Box>
                        <DietButton isSelected={meal.isDiet} title="Sim" onPress={handleSelectDietButton} />
                        <DietButton type="SECONDARY" isSelected={!meal.isDiet} title="Não" onPress={handleSelectDietButton} />
                    </Box>
                </Form>

                <Button
                    title='Cadastrar refeição'
                    icon={false}
                    onPress={handleSubmit}
                />
            </Content>
        </Container>
    );
}
