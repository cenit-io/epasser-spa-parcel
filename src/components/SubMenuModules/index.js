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
import session from '../../base/session';

import AbstractComponent from '../AbstractComponent';
import SubMenuItem from '../SubMenuItem';

class SubMenuModules extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    onTapItem: PropTypes.func.isRequired,
    modules: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)])).isRequired,
    title: PropTypes.instanceOf(Object).isRequired,
  }

  onTapItem(item) {
    if (!this.isAccessible(item.id)) return null;
    const { onTapItem } = this.props;
    return () => onTapItem(item);
  }

  renderSubMenuItem(item) {
    if (typeof item === 'string') return <SubMenuItem key={item} title={item} feature />;

    return (
      <SubMenuItem
        key={item.id}
        icon={item.icon}
        title={item.title || item.messages.title}
        onClick={this.onTapItem(item)}
      />
    );
  }

  render() {
    const { classes, title, modules } = this.props;

    return (
      <Accordion className={classes.subMenu}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="button"><FormattedMessage {...title} /></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List component="div">
            {modules.map((el) => this.renderSubMenuItem(el))}
          </List>
        </AccordionDetails>
      </Accordion>
    );
  }
}

export default withStyles(styles)(SubMenuModules);
