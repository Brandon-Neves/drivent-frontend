import { createContext, useState } from 'react';

const TicketContext = createContext();

export default TicketContext;

export function TicketProvider({ children }) {  
  const [ticketType, setTicketType] = useState();
  const [ticket, setTicket] = useState();
  
  return (
    <TicketContext.Provider value={{ ticketType, setTicketType, ticket, setTicket }}>
      {children}
    </TicketContext.Provider>
  );
}
