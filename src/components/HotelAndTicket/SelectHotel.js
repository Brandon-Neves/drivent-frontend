import { useState, useContext } from 'react';
import styled from 'styled-components';
import { createTicket } from '../../../src/services/ticketsApi';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';
import TicketContext from '../../contexts/ticketsContext';

export default function SelectHotel() {
  const [withHotel, setWithHotel] = useState(false);
  const [withoutHotel, setWithoutHotel] = useState(false);
  const [renderPrice, setRenderPrice] = useState(false);
  const [price, setPrice] = useState(0);
  const token = useToken();
  const { ticketType, setTicket } = useContext(TicketContext);
  const priceInPersonTicketWithHotel = ticketType && 
  ticketType.find((ticket) => (!ticket.isRemote && ticket.includesHotel)).price;
  const priceInPersonTicketWithoutHotel = ticketType && 
  ticketType.find((ticket) => (!ticket.isRemote && !ticket.includesHotel)).price;

  async function reserveInPersonTicket() {
    let ticket = {};
    if(withHotel && ticketType) {
      ticket = ticketType.find((t) => (!t.isRemote && t.includesHotel));
    } else if (withoutHotel && ticketType) {
      ticket = ticketType.find((t) => (!t.isRemote && !t.includesHotel));
    }
    if(!ticket) {
      toast('Não foi encontrado ingresso para esta opção');
      return;
    }
    const body = { ticketTypeId: ticket.id };
    try{
      const ticketFromDB = await createTicket(token, body);
      setTicket(ticketFromDB);
      toast('Reserva efetuada com sucesso!');
    } catch (error) {
      console.log(error);
      toast('Ocorreu um erro inesperado. Tente novamente mais tarde');
    } 
  }

  function withHotelTicket() {
    if (withHotel) {
      setWithHotel(false);
      setRenderPrice(false);
    } else {
      setWithHotel(true);
      setWithoutHotel(false);
      setRenderPrice(true);
    }
    setPrice(600);
  }
  function withoutHotelTicket() {
    if (withoutHotel) {
      setWithoutHotel(false);
      setRenderPrice(false);
    } else {
      setWithoutHotel(true);
      setWithHotel(false);
      setRenderPrice(true);
    }
    setPrice(250);
  }
  return (
    <Container>
      <h1>Ótimo! Agora escolha sua modalidade de hospedagem</h1>
      <div>
        <WithoutHotel onClick={withoutHotelTicket} withoutHotel={withoutHotel}>
          <h2>Sem Hotel</h2>
          <p>+ 0</p>
        </WithoutHotel>
        <WithHotel onClick={withHotelTicket} withHotel={withHotel}>
          <h2>Com Hotel</h2>
          <p>+ {priceInPersonTicketWithHotel - priceInPersonTicketWithoutHotel}</p>
        </WithHotel>
      </div>
      {renderPrice && (
        <TotalPrice>
          <h1>
            Fechado! O total ficou em <span>R$ {withHotel? priceInPersonTicketWithHotel: priceInPersonTicketWithoutHotel}</span>. Agora é só
            confirmar:
          </h1>
          <button onClick={reserveInPersonTicket}>RESERVAR INGRESSO</button>
        </TotalPrice>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  h1 {
    color: #8e8e8e;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    div {
      width: 145px;
      height: 145px;
    }
  }
`;
const WithHotel = styled.div`
  background-color: ${(props) => (props.withHotel ? '#FFEED2' : '#FFFFFF')};
  display: flex;
  margin-top: 10px;
  margin-right: 15px;
  flex-direction: column;
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #cecece;
  justify-content: center;
  align-items: center;
  h2 {
    color: #454545;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
  }
  p {
    color: #898989;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const WithoutHotel = styled.div`
  background-color: ${(props) => (props.withoutHotel ? '#FFEED2' : '#FFFFFF')};
  display: flex;
  margin-top: 10px;
  margin-right: 15px;
  flex-direction: column;
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #cecece;
  justify-content: center;
  align-items: center;
  h2 {
    color: #454545;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
  }
  p {
    color: #898989;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const TotalPrice = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  h1 {
    color: #8e8e8e;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    span {
      color: #8e8e8e;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  button {
    width: 162px;
    height: 37px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #e0e0e0;
    border: none;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
    margin-top: 17px;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
