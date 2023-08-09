import styled from 'styled-components';
import hotelImage from '../assets/images/drivent.png';

export default function HotelBox(hotel) {
  return (
    <Box>
      <img src={hotel.image} alt='hotel image' />
      <div>
        <h1>{hotel.name}</h1>
        <h2>Tipos de acomodação:</h2>
        <p>colocar o tipo</p>
        <h2>Vagas disponíveis:</h2>
        <p>103</p>
      </div>
    </Box>
  );
}
const Box = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 80%;
    height: 50%;
    margin-top: auto;
    h1 {
      color: #343434;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 10px;
    }
    h2 {
      color: #3c3c3c;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 2px;
    }
    p {
      color: #3c3c3c;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 14px;
    }
  }
  img {
    width: 168px;
    height: 109px;
    margin-top: auto;
    border-radius: 5px;
  }
`;
