import React from 'react';
import { FiClock } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://pbs.twimg.com/profile_images/903650940179251200/c4ZamV3__400x400.jpg"
                alt="Profile pic"
              />

              <strong>Ivan Vinicius Boneti</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
