import React, {useState} from 'react';
import cls from './ImageInput.module.scss'


const ImageInput = (
    {
        name,
        register,
        currentImage = null,
        label = null
    }
) => {
    let [selectedImage, setSelectedImage] = useState(null)

    return (
        <div className={cls.box}>
            {
                label
                    ? <p className={cls.label}>
                        {label}
                    </p>
                    : null
            }
            {
                selectedImage || currentImage
                    ? <div className={cls.imageContainer}>
                        <img
                            className={cls.image}
                            width={70}
                            src={
                                selectedImage
                                    ? URL.createObjectURL(selectedImage)
                                    : currentImage
                            }
                            alt={''}
                        />
                    </div>
                    : null
            }
            <div className={cls.bottom}>
                <label className={cls.button}>
                    <input
                        type={'file'}
                        name={name}
                        className={cls.field}
                        {...register(name, {
                            onChange: e => {
                                setSelectedImage(e.target.files[0])
                            }
                        })}
                    />
                    Выберите файл
                </label>
                <span className={cls.fileName}>
                    Файл не выбран
                </span>
            </div>
        </div>
    );
};


export default ImageInput;