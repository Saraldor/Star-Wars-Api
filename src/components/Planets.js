import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Planet = () => (

    <ListRenderer
    name="Planets"
    curr="https://swapi.dev/api/planets/"
    renderCard={planet => (
      <Card key={planet.url}>
        <Card.Content>
          <Card.Header>{planet.name}</Card.Header>
          <Card.Meta>Klimat: {planet.climate}</Card.Meta>
          <Card.Description>Gravitation: {planet.gravity}</Card.Description>
          <Card.Description>Terräng: {planet.terrain}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Link to={`details/${planet.url.match(/\/api\/(.*)/)[1]}`}>
              Läs mer
            </Link>
          </div>
        </Card.Content>
      </Card>
    )}
  />
);

export default Planet;
