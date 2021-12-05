/**
 *
 * Flows/Details
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from "react-intl";

import messages from "./messages";
import settings from './settings';

import FormGroup from "@material-ui/core/FormGroup";

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import ListAction from "../../../../components/actions/List";
import SelectBoxFlowType from "../../../../components/forms/fields/SelectBoxFlowType";
import SelectBoxIntegration from "../../../../components/forms/fields/SelectBoxIntegration";
import SelectBoxSchedulerTimeFrequency from "../../../../components/forms/fields/SelectBoxSchedulerTimeFrequency";
import TimeAppointedBox from "../../../../components/forms/fields/TimeAppointedBox";
import TimeCyclicBox from "../../../../components/forms/fields/TimeCyclicBox";
import DateBox from "../../../../components/forms/fields/DateBox";
import SwitchBox from "../../../../components/forms/fields/SwitchBox";
import SelectBoxDaysOfWeek from "../../../../components/forms/fields/SelectBoxDaysOfWeek";
import SelectBoxWeeksOfMonth from "../../../../components/forms/fields/SelectBoxWeeksOfMonth";
import SelectBoxMonthsOfYear from "../../../../components/forms/fields/SelectBoxMonthsOfYear";

export default class Details extends AbstractPageDetails {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;
  static icon = settings.icon;
  static messages = settings.messages;
  static apiPath = settings.apiPath;

  constructor(props) {
    super(props);
    this.state.timeFrequency = this.timeFrequency;
  }

  get timeFrequency() {
    const { item: { task: { scheduler = { time: '00:00' } } = {} } } = this.state
    const time = scheduler.time;

    if (time.match(/^\d+[mhdwM]$/)) return TimeCyclicBox.getFrequency(time);

    return 'appointed'
  }

  get requestData() {
    const { type, integration_id, scheduler } = this.state.item;
    return { type, integration_id, scheduler };
  }

  get form() {
    const { classes } = this.props;
    const { item, timeFrequency, item: { task: { scheduler = { time: '00:00' } } = {} } } = this.state;
    const integration_id = item.integration ? item.integration.id : '';

    return (
      <FormGroup>
        <fieldset className={`${classes.formSection} ${classes.fullWidth}`}>
          <legend><FormattedMessage {...messages.title} /></legend>
          <FormGroup row>
            <SelectBoxFlowType
              value={item.type}
              name='type'
              moduleId={this.moduleId}
              className={classes.col3}
              readOnly={this.isEdit}
              onChange={this.onChange} />
            <SelectBoxIntegration
              value={integration_id}
              name='integration_id'
              moduleId={this.moduleId}
              className={classes.col3}
              readOnly={this.isEdit}
              onChange={this.onChange} />
          </FormGroup>
        </fieldset>

        <fieldset className={`${classes.formSection} ${classes.fullWidth}`}>
          <legend><FormattedMessage {...messages.field_scheduler} /></legend>

          <FormGroup row>
            <DateBox
              name='scheduler.start_date'
              value={scheduler.start_date}
              moduleId={this.moduleId}
              className={classes.col3}
              label={<FormattedMessage {...messages.field_start_date} />}
              onChange={this.onChange} />
            <DateBox
              name='scheduler.end_date'
              value={scheduler.end_date}
              moduleId={this.moduleId}
              className={classes.col3}
              label={<FormattedMessage {...messages.field_end_date} />}
              onChange={this.onChange} />
          </FormGroup>

          <FormGroup row>
            <SelectBoxSchedulerTimeFrequency
              name='time_frequency'
              value={timeFrequency}
              moduleId={this.moduleId}
              className={classes.col2}
              label={<FormattedMessage {...messages.field_time_frequency} />}
              onChange={this.onChangeTimeFrequency}
            />
            {this.renderTimeField(scheduler)}
            <SwitchBox
              name='scheduler.active'
              value={scheduler.active}
              moduleId={this.moduleId}
              className={classes.col2}
              label={<FormattedMessage {...messages.field_active} />}
              onChange={this.onChange}
            />

          </FormGroup>

          <FormGroup row>
            <SelectBoxDaysOfWeek
              name='scheduler.days_of_week'
              value={scheduler.days_of_week || []}
              moduleId={this.moduleId}
              className={classes.col2}
              label={<FormattedMessage {...messages.field_days_of_week} />}
              onChange={this.onChange} />
            <SelectBoxWeeksOfMonth
              name='scheduler.weeks_of_month'
              value={scheduler.weeks_of_month || []}
              moduleId={this.moduleId}
              className={classes.col2}
              label={<FormattedMessage {...messages.field_weeks_of_month} />}
              onChange={this.onChange} />
            <SelectBoxMonthsOfYear
              name='scheduler.months_of_year'
              value={scheduler.months_of_year || []}
              moduleId={this.moduleId}
              className={classes.col2}
              label={<FormattedMessage {...messages.field_months_of_year} />}
              onChange={this.onChange} />
          </FormGroup>

        </fieldset>
      </FormGroup>
    )
  }

  get actions() {
    return [
      <ListAction moduleId={this.moduleId} onClick={this.onBackToList} />,
    ]
  }

  renderTimeField = (scheduler) => {
    const { classes } = this.props;
    const { timeFrequency = 'appointed' } = this.state;

    let value = scheduler.time;

    if (timeFrequency === 'appointed') {
      if (value && !value.match(/^\d{1,2}:\d{1,2}$/)) value = '00:00';

      return (
        <TimeAppointedBox
          name='scheduler.time'
          value={value}
          moduleId={this.moduleId}
          className={classes.col2}
          label={<FormattedMessage {...messages.field_time} />}
          onChange={this.onChange} />
      )
    }

    if (value && !value.match(/^\d+[mhdwM]$/)) value = '20h';

    return (
      <TimeCyclicBox
        name='scheduler.time'
        value={value}
        frequency={timeFrequency}
        moduleId={this.moduleId}
        className={classes.col2}
        label={<FormattedMessage {...messages.field_time} />}
        onChange={this.onChange} />
    )
  }

  onChangeTimeFrequency = (field, timeFrequency) => {
    if (this.state.timeFrequency !== timeFrequency) this.setState({ timeFrequency });
  }

}