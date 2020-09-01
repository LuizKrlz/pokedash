import React from 'react';

import Form from '../../components/Form';
import Card from '../../components/Card';

import { List } from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <Form />
      <List>
        <Card number={1}>
          <div>
            <img src="/bulbassaur.png" alt="" />
          </div>
          <div>
            <span>
              <strong>Name:</strong>
              haha
            </span>
            <span>
              <strong>Types:</strong>
              Grass, Poison
            </span>
          </div>
        </Card>

        <Card number={1}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <span>
              <strong>Name:</strong>
            </span>
            <span>
              <strong>Types:</strong>
              Grass, Poison
            </span>
          </div>
        </Card>

        <Card number={1}>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <span>
              <strong>Name:</strong>
            </span>
            <span>
              <strong>Types:</strong>
              Grass, Poison
            </span>
          </div>
        </Card>
      </List>
    </div>
  );
};

export default Home;
