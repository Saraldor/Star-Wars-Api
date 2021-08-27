import React from 'react';
import ListRenderer from './ListRenderer';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Films = () => (

    <ListRenderer
    name="Films"
    curr="https://swapi.dev/api/films/"
    renderCard={film => (
      <Card key={film.url}>
        <Card.Content>
          <Card.Header>{film.title}</Card.Header>
          <Card.Meta>Episod: {film.episode_id}</Card.Meta>
          <Card.Description>Regissör: {film.director}</Card.Description>
          <Card.Description>Datum: {film.release_date}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div>
            <Link to={`details/${film.url.match(/\/api\/(.*)/)[1]}`}>
                <i className="swg-darthvader"></i>Läs mer
            </Link>
          </div>
        </Card.Content>
      </Card>
    )}

  />
);

export default Films;
