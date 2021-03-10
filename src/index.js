import { TEST_FETCH_LIMIT, TEST_FETCH_URL } from './constants';
import { createNewArrayFromArrayObject } from './array-helpers';

/**
 *
 * @returns {Promise<Users[]>}
 */
function getUsers() {
   return fetch(`${TEST_FETCH_URL}?_limit=${TEST_FETCH_LIMIT}`)
      .then(res => res.json())
      .then(json => json);
}

getUsers().then(users => {
   const formattedUsers = createNewArrayFromArrayObject(users, (user) => {
      return {
         id: user.id,
         name: user.name,
         username: user.username,
         website: user.website
      }
   });
});