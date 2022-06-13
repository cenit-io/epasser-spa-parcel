/**
 *
 * Main
 *
 */

import React from 'react';
import AbstractComponent from '../../../components/AbstractComponent';
import Embedded from './embedded';
import Unembedded from './unembedded';

export default class Main extends AbstractComponent {
  render() {
    return (this.iFrameDetected) ? <Embedded /> : <Unembedded />;
  }
}
