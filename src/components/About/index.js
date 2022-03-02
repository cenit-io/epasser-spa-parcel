/**
 *
 * About
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import moment from 'moment';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styles from './styles.jss';
import messages from './messages';

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader title={<FormattedMessage {...messages.title} />} subheader={moment().toDate().toDateString()} />
        <CardMedia className={classes.logo} component="img" image="/images/logo-passer-gb.png" title="ePasser" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <FormattedMessage {...messages.content} />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(About);
