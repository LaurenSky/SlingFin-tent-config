import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import EnvironmentConditions from './conditions';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <div>
      <Welcome showApp={linkTo('Button')}/>
    </div>
  ));

storiesOf('EnvironmentConditions', module)
  .add('to Storybook', () => (
    < EnvironmentConditions />
  ));


storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
