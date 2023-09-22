import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";
import {
    FilterContainer,
    FilterLabel,
    FilterInput,
} from './Filter.styled';

export const Filter = () => {
    const value = useSelector(selectFilter); 
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <FilterContainer>
            <FilterLabel>
                Find contacts by name
            </FilterLabel>
            <FilterInput type="text" value={value} onChange={onChange} />
        </FilterContainer>
    );
};