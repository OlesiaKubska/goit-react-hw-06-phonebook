import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "redux/filterSlice";
import {
    FilterContainer,
    FilterLabel,
    FilterInput,
} from './Filter.styled';

export const Filter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleChange = (e) => dispatch(setFilter(e.target.value));

    return (
        <FilterContainer>
            <FilterLabel>
                Find contacts by name
            </FilterLabel>
            <FilterInput type="text" value={filter || ''} onChange={handleChange} />
        </FilterContainer>
    );
};