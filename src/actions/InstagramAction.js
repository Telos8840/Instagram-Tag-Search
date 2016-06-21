/**
 * Created by Saul on 5/30/16.
 */
import InstagramApi from '../api/InstagramApi';

export const FEED_GET = 'FEED_GET';
export function searchTagsSuccessful(feed) {
  return {
    type: FEED_GET,
    feed
  };
}

export function searchTags(tag) {
  return dispatch => {
    return InstagramApi.searchTags(tag).then(feed => {
      dispatch(searchTagsSuccessful(feed));
    }).catch(error => {
      throw(error);
    });
  };
}
