import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Vehicles = () => (
  <ListRenderer
    name="Vehicles"
    curr="https://swapi.dev/api/vehicles/"
    renderCard={vehicle => (
      <Card key={vehicle.url}>
        <Card.Content>
          <Card.Header>{vehicle.name}</Card.Header>
          <Card.Meta>Modell: {vehicle.model}</Card.Meta>
          <Card.Description>
              Tillverkare : {vehicle.manufacturer}
          </Card.Description>
          <Card.Description>
            Kostnade i krediter: {vehicle.cost_in_credits}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`details/${vehicle.url.match(/\/api\/(.*)/)[1]}`}>
              Läs mer
            </Link>
          </div>
        </Card.Content>
      </Card>
    )}
  />
);

export default Vehicles;
