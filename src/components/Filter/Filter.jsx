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
    const filter = useSelector(selectFilter);
    // console.log(filter);
    const dispatch = useDispatch();

    return (
        <FilterContainer>
            <FilterLabel>
                Find contacts by name
            </FilterLabel>
            <FilterInput type="text" value={filter} onChange={(e)=> dispatch(setFilter(e.target.value))} />
        </FilterContainer>
    );
};