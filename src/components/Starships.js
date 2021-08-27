import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Starships = () => (
  <ListRenderer
    name="Starships"
    curr="https://swapi.dev/api/starships/"
    renderCard={starship => (
      <Card key={starship.url}>
        <Card.Content>
          <Card.Header>{starship.name}</Card.Header>
          <Card.Meta>Modell: {starship.model}</Card.Meta>
          <Card.Description>
              Tillverkare: {starship.manufacturer}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`details/${starship.url.match(/\/api\/(.*)/)[1]}`}>
              Läs mer
            </Link>
          </div>
        </Card.Content>
      </Card>
    )}
  />
);

export default Starships;
