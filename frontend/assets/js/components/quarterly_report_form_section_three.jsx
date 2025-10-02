import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List } from 'immutable';
import FoiaTooltip from './foia_tooltip';
import FoiaReportFormCheckboxWidget from './foia_report_form_checkbox_widget';
import { reportActions } from '../actions/quarterly_report';

class QuarterlyReportFormSectionThree extends Component {
  static handleSelectNone(event) {
    reportActions.updateSelectedFiscalYears([]);
    event.preventDefault();
  }

  constructor(props) {
    super(props);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelectAll(event) {
    reportActions.updateSelectedFiscalYears([...this.props.fiscalYears]);
    event.preventDefault();
  }

  handleChange(event) {
    const { target } = event;
    const value = target.value.toString();
    const selected = target.checked
      ? [...this.props.selectedFiscalYears].concat([value])
      : [...this.props.selectedFiscalYears].filter((year) => value !== year);
    reportActions.updateSelectedFiscalYears(selected);
  }

  render() {
    const { fiscalYears, selectedFiscalYears, fiscalYearsDisplayError } = this.props;
    const checkboxFieldsetClasses = ['usa-fieldset-inputs'];
    if (fiscalYearsDisplayError) {
      checkboxFieldsetClasses.push('usa-input-error');
    }
    return (
      <div>
        <div className="form-group">
          <fieldset>
            <legend className="foia-header-blue-line--h2">
              3. Select Fiscal Years
              <FoiaTooltip text="<p>Select a Fiscal Year to view the data for that year. You may select multiple years, or you may view all years of available data.</p>" />
            </legend>
            <fieldset className={checkboxFieldsetClasses.join(' ')}>
              <legend className="usa-sr-only">Select Fiscal Years</legend>
              <ul className="usa-unstyled-list usa-grid checkbox-list">
                { fiscalYears.map((fiscalYear) => (
                  <li className="usa-width-one-sixth" key={fiscalYear}>
                    <FoiaReportFormCheckboxWidget
                      value={fiscalYear}
                      checked={selectedFiscalYears.includes(fiscalYear)}
                      onChange={this.handleChange}
                    />
                  </li>
                ))}
              </ul>
            </fieldset>
            {fiscalYearsDisplayError
              && <p className="usa-input-error-message">At least one Fiscal Year is required.</p>}
            <div className="form-group_footer-links">
              <ul className="inline-list--centered">
                <li><a href="" onClick={this.handleSelectAll} className="touch-safe">Select All</a></li>
                <li><a href="" onClick={QuarterlyReportFormSectionThree.handleSelectNone} className="touch-safe">Select None</a></li>
              </ul>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

QuarterlyReportFormSectionThree.propTypes = {
  fiscalYears: PropTypes.instanceOf(List),
  selectedFiscalYears: PropTypes.array,
  fiscalYearsDisplayError: PropTypes.bool.isRequired,
};

QuarterlyReportFormSectionThree.defaultProps = {
  fiscalYears: List(),
  selectedFiscalYears: [],
};

export default QuarterlyReportFormSectionThree;
