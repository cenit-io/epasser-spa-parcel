/**
 *
 * Products/Link
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import messages from './messages';
import settings from './settings';
import styles from '../../../../components/AbstractPageDetails/styles.jss';

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import ActList from '../../../../components/actions/List';
import CustomSection from '../../../../components/sections/CustomSection';
import LinkProductsBox from '../../../../components/forms/fields/LinkProductsBox';
import SelectBoxIntegrations from '../../../../components/forms/fields/SelectBoxIntegrations';
import SelectBoxLinkVariantsAction from '../../../../components/forms/fields/SelectBoxLinkVariantsAction';

import { LinkIcon } from '../../../../components/Icons';

class Link extends AbstractPageDetails {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = `${settings.id}/Links`;

  static icon = settings.icon;

  static messages = settings.messages;

  static apiPath = `${settings.apiPath}/link`;

  static requestMethod = 'PUT';

  static saveActionLabel = 'link_up';

  static saveActionIcon = <LinkIcon />;

  get form() {
    const { classes, products } = this.props;

    return (
      <CustomSection title={messages.title_for_link}>
        <LinkProductsBox
          name="product_ids"
          items={products}
          value={products.map((p) => p.id)}
          required
          readOnly
          moduleId={this.moduleId}
          className={classes.col6}
          onChange={this.onChange}
        />
        <SelectBoxIntegrations
          name="integration_ids"
          required
          moduleId={this.moduleId}
          className={classes.col6}
          onChange={this.onChange}
        />
        <SelectBoxLinkVariantsAction
          name="link_with_its_variants"
          required
          moduleId={this.moduleId}
          className={classes.col6}
          onChange={this.onChange}
        />
      </CustomSection>
    );
  }

  get actions() {
    return (
      <>
        <ActList moduleId={this.moduleId} onClick={this.onBackToList} />
      </>
    );
  }
}

export default withStyles(styles)(Link);
