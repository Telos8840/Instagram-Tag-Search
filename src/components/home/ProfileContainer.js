/**
 * Created by Saul on 5/30/16.
 */
import React from 'react';
import { Row, Column} from 'react-foundation';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  render() {

    return (
      <Row className="display">
        <Column large={6} centerOnLarge>
          {
            this.props.feed &&
              this.props.feed.map(profile => {
                return (
                  <Row key={profile.id}>
                    <Column large={12}>
                      <Profile caption={profile.caption.text}
                               likes={profile.likes.count}
                               link={profile.link}
                               thumbNail={profile.images.thumbnail.url}
                               tags={profile.tags}
                               userName={profile.user.username}/>
                    </Column>
                  </Row>
                );
              })
          }
        </Column>
      </Row>
    );
  }
}

ProfileContainer.propTypes = {
  feed: React.PropTypes.array
};

export default ProfileContainer;
