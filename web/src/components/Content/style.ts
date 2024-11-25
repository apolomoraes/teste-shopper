import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5rem;
    background: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 20px 20px 0px 0px;
    min-height: 30rem;

    padding: 4rem 6.4rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
` 