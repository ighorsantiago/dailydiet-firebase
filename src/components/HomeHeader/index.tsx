import { Container, Logo, Photo } from './styles';

import logoImg from '@assets/logo.png';

export function HomeHeader() {

    return (
        <Container>
            <Logo source={logoImg} />
            <Photo source={{ uri: "https://github.com/ighorsantiago.png" }} />
        </Container>
    );
}
