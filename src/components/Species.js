import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Species = () => (
  <ListRenderer
    name="Species"
    curr="https://swapi.dev/api/species/"
    renderCard={specie => (
      <Card key={specie.url}>
        <Card.Content>
          <Card.Header>{specie.name}</Card.Header>
          <Card.Meta>Klassificering: {specie.classification}</Card.Meta>
          <Card.Description>Beteckning: {specie.designation}</Card.Description>
          <Card.Description>
              Medellivslängd: {specie.average_lifespan}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`details/${specie.url.match(/\/api\/(.*)/)[1]}`}>
              Läs mer
            </Link>
          </div>
        </Card.Content>
      </Card>
    )}
  />
);

export default Species;
