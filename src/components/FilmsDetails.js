import React, { Component } from 'react';
import { Card, Feed, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ExtraCard from './ExtraCard';

class FilmsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      link: `https://swapi.dev/api/films/${props.match.params.id}/`,
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
            <Card.Header>{this.state.content.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>

                <Feed.Content>
                  <Feed.Date content="Episod:" />
                  <Feed.Summary>{this.state.content.episode_id}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Titel text:" />
                  <Feed.Summary>
                    {this.state.content.opening_crawl}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Regissör:" />
                  <Feed.Summary>{this.state.content.director}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Producent:" />
                  <Feed.Summary>{this.state.content.producer}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Premiär:" />
                  <Feed.Summary>{this.state.content.release_date}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Karaktärter:" />
                  <Feed.Summary>
                    {this.state.content.characters != null &&
                      this.state.content.characters.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Planeter:" />
                  <Feed.Summary>
                    {this.state.content.planets != null &&
                      this.state.content.planets.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Rymdfarkost:" />
                  <Feed.Summary>
                    {this.state.content.starships != null &&
                      this.state.content.starships.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Fordon:" />
                  <Feed.Summary>
                    {this.state.content.vehicles != null &&
                      this.state.content.vehicles.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Raser:" />
                  <Feed.Summary>
                    {this.state.content.species != null &&
                      this.state.content.species.map((el, i) => (
                        <ExtraCard link={el} key={i} />
                      ))}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Skapad:" />
                  <Feed.Summary>{this.state.content.created}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content="Ändrad:" />
                  <Feed.Summary>{this.state.content.edited}</Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label>
                  <Icon disabled name="circle outline" />
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
          Gå tillbaka
        </Button>
      </>
    );
  }
}

export default FilmsDetails;
