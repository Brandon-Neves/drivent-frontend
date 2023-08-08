import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';
// import api from '../../../services/api';

export default function Payment() {
  const [form, setForm] = useState({ number: '', name: '', expiry: '', cvc: '' });
  const [focused, setFocused] = useState('');

  function handleInputFocus(e) {
    setFocused(e.target.name);
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitPayment() {
    if (!form.name || !form.number || !form.cvc || !form.expiry) {
      alert('Preencha todos os campos para poder prosseguir com o cadastro');
      return;
    };
    //   await api.post('/', { form });
  }

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Subtitle>Ingresso escolhido</Subtitle>
      <OptionsContainer>
        <Option></Option>
      </OptionsContainer>
      <Subtitle>Pagamento</Subtitle>
      <OptionsContainer></OptionsContainer>

      <CardContainer>
        <Cards
          number={form.number}
          name={form.name}
          expiry={form.expiry}
          cvc={form.cvc}
          focused={focused}
        />
        <CardInfo>
          <BiggerInput
            type="tel"
            name="number"
            placeholder="Card Number"
            value={form.number}
            onChange={handleForm}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleForm}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            value={form.validThru}
            onChange={handleForm}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={form.cvc}
            onChange={handleForm}
            onFocus={handleInputFocus}
          />
        </CardInfo>
      </CardContainer>
      <FinishButton onClick={submitPayment}>
        <p>FINALIZAR PAGAMENTO</p>
      </FinishButton>
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
`;

const CardInfo = styled.form`
margin-left:5px;
display:flex;
flex-direction:column;
`;

const BiggerInput = styled.input`
margin-bottom: 5px;
width:200px;
height:40px;
border-color:#CECECE;
`;

// const MinorInput=styled.input`
// ` 
