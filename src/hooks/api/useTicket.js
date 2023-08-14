import useToken from '../useToken';
import useAsync from '../useAsync';

import * as ticketsApi from '../../services/ticketsApi';

export default function useTicket() {
  const token = useToken();
  
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket
  } = useAsync(() => ticketsApi.getTicketById(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket
  };
}
