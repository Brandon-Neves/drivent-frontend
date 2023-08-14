import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../contexts/UserContext';
import HotelBox from '../../../components/HotelBox';
import styled from 'styled-components';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [hotel, setHotel] = useState([]);
  const [errorPayment, setErrorPayment] = useState();

  useEffect(() => {
    const URL = process.env.REACT_APP_API_BASE_URL;
    axios
      .get(`${URL}/hotels`, {
        params: {
          userId: userData.user.id,
        },
      })
      .then((r) => {
        setHotel(r.data);
      })
      .catch((e) => setErrorPayment(e.response.status));
  }, []);
  return (
    <H1Div errorPayment={errorPayment}>
      <h1>Escolha de hotel e quarto</h1>
      <div>
        {errorPayment === 402 ? (
          <p>
            Você precisa ter confirmado pagamento ante de fazer a escolha de
            hospedagem
          </p>
        ) : (
          <HotelBox hotel={hotel} />
        )}
      </div>
    </H1Div>
  );
}
const H1Div = styled.div`
  width: 100%;
  height: 85%;
  h1 {
    color: #000;
    font-family: Roboto;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    p {
      color: #8e8e8e;
      text-align: center;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    div {
      width: 196px;
      height: 264px;
    }
  }
`;
