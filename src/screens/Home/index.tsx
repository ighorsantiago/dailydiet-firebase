import { useState, useCallback } from "react";
import { SectionList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { useAuth } from "../../hooks/useAuth";

import { Container, Content, Text } from "./styles";

import { HomeHeader } from "@components/HomeHeader";
import { PercentageCard } from "@components/PercentageCard";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { Loading } from "@components/Loading";

import { MealSectionDTO } from "src/dtos/MealDTO";

import { getMealsByDate, mealsGetAllFB, mealsStatistics } from "@storage/storageMeal";
import { getAllDatesFB } from "@storage/storageDate";
import { storageUserRemove } from "@storage/storageUser";


export function Home() {

    const { user } = useAuth();
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

            // const storedDates = await getAllDatesFB(user.email);
            const storedDates = user.dates;
            // console.log("StoredDates:", storedDates);
            const statistics = await mealsStatistics(user.email);
            // console.log("Stats:", statistics);

            setStats(statistics);
            
            let sectionMeals = [];

            for (let i = 0; i < storedDates.length; i++) {

                const meals = await getMealsByDate(storedDates[i], user.email);

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

        if(id) { console.log(id) }
        
        switch (screen) {
            case 'statistics':
                navigation.navigate('statistics');
                break;
            case 'meal':
                if (id) { navigation.navigate('meal', { id }) }
                break;
            case 'register':
                navigation.navigate('register');
                break;
        }
        // console.log(user)
    }

    function handleSignOut() {
        storageUserRemove();
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
                    onLongPress={handleSignOut}
                />
            </Content>

            {isLoading ? <Loading /> : (
                <SectionList style={{ marginTop: 32 }}
                    sections={meals}
                    keyExtractor={(item, index) => item.title + index}
                    stickySectionHeadersEnabled={false}
                    renderItem={({ item }) => (
                        <MealCard
                            mealName={item.title}
                            hour={item.time}
                            status={item.isDiet ? 'PRIMARY' : 'SECONDARY'}
                            onPress={() => handleNavigate('meal', item.id)}
                        />
                    )}
                    renderSectionHeader={item => (
                    // renderSectionHeader={({title}) => (
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
