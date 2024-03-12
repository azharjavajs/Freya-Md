/**
instagram @riz06y_
whatsapp wa.me/62882003146309
jangan dihapus ini wm anj
*/


import axios from 'axios'

export async function tiktok(url) {
    const base_url = "https://api.w03.savethevideo.com/tasks";
    const obj = { type: "info", url };

    try {
        const response = await axios.post(base_url, obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
        const h = data.href;
        const res = "https://api.w03.savethevideo.com/" + h;
        const respon = await axios.get(res);
        const y = respon.data;

        const result = {
            username: y.result.uploader,
            title: y.result.title,
            thumbnail: y.result.thumbnail,
            url: y.result.url,
        };

        console.log(result);

    } catch (error) {
        console.error(error);
        return error.message;
    }
}