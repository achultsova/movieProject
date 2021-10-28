import React, { FC } from 'react';
import './search.scss';

const Search: FC = () => (
    <div className = "head_search">
        <form name="form" className = "form_search">
            <input
                type="text"
                name="search"
                className="search_input"
                placeholder="Поиск"
            />
        </form>
    </div>
);
export default Search;
