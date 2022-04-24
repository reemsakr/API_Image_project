import supertest from 'supertest';
import app from '../index';
import imageExist from '../utilities/validateInputs';
import resizeImage from '../utilities/sharp';

const request = supertest(app);

describe('to test endpoint response', () => {
  it('get the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('expect a message when you enter a wrong imageName', async () => {
    const response = await request.get(
      '/api/images?imageName=ffft&hight=100&width=100'
    );
    expect(response.text).toBe(
      'image is not found ,please enter the right name'
    );
  });

  it('expect a message when you enter a wrong value for hight and width', async () => {
    const response = await request.get(
      '/api/images?imageName=fjord&hight=kk&width=tt'
    );
    expect(response.text).toBe('please enter a valid size');
  });
});

describe('to test utilities function', () => {
  it('expect imageExist functin to return true with image name fjord.jpg exist in full folder', () => {
    expect(imageExist('fjord.jpg', 'full')).toBe(true);
  });

  it('expect imageExist functin to return true with image name fjord.jpg does not exist in resize folder', () => {
    expect(imageExist('fjord.jpg', 'resize')).not.toBe(true);
  });

  it('expect resizeImage functin to return the "assets/images/resize/fjord_300_500.jpg" path of fjord.jpg with hight=300 and width=500', async () => {
    const response = await resizeImage('fjord', 300, 500);
    expect(response).toEqual('assets/images/resize/fjord_300_500.jpg');
  });
});
