/**
 *
 * Themes/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import styles from '../../../../components/AbstractPageList/styles.jss';
import settings from './settings';
import localStorage from '../../../../base/localStorage';
import themes from '../../../../styles/themes';

import AbstractPageList from '../../../../components/AbstractPageList';
import PaletteFormat from '../../../../components/formats/PaletteFormat';
import ThemeMode from '../../../../components/actions/ThemeMode';

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;

  static icon = settings.icon;

  static messages = settings.messages;

  static apiPath = settings.apiPath;

  static multiSelect = false;

  constructor(props) {
    super(props);

    this.limit = 25;

    this.setMessagingListener('startLoadItems', this.onStartLoadItems);
    this.setMessagingListener('changeSelection', this.onChangeSelection);
  }

  get columns() {
    return [
      { id: 'title', width: 200 },
      { id: 'palette', format: PaletteFormat },
    ];
  }

  get actions() {
    return (
      <>
        <ThemeMode moduleId={this.moduleId} onClick={this.onChangeMode} />
      </>
    );
  }

  onStartLoadItems = (limit, offset, term) => {
    let ids = Object.keys(themes);

    if (term) ids = ids.filter((id) => id.indexOf(term) !== -1);

    const count = ids.length;

    ids = ids.filter((id, idx) => idx >= offset && idx < offset + limit);

    const items = ids.map((id) => ({
      id,
      title: id,
      palette: themes[id].palette,
    }));

    this.emitMessage('loadItemsSuccessful', { data: items, pagination: { total: count } });
  }

  onApply = (e, item) => {
    this.emitMessage('applyTheme', { id: item.id, mode: 'light' }, 'Global');
  }

  onChangeMode = (e) => {
    const { theme } = localStorage;
    theme.mode = (theme.mode === 'light') ? 'dark' : 'light';
    this.emitMessage('applyTheme', theme, 'Global');
  }

  onChangeSelection = (selectedItems) => {
    if (selectedItems.length === 1) this.onApply(null, selectedItems[0]);
  }
}

export default withStyles(styles)(List);
