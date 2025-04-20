import styled from "styled-components";

export const SearchWrap = styled.article`

`

export const SearchInput = styled.input`
    width: 360px;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #7B7B7B;
    background: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%; /* 28.8px */
    padding-left: 60px;
`

export const SearchResult = styled.div`
    display: flex;
    margin-top: 20px;
    width: 360px;
    height: 428px;
    flex-direction: column;
    justify-content: flex-start;
    flex-shrink: 0;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
    align-items: flex-start;
    padding: 12px;
`