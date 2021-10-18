/**
 *
 * AbstractPageDetails
 *
 */

import React from 'react';
import AbstractModule from "../AbstractModule";

import Card from '@material-ui/core/Card';
import { FormattedMessage } from "react-intl";
import { request } from "../../base/request";

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPageDetails extends AbstractModule {
  constructor(props) {
    super(props);
  }

  renderContent() {
    const { classes } = this.props;

    return (
      <Card className={classes.content}>
        <p>TODO:...</p>
      </Card>
    );
  }
}
