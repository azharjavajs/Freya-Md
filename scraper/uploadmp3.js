/**
instagram @riz06y_
whatsapp wa.me/62882003146309
jangan dihapus ini wm anj
*/

import axios from "axios";
import FormData from "form-data";
import { fileTypeFromBuffer } from "file-type";

export async function Uploader(buffer) {
    const url = "https://hostfile.my.id/api/upload";

    const { ext } = await fileTypeFromBuffer(buffer);

    const formData = new FormData();
    formData.append("file", buffer, {
      filename: Date.now() + "." + ext,
    });

    const response = await axios.post(url, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });
    return response.data; 
}