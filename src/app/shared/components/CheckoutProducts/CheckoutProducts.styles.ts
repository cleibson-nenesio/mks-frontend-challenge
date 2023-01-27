import styled from "styled-components";
import CloseButton from "../CloseButton/CloseButton";

export const CartProductList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    padding: 70px 47px;
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 10px;
    }


    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 5px;
    }


    ::-webkit-scrollbar-thumb {
        background: #C3C3C3;
        border-radius: 5px;
    }


    ::-webkit-scrollbar-thumb:hover {
        background: #333333;
        border-radius: 5px;
    }

    @media(max-width: 425px) {
        gap: 13px;
        padding: 40px;
    }
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: flex-start;
    padding: 30px 20px;
    background-color: #FFFFFF;
    color: #000000;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    width: 100%;
    position: relative;


    img {
        margin-right: 20px;
        max-width: 50px;
    }

    h3 {
        margin-right: 10px;
        font-weight: 400;
    }

    div {
        display: flex;
        align-items: center;

        p {
            font-weight: 700;
        }
    }

    span {
        font-weight: 700;
        font-size: 18px;
    }

    @media(max-width: 425px) {
        flex-direction: column;

        img {
            max-width: 80px;
        }

        h3 {
            margin-bottom: 30px;
        }

        span {
            padding: 5px 6px;
            background-color: #373737;
            color: #ffffff;
            border-radius: 5px;
        }
    }
`

export const ManageQuantity = styled.div`
    margin-right: 20px;
        display: flex;
        border: .3px solid #BFBFBF;
        border-radius: 10px;
        padding: 0 5px;
        position: relative;
        width: 85px;

        &::before {
            content: "Qtd:";
            position: absolute;
            top: -20px;
            left: 0;
            font-size: 12px;
        }
        
        p {
            padding: 8px;
            font-weight: 400;
            max-width: 30px;
        }

        button {
            border: none;
            padding: 8px;
            background-color: transparent;
            cursor: pointer;
        }
`

export const DeleteProduct = styled(CloseButton)`
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 12px;
    font-size: 14px;

    @media(max-width: 425px) {
        top: 10px;
        right: 10px;
        font-size: 26px;
    }
`