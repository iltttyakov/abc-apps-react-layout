import React, {useState} from 'react';
import cls from './ImageInput.module.scss'


const ImageInput = (
    {
        name,
        register,
        currentImage = null,
        label = null,
        disabled,
    }
) => {
    let [selectedImage, setSelectedImage] = useState(null)

    const uploadFile = (file) => {
        if (
            file.type === 'image/png' ||
            file.type === 'image/jpeg' ||
            file.type === 'image/jpg'
        ) {
            setSelectedImage(file)
        } else {
            alert('Загрузите изображение')
        }
    }

    return (
        <div className={[cls.box, disabled ? cls.disabled : null].join(' ')}>
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
                                uploadFile(e.target.files[0])
                            }
                        })}
                        accept={'image/png,image/jpeg,image/jpg'}
                        disabled={disabled}
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