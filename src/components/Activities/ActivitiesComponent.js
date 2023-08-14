import styled from 'styled-components';
import { useState } from 'react';
import { useActivitiesDate } from '../../hooks/api/useActivities';
import Button from '../Form/Button';
import { useEffect } from 'react';

export function ActivitiesContainer() {
  const { activitiesDate, activitiesDateLoading, activitiesDateError, getActivitiesDate } = useActivitiesDate();
  const [selectedDate, setSelectedDate] = useState(null);

  // falta a lógica do pagamento para renderizar os dias de atividades
  return (
    <>
      <Container>
        <SectionTitle>Escolha de Atividades</SectionTitle>
        <SectionSubtitle>Primeiro, filtre pelo dia do evento:</SectionSubtitle>
        {activitiesDate?.map((date, i ) => (
          <ButtonsContainer key={i} onClick={() => selectedDate(date)}>
            <Button>
              {date}
            </Button>
          </ButtonsContainer> 
        ))}
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 90%;
`;
const SectionTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 39.84px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const SectionSubtitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23.44px;
  color: #8e8e8e;
`;

const ButtonsContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    margin-top: 0 !important;
  }
`;
