import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 28px 65px;
    background-color: #0F52BA;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: #FFFFFF;
        text-decoration: none;
    }

    span {
        font-size: 20px;
        font-weight: 300;
    }

    @media(max-width: 425px) {
        max-height: 48px;
        padding: 5px 20px;
    }
`