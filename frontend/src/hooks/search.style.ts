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

    ul{
        display: flex;
        flex-direction: column;
        gap: 16px;

        li{
            display: flex;
            width: 336px;
            height: 54px;
            padding: 8px 0px;
            align-items: center;
            justify-content: space-between;

            .resultArea{
                display: flex;
                align-items: center;
                gap: 10px;

                .nameArea{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .placeName{
                        color: #1E2A3C;
                        font-family: Inter;
                        font-size: 14pt;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                    }

                    .address{
                        color: #BCC2CC;
                        font-family: Inter;
                        font-size: 12pt;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;

                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        margin: 0;
                    }
                }
            }

            img{
                width: 52px;
                height: 52px;
            }

            svg{
                color: #777777;
            }
        }
    }
`