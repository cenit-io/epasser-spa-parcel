/**
 *
 * Main
 *
 */

import React from 'react';
import AbstractComponent from '../../../components/AbstractComponent';
import Embedded from './embedded';
import Unembedded from './unembedded';
import session from '../../../base/session';

export default class Main extends AbstractComponent {
  render() {
    return (session.iFrameDetected) ? <Embedded /> : <Unembedded />;
  }
}
