/**
 * Created by Saul on 5/30/16.
 */
import React from 'react';
import { Callout, Colors, MediaObject, MediaObjectSection, Thumbnail, Label, Row, Column } from 'react-foundation';

const Profile = (props) => {
  return (
    <Callout>
      <MediaObject>
        <MediaObjectSection>
          <a href={props.link} target="_blank"> <Thumbnail src={props.thumbNail}/> </a>
        </MediaObjectSection>
        <MediaObjectSection isMain>
          <h4><a href={'https://www.instagram.com/' + props.userName} target="_blank">{props.userName}</a> </h4>
          <p>{props.caption}</p>
        </MediaObjectSection>
      </MediaObject>

      <Row>
        <Column large={3}>
          <MediaObject className="center">
            <MediaObjectSection>
              <Thumbnail className="heart" src="../../../images/heart.png"/>
            </MediaObjectSection>
            <MediaObjectSection isMain>
              <p>{props.likes}</p>
            </MediaObjectSection>
          </MediaObject>
        </Column>
        <Column large={9}>
          <p>
            {
              props.tags.map(tag => {
                return ( <Label key={tag} color={Colors.PRIMARY}>#{tag}</Label> );
              })
            }
          </p>
        </Column>
      </Row>
    </Callout>
  );
};

Profile.propTypes = {
  caption: React.PropTypes.string.isRequired,
  likes: React.PropTypes.number.isRequired,
  link: React.PropTypes.string.isRequired,
  thumbNail: React.PropTypes.string.isRequired,
  tags: React.PropTypes.array.isRequired,
  userName: React.PropTypes.string.isRequired
};

export default Profile;
