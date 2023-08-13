import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
`;

export const ButtonFeedBack = styled.button`
    border-radius: 5px;
    padding: 5px 10px;
    background: transparent;
    color: white;
    font-size: 20px;
    text-transform: capitalize;

    :hover {
        cursor: pointer;
        background: #5fa9d7;
    }
`;