/**
 *
 * AbsSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import AbstractComponent from '../../AbstractComponent';
import Divider from '../../Divider';

export default class AbsSection extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    titleVariant: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = { titleVariant: 'body1' }

  get sectionTitle() {
    const title = this.props.title || this.title || this.messages.title;

    if (typeof title === 'string' || React.isValidElement(title)) return title;

    return <FormattedMessage {...title} />;
  }

  render() {
    const { classes, titleVariant } = this.props;

    return (
      <Card className={classes.cardForm}>
        <CardHeader
          titleTypographyProps={{ variant: titleVariant }}
          title={this.sectionTitle}
          action={this.actions}
        />
        <CardContent>
          <Divider className={classes.separator} />
          {this.renderContent()}
        </CardContent>
      </Card>
    );
  }
}
