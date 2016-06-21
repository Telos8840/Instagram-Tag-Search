/**
 * Created by Saul on 5/30/16.
 */
import jsonp from 'jsonp';

class InstagramApi {
  static searchTags(tag) {
    return new Promise((resolve, reject) => {
      let client_id = 'CLIENT-ID-NEEDED-HERE';
      let instaUrl = `https://api.instagram.com/v1/tags/${tag}/media/recent?client_id=${client_id}`;

      jsonp(instaUrl, function (err, data) {
        if (err) {
            reject(err.message);
        } else {
          resolve(data);
        }
      });
    });
  }
}

export default InstagramApi;
