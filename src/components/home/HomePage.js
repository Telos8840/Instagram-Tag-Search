/**
 * Created by Saul on 5/30/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './Header';
import SearchInput from './SearchInput';
import ProfileContainer from './ProfileContainer';
import { Callout, Colors } from 'react-foundation';
import * as InstagramActions from '../../actions/InstagramAction';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.doSearch = this.doSearch.bind(this);
  }

  doSearch(term) {
    this.props.actions.searchTags(term);
  }

  render() {

    return (
      <section>
        <Callout color={Colors.PRIMARY}>
          <Header />
        </Callout>

        <div>
          <SearchInput doSearch={this.doSearch}/>
        </div>

        <div>
          <ProfileContainer key="profCont" feed={this.props.feed} />
        </div>
      </section>
    );
  }
}



function mapStateToProps(state) {
  return {
    feed: state.feed.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(InstagramActions, dispatch)
  };
}

HomePage.propTypes = {
  actions: React.PropTypes.object.isRequired,
  feed: React.PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
