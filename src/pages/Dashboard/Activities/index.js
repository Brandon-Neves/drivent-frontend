import useTicket from '../../../hooks/api/useTicket';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export default function Activities() {
  const { ticket } = useTicket();

  if (!ticket) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de Atividades</StyledTypography>
        <ErrorTicket>
          <p>Você ainda não adquiriu um ticket! Volte para a página de inscrição!</p>
        </ErrorTicket>
      </>
    );
  }

  if (ticket.status === 'RESERVED') {
    return (
      <>
        <StyledTypography variant="h4">Escolha de Atividades</StyledTypography>
        <ErrorTicket>
          <p>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</p>
        </ErrorTicket>
      </>
    );
  }

  if (ticket.TicketType.isRemote) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de Atividades</StyledTypography>
        <ErrorTicket>
          <p>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</p>
        </ErrorTicket>
      </>
    );
  }

  return ''; //Retornar as atividades
}

const ErrorTicket = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: rgba(142, 142, 142, 1);
  width: 100%;
  height: calc(100% - 100px);

  p {
    max-width: 450px;
    text-align: center;
    line-height: 25px;
  }
`;

const StyledTypography = styled(Typography)`
  text-align: left;
  margin-bottom: 20px !important;
`;
