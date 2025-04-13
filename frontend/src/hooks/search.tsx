import { useState, ChangeEvent } from 'react'; // ChangeEvent 타입을 임포트합니다.
import { SearchWrap, SearchInput, SearchResult } from "./search.style";

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setTimeout(() => setIsFocused(false), 150);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const showResults = isFocused || inputValue.length > 0;

    return (
        <SearchWrap>
            <SearchInput
                type="search"
                name="search-input"
                placeholder="장소명을 입력해주세요."
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {showResults && (
                <SearchResult>
                    {/* 검색 결과 내용 */}
                    <p>'{inputValue}' 검색 결과</p>
                    {/* 예시: 검색 결과 목록 */}
                    <ul>
                        <li>결과 1</li>
                        <li>결과 2</li>
                    </ul>
                </SearchResult>
            )}
        </SearchWrap>
    )
}

export default Search;
