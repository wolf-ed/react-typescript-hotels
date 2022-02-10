import React, { useState } from 'react';

import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';

import styles from './images.module.css';
import Modal from '../Modal/Modal';

const Images: React.FC<{ imagesArray: any[] }> = (props) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const arrayOfImagesLength = props.imagesArray.length - 1;
  const displayButtons = arrayOfImagesLength > 0;

  const prevImageHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentImage === 0) {
      setCurrentImage(arrayOfImagesLength);
    } else {
      setCurrentImage((prevState) => prevState - 1);
    }
  };

  const nextImageHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentImage === arrayOfImagesLength) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prevState) => prevState + 1);
    }
  };

  const clickImageHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    setShowImageModal(true);
  };

  const hideModalHandler = () => {
    setShowImageModal(false);
  };

  const leftButton = (
    <button
      onClick={prevImageHandler}
      className={styles['images-buttons-left']}
    >
      <GrPrevious className={styles['button-icon']} />
    </button>
  );
  const rightButton = (
    <button
      onClick={nextImageHandler}
      className={styles['images-buttons-right']}
    >
      <GrNext className={styles['button-icon']} />
    </button>
  );

  let modal = (
    <Modal onClose={hideModalHandler}>
      <img
        className={styles['modal-img']}
        src={`${props.imagesArray[currentImage].url}`}
        alt={`number${currentImage}`}
      />
    </Modal>
  );

  return (
    <div className={styles['images-container']}>
      {displayButtons && leftButton}
      <img
        src={`${props.imagesArray[currentImage].url}`}
        alt={`number${currentImage}`}
        onClick={clickImageHandler}
      />
      {displayButtons && rightButton}
      {displayButtons && rightButton}
      {showImageModal && modal}
    </div>
  );
};

export default Images;
