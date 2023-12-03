import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactForm } from "./Form/Form";
import { ContactList } from "./Contacts/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { MainContainer } from "./MainContainer.styled";
import { selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";


export const App = () =>{  
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && !error && 
      <b>Request in progress...</b>
      }
      <ContactList />      
    </MainContainer>
  );
};