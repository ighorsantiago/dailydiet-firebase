import { useState, useCallback, useEffect } from "react";
import { SectionList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Container, Content, Text } from "./styles";

import { HomeHeader } from "@components/HomeHeader";
import { PercentageCard } from "@components/PercentageCard";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { Loading } from "@components/Loading";

import { MealSectionDTO } from '@storage/meals/MealStorageDTO'
import { datesGetAll } from "@storage/dates/datesGetAll";
import { mealGetByDate } from "@storage/meals/mealsGetByDate";
import { mealsStatistics } from "@storage/meals/mealsStatistics";

export function Home() {

    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);
    const [meals, setMeals] = useState<MealSectionDTO[]>([]);
    const [stats, setStats] = useState({
        percentage: 0,
        totalMeals: 0,
        inDiet: 0,
        outDiet: 0,
        bestSequence: 0
    });

    async function fetchMeals() {
        try {

            setIsLoading(true);

            const storedDates = await datesGetAll();
            const statistics = await mealsStatistics();

            setStats(statistics);
            
            let sectionMeals = [];

            for (let i = 0; i < storedDates.length; i++) {

                const meals = await mealGetByDate(storedDates[i]);

                sectionMeals.push({
                    title: storedDates[i],
                    data: meals
                });
            }

            setMeals(sectionMeals);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    function handleNavigate(screen: string, id?: string) {

        switch (screen) {
            case 'statistics':
                navigation.navigate('statistics');
                break;
            case 'meal':
                if (!!id) navigation.navigate('meal', { id });
                break;
            case 'register':
                navigation.navigate('register');
                break;
        }
    }

    useFocusEffect(
        useCallback(() => {
            fetchMeals();
        }, [])
    );

    return (
        <Container>
            <HomeHeader />

            <PercentageCard percentage={stats.percentage} onPress={() => handleNavigate('statistics')} />

            <Content>
                <Text>Refeições</Text>

                <Button
                    title='Nova refeição'
                    iconName='plus'
                    iconColor='white'
                    onPress={() => handleNavigate('register')}
                    // onPress={() => AsyncStorage.clear()}
                />
            </Content>

            {isLoading ? <Loading /> : (
                <SectionList style={{ marginTop: 32 }}
                    sections={meals}
                    keyExtractor={(item, index) => item.title + index}
                    renderItem={({ item }) => (
                        <MealCard
                            mealName={item.title}
                            hour={item.time}
                            status={item.isDiet ? 'PRIMARY' : 'SECONDARY'}
                            onPress={() => handleNavigate('meal', item.id)}
                        />
                    )}
                    renderSectionHeader={item => (
                        <Text>{item.section.title}</Text>
                    )}
                    ListEmptyComponent={() => (
                        <Text>
                            Você ainda não tem nenhuma refeição cadastrada.
                        </Text>
                    )}
                    contentContainerStyle={[
                        { paddingBottom: 100 },
                        meals.length === 0 && { flex: 1 },
                    ]}
                />
            )}
        </Container>
    );
}
