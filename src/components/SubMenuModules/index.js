/**
 *
 * SubMenuModules
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import styles from './styles.jss';

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SubMenuItem from "../SubMenuItem";

class SubMenuModules extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    onTapItem: PropTypes.func.isRequired,
    modules: PropTypes.array.isRequired,
    title: PropTypes.instanceOf(Object).isRequired,
  }

  onTapItem(item) {
    return () => this.props.onTapItem(item)
  }

  renderSubMenuItem(item) {
    const title = item.title || item.messages.title
    return <SubMenuItem key={item.id} icon={item.icon} title={title} onClick={this.onTapItem(item)} />
  }

  render() {
    const { classes, title, modules } = this.props;

    return (
      <Accordion className={classes.subMenu}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={"button"}><FormattedMessage {...title} /></Typography>
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
