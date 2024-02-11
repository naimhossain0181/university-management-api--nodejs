import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: 'dldqqwqzk',
    api_key: '589326625417236',
    api_secret:process.env.apiSecret,
    secure: true,
});

export const cloudinaryFileUploader =(file,folder,public_id)=>{
    return (
        cloudinary.uploader.upload(file,{
            folder:`education/${folder}`,
            public_id:public_id,
            overwrite:true,
        })
    )
}
