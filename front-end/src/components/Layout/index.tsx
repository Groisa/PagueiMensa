import React from "react";
import styled from "styled-components";
import { LateralBar } from "../lateralBar";

type Props = {
    children : React.ReactNode
    pageLayout: 'home' | 'list'
}

export const Layout:React.FC<Props> = ( { children, pageLayout} ) => {
    return (
        <StyledLayout>
            <LateralBar page={pageLayout} />
            <MainStyled>
                { children }
            </MainStyled>
        </StyledLayout>
    )
}
const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 80vw;
    color: #ffff;
`
const StyledLayout = styled.div`
    display: flex;
`