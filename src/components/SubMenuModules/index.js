/**
 *
 * SubMenuModules
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './styles.jss';
import SubMenuItem from '../SubMenuItem';

class SubMenuModules extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    onTapItem: PropTypes.func.isRequired,
    modules: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
    title: PropTypes.instanceOf(Object).isRequired,
  }

  onTapItem(item) {
    const { onTapItem } = this.props;
    return () => onTapItem(item);
  }

  renderSubMenuItem(item) {
    const title = item.title || item.messages.title;
    return <SubMenuItem key={item.id} icon={item.icon} title={title} onClick={this.onTapItem(item)} />;
  }

  render() {
    const { classes, title, modules } = this.props;

    return (
      <Accordion className={classes.subMenu}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="button"><FormattedMessage {...title} /></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {modules.map((el) => this.renderSubMenuItem(el))}
          </List>
        </AccordionDetails>
      </Accordion>
    );
  }
}

export default withStyles(styles)(SubMenuModules);
