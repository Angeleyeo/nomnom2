import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../components/styles';

const Login = () =>{
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover"></PageLogo>
                <PageTitle>Flower Crib</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login