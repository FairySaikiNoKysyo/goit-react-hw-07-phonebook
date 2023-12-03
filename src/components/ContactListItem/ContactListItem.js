import { useDispatch, useSelector } from "react-redux";
import { DeleteBtn, ListItem } from "./ContactListItem.styled";
import { selectFilteredContacts } from "redux/selectors";
import { deleteContact } from "redux/operations";

export const ContactListItem = () => {
  
    const dispatch = useDispatch();       
    const items = useSelector(selectFilteredContacts);
  
    return(
      <>
        {items.map(item =>
          <ListItem key={item.id}>
              <span>{item.name}: {item.phone}</span>             
              <DeleteBtn type="button" onClick={() => dispatch(deleteContact(item.id))}>
                  Delete
              </DeleteBtn>
          </ListItem>
        ) }  
      </>      
    );
};