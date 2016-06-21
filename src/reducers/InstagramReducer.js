/**
 * Created by Saul on 5/30/16.
 */
import {FEED_GET} from '../actions/InstagramAction';

export default function (state = {}, action) {
  switch (action.type) {
    case FEED_GET:
          return action.feed;
    default:
          return state;
  }
}
