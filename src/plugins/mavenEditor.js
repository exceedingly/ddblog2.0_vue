// import axios from 'axios'
import axios from '@/request'
//上传md文件
export function postMd(name,typeId,content){
    return  axios.post('/saveMd', {
        name: name,
        typeId: typeId,
        content: content
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

//上传图片
export const uploadFile = (params) => {
    return axios({
        method: 'post',
        url: `/uploadFile`,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
