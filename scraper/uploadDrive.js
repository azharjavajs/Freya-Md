/**
instagram @riz06y_
whatsapp wa.me/62882003146309
jangan dihapus ini wm anj
*/


import fs from 'fs'
  import {GoogleAuth} from 'google-auth-library'
  import {google} from 'googleapis'
  
/**
 * Insert new file.
 * @return{obj} file Id
 * */
export async function uploadBasic(file) {

  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
  });
  const service = google.drive({version: 'v3', auth});
  const requestBody = {
    name: 'photo.jpg',
    fields: 'id',
  };
  const media = {
    mimeType: 'image/jpeg',
    body: fs.createReadStream(file),
  };
  try {
    const file = await service.files.create({
      requestBody,
      media: media,
    });
    console.log('File Id:', file.data.id);
    return file.data.id;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
}