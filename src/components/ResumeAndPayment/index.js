import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
import api from '../../services/api';
import useToken from '../../hooks/useToken';
import check from '../../assets/images/circle-check-fill.png';

export default function ResumeAndPayment() {
  const [cardData, setCardData] = useState({ number: '', name: '', expiry: '', cvc: '' });
  const [focused, setFocused] = useState('');
  const ticketId = 1;
  const token = useToken();
  const [paymentConfirmed, setPaymentConfirmed] = useState(true);

  function handleInputFocus(e) {
    setFocused(e.target.name);
  }

  function handleForm(e) {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  }

  async function submitPayment() {
    if (!cardData.name || !cardData.number || !cardData.cvc || !cardData.expiry) {
      alert('Preencha todos os campos para poder prosseguir com o cadastro');
      return;
    };
    console.log(cardData);
    await api.post('/payments/process', { ticketId, cardData }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setPaymentConfirmed(true);
      }).catch(err => console.log(err));
  }
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Subtitle>Ingresso escolhido</Subtitle>
      <OptionsContainer>
        <Option>
          <p>Presencial + Com Hotel</p>
          <Price>R$ 600</Price>
        </Option>
      </OptionsContainer>
      <Subtitle>Pagamento</Subtitle>
      <OptionsContainer></OptionsContainer>

      {!paymentConfirmed && (
        <>
          <CardContainer>
            <Cards
              number={cardData.number}
              name={cardData.name}
              expiry={cardData.expiry}
              cvc={cardData.cvc}
              focused={focused}
            />
            <CardInfo>
              <BiggerInput
                type="tel"
                name="number"
                placeholder="Card Number"
                value={cardData.number}
                onChange={handleForm}
                onFocus={handleInputFocus}
              />
              <BiggerInput
                type="tel"
                name="name"
                placeholder="Name"
                value={cardData.name}
                onChange={handleForm}
                onFocus={handleInputFocus}
              />
              <div>
                <MinorInput
                  type="tel"
                  name="expiry"
                  placeholder="Valid Thru"
                  value={cardData.validThru}
                  onChange={handleForm}
                  onFocus={handleInputFocus}
                />
                <MinorInput
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  value={cardData.cvc}
                  onChange={handleForm}
                  onFocus={handleInputFocus}
                />
              </div>
            </CardInfo>
          </CardContainer>
          <FinishButton onClick={submitPayment}>
            <p>FINALIZAR PAGAMENTO</p>
          </FinishButton>
        </>)}
      {paymentConfirmed && <PaymentAproved>
        <img src={check} alt="greenCheck"/>
        <AprovedText>
          <h1>Pagamento confirmado!</h1>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </AprovedText>
      </PaymentAproved>}
    </>
  );
}

const Title = styled.h1`
font-family: Roboto;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
color: #000000;

`;

const Subtitle = styled.h2`
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-top:30px;

`;

const OptionsContainer = styled.div`
display:flex;
`;

const Option = styled.div`
width: 290px;
height: 108px;
top: 292px;
left: 330px;
border-radius: 20px;
background-color: #FFEED2;
margin-top:10px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
:first-child{
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: center;

}
`;
const FinishButton = styled.button`
width: 182px;
height: 37px;
top: 713px;
left: 335px;
border-radius: 4px;
margin-top:30px;
border-color:transparent;
`;

const CardContainer = styled.div`
display:flex;
margin-top:20px;
width:706px;
`;

const CardInfo = styled.form`
margin-left:5px;
display:flex;
flex-direction:column;
width:300px;
`;

const BiggerInput = styled.input`
margin-bottom: 5px;
height:35px;
border:#CECECE solid 2px;
border-radius:5px;
`;

const MinorInput = styled.input`
height:35px;
margin-bottom: 5px;
border:#CECECE solid 2px;
border-radius:5px;
width:140px;
margin-right:10px;
`;

const Price = styled.p`
color: #898989;
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: center;

`;

const PaymentAproved = styled.div`
margin-top:10px;
color: #454545;
display:flex;
`;

const AprovedText = styled.div`
margin-left:5px;
:first-child{
font-family: Roboto;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color:#454545;
}
:last-child{
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
}
`;
