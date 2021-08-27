import React, { Component } from 'react';
import { Card, Feed, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ExtraCard from './ExtraCard';

class VehiclesDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      link: `https://swapi.dev/api/vehicles/${props.match.params.id}/`,
      content: {}
    };
  }

  componentDidMount() {
    fetch(this.state.link)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ content: resp });
      });
  }

  render() {
    return (
      <>
        <Card style={{ width: 'auto' }}>
          <Card.Content>
            <Card.Header>{this.state.content.name}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label>

                  <Icon disabled name="text height" />
                </Feed.Label>

                <Feed.Content>
                  <Feed.Date content="Modell:" />
                  <Feed.Summary>{this.state.content.model}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="weight" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Tillverkare:" />
                  <Feed.Summary>{this.state.content.manufacturer}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Kostnad i krediter:" />
                  <Feed.Summary>
                    {this.state.content.cost_in_credits}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Längd"/>
                  <Feed.Summary>{this.state.content.length}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Max hastighet:" />
                  <Feed.Summary>
                    {this.state.content.max_atmosphering_speed}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Besättning:" />
                  <Feed.Summary>{this.state.content.crew}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Passagerare:" />
                  <Feed.Summary>{this.state.content.passengers}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Lastkapacitet:" />
                  <Feed.Summary>
                    {this.state.content.cargo_capacity}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Förbrukningsartiklar:" />
                  <Feed.Summary>{this.state.content.consumables}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="arrow alternate circle right outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Fordonsklass:" />
                  <Feed.Summary>
                    {this.state.content.vehicle_class}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="film" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Piloter:" />
                  <Feed.Summary>
                    {this.state.content.pilots != null &&
                      this.state.content.pilots.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="film" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Filmer:" />
                  <Feed.Summary>
                    {this.state.content.films != null &&
                      this.state.content.films.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="external square alternate" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Skapad:" />
                  <Feed.Summary>{this.state.content.created}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="edit" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Ändrad:" />
                  <Feed.Summary>{this.state.content.edited}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="sync" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="URL:" />
                  <Feed.Summary>{this.state.content.url}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
        <Button
          color="yellow"
          as={Link}
          to="/films"
          style={{ margin: '0 0 10px 0' }}
        >
          Go back
        </Button>
      </>
    );
  }
}

export default VehiclesDetails;
