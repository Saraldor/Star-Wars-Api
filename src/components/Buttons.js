import React from 'react';
import { Button } from 'semantic-ui-react';

const Buttons = props => (
  <>
    <Button
      primary
      content="Föregående"
      icon="left arrow"
      labelPosition="left"
      size="mini"
      onClick={() => props.fnPrev()}
      disabled={props.prev == null}
      style={{ margin: '10px 10px 10px 0px' }}
    />

      <Button
      secondary
      content="Nästa"
      icon="right arrow"
      labelPosition="right"
      size="mini"
      onClick={() => props.fnNext()}
      disabled={props.next == null}
    />
  </>
);

export default Buttons;
