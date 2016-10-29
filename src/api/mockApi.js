import _ from 'lodash';

const users = [
  {
    id: 1,
    first_name: 'amitai',
    last_name: 'barnea',
    email: 'amitai@spectory.com',
    password: 'qwe123',
    token: 'abcd4321'
  }
];

export function authenticate(email, password) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = _.find(users, user => {
          return user.email === email;
        });
        if(user && user.password === password) {
          resolve(Object.assign({}, user));
        }
        else reject(`Wrong login credentials`);
      }, 500);
    });
}