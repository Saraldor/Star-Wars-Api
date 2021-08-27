import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Search = props => (
  <>
    <ListRenderer
      name="People"
      curr={`https://swapi.dev/api/people/?search=${props.match.params.id}`}
      renderCard={person => (
        <Card key={person.url}>
          <Card.Content>
            <Card.Header>{person.name}</Card.Header>
            <Card.Meta>Längd: {person.height}</Card.Meta>
            <Card.Description>Född: {person.birth_year}</Card.Description>
            <Card.Description>Kön: {person.gender}</Card.Description>

          </Card.Content>
          <Card.Content extra>
            <div>
              <Link to={`details/${person.url.match(/\/api\/(.*)/)[1]}`}>
                Read more
              </Link>
            </div>
          </Card.Content>
        </Card>
      )}
    />
  </>
);

export default Search;
