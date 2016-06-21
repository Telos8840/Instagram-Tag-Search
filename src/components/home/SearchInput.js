/**
 * Created by Saul on 5/30/16.
 */
import React from 'react';
import { Row, Column } from 'react-foundation';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    if (!event.target.value) {
     this.setState({searchTerm: ''});
    } else {
      this.setState({searchTerm: event.target.value});
    }
  }

  doSearch() {
    this.props.doSearch(this.state.searchTerm);
  }

  render() {
    return (
      <Row className="display">
        <Column large={4} centerOnLarge>
          <div className="input-group">
            <input className="input-group-field" type="text" placeholder="search text..." onChange={this.onChange.bind(this)}/>
            <a className="input-group-button button" onClick={this.doSearch.bind(this)}>Search</a>
          </div>
        </Column>
      </Row>
    );
  }

}

SearchInput.propTypes = {
  doSearch: React.PropTypes.func.isRequired
};

export default SearchInput;
