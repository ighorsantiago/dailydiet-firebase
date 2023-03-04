import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Container, Content, CountBox, Data, Title } from "./styles";

import { Loading } from "@components/Loading";
import { StatsHeader } from "@components/StatsHeader";
import { DataCard } from "@components/DataCard";

import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { mealsGetAll } from "@storage/meals/mealsGetAll";
import { mealsStatistics } from "@storage/meals/mealsStatistics";

export function Statistics() {

    const [isLoading, setIsLoading] = useState(false);
    const [meals, setMeals] = useState<MealStorageDTO[]>([]);
    const [stats, setStats] = useState({
        percentage: 0,
        totalMeals: 0,
        inDiet: 0,
        outDiet: 0,
        bestSequence: 0
    });

    async function fetchMealsStats() {
        try {

            setIsLoading(true);

            const statistics = await mealsStatistics();

            setStats(statistics);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    // useFocusEffect(
    //     useCallback(() => {
    //         fetchMeals();
    //     }, [])
    // );

    useEffect(() => {

        fetchMealsStats();
    }, []);

    return (
        <Container>
            {
                !isLoading
                    ?
                    <>
                        <StatsHeader percentage={stats.percentage} type='PRIMARY' />

                        <Content>
                            <Title>Estatísticas gerais</Title>

                            <Data>
                                <DataCard number={stats.bestSequence} text='melhor sequência de pratos dentro da dieta' />
                                <DataCard number={stats.totalMeals} text='refeições registradas' />

                                <CountBox>
                                    <DataCard number={stats.inDiet} text='refeições dentro da dieta' type='PRIMARY' />
                                    <DataCard number={stats.outDiet} text='refeições fora da dieta' type='SECONDARY' />
                                </CountBox>
                            </Data>
                        </Content>
                    </>
                    : <Loading />
            }
        </Container>
    );
}
