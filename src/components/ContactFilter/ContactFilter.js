import { useDispatch, useSelector } from "react-redux"
import { FilterInput, FilterLabel } from "./ContactFilter.styled"
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";


export const ContactFilter = () => {
 
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
      
    const changeFilter = evt => {    
      dispatch(setFilter(evt.target.value))
    };

    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput type="text" name="filter" value={filter}
            onChange={changeFilter}/>
        </FilterLabel>        
    );
};