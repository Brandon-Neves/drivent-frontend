<<<<<<< HEAD
import ResumeAndPayment from '../../../components/ResumeAndPayment';
export default function Payment() {
  return (
    <ResumeAndPayment />
  );
};
=======
import { useContext, useEffect } from 'react';
import TicketsAndPayment from '../../../components/TicketsAndPayment/index';
import useToken from '../../../hooks/useToken';
import TicketContext from '../../../contexts/ticketsContext';
import { getTicketType } from '../../../services/ticketsApi';
import { toast } from 'react-toastify';

export default function Payment() {
  const token = useToken();
  const { setTicketType } = useContext(TicketContext);

  useEffect(async() => {
    try {
      const ticketTypesFromDB = await getTicketType(token);
      setTicketType(ticketTypesFromDB);
    } catch (error) {
      console.log(error);
      toast('Ocorreu um erro inesperado. Tente novamente mais tarde');
    }
  }, []);
  return (
    <TicketsAndPayment/>
  );
}
>>>>>>> cd310c19823248513a4b04732de7ee51d62d55f5
