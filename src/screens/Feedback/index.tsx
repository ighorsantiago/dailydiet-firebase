import { Container, TextBox, Title, Subtitle, Image, ButonContainer } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import inDiet from '@assets/inDiet.png';
import outDiet from '@assets/outDiet.png';
import { Button } from "@components/Button";

type Props = {
    isGoodFeedback: boolean;
}

export function Feedback() {

    const navigation = useNavigation();
    const route = useRoute();

    const { isGoodFeedback } = route.params as Props;

    function handleGoHome() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <TextBox>
                {
                    isGoodFeedback 
                        ? 
                        <>
                            <Title type={isGoodFeedback}>
                                Continue assim!
                            </Title>
                            <Subtitle>
                                Você continua dentro da dieta. Muito bem!
                            </Subtitle>
                        </>
                        :
                        <>
                            <Title type={isGoodFeedback}>
                                Que pena!
                            </Title>
                            <Subtitle>
                                Você saiu da dieta dessa vez, mas continue se esforçando e não desista!
                            </Subtitle>
                        </>
                }
            </TextBox>

            {
                isGoodFeedback
                    ? <Image source={inDiet} />
                    : <Image source={outDiet} />
            }

            <ButonContainer>
                <Button
                    icon={false}
                    title='Ir para a página principal'
                    onPress={handleGoHome}
                />
            </ButonContainer>
        </Container>
    );
}
