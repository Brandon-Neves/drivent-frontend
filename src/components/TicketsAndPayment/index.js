import styled from 'styled-components';

export default function TicketsAndPayment() {
  return (
    <>
      <SectionTitle>Ingresso e pagamento</SectionTitle>
      <SectionSubtitle>Primeiro, escolha sua modalidade de ingresso</SectionSubtitle>
      <ButtonsContainer>
        <TicketTypeButton>
          <buttonName>Presencial</buttonName>
          <Price>R$ 250</Price>
        </TicketTypeButton>
        <TicketTypeButton>
          <buttonName>Online</buttonName>
          <Price>R$ 100</Price>
        </TicketTypeButton>
      </ButtonsContainer>
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
    background-color: white;
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
