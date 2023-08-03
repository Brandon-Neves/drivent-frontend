import { useState } from 'react';
import styled from 'styled-components';
import SelectHotel from '../HotelAndTicket/SelectHotel';

export default function TicketsAndPayment() {
  const [presentialButton, setPresentialButton] = useState(false);
  const [onlineButton, setOnlineButton] = useState(false);
  function presential() {
    if (presentialButton) {
      setPresentialButton(false);
    } else {
      setPresentialButton(true);
    }
    if (onlineButton) setOnlineButton(false);
  }
  function online() {
    if (onlineButton) {
      setOnlineButton(false);
    } else {
      setOnlineButton(true);
    }
    if (presentialButton) setPresentialButton(false);
  }
  return (
    <>
      <Container>
        <SectionTitle>Ingresso e pagamento</SectionTitle>
        <SectionSubtitle>
          Primeiro, escolha sua modalidade de ingresso
        </SectionSubtitle>
        <ButtonsContainer>
          <TicketTypeButton
            onClick={presential}
            presentialButton={presentialButton}
          >
            <buttonName>Presencial</buttonName>
            <Price>R$ 250</Price>
          </TicketTypeButton>
          <TicketTypeButton onClick={online} onlineButton={onlineButton}>
            <buttonName>Online</buttonName>
            <Price>R$ 100</Price>
          </TicketTypeButton>
        </ButtonsContainer>
        {presentialButton && <SelectHotel />}
        {onlineButton && (
          <TotalPrice presentialButton={presentialButton}>
            <h1>
              Fechado! O total ficou em <span>R$ 100</span>. Agora é só
              confirmar:
            </h1>
            <button>RESERVAR INGRESSO</button>
          </TotalPrice>
        )}
      </Container>
    </>
  );
}
const SectionTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 39.84px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 40px;
`;
const SectionSubtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  color: #8e8e8e;
`;
const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const TicketTypeButton = styled.button`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  margin-right: 15px;
  background-color: ${(props) =>
    props.presentialButton || props.onlineButton ? '#FFEED2' : '#CECECE'};
`;
const buttonName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  color: #454545;
`;
const Price = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: #898989;
`;
const TotalPrice = styled.div`
  margin-top: ${(props) => (props.presentialButton ? '0px' : '44px')};
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
const Container = styled.div`
  height: 90%;
`;
