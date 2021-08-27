import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import logo from '../logosw.png';

const Home = () => (
  <>
    <Container fluid>
      <Image src={logo} size="medium" centered />
        <div className="robot" />

    </Container>

  </>

);

export default Home;
