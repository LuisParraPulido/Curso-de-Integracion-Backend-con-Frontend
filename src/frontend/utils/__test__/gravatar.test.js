import gravatar from '../gravatar';

describe('Gravatar function', () => {
  it('Should return gravatar default url', () => {
    const email = 'luis.parra@gmail.com';
    const gravatarDefaultImage = 'https://gravatar.com/avatar/fb76a0af0afadaf77bcded9cd9e4a798';
    expect(gravatar(email)).toEqual(gravatarDefaultImage)
  });
});
