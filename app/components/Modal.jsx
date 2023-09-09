import React, { useState } from 'react';
import classes from './Modal.module.css';
import modalImage from '../../public/modal-img.jpg';
import Image from 'next/image';

export default function Modal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleModalClick = (e) => {
    // Предотвращаем закрытие модального окна при клике на само модальное окно
    e.stopPropagation();
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Проверка валидности email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailPattern.test(inputEmail);

    setIsEmailValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage('Пожалуйста, заполните поле для email');
      return;
    }

    if (!isEmailValid) {
      setErrorMessage('Пожалуйста, введите корректный e-mail');
      return;
    }

    // Добавьте здесь код для отправки данных, если необходимо

    // Очистить поле email после успешной отправки (если нужно)
    setEmail('');
    setErrorMessage('')
    // Закрыть модальное окно после успешной отправки
    onClose();
  };

  return !isOpen ? null : (
    <div className={classes.backdrop} onClick={onClose}>
      <button onClick={onClose} className={classes['modal-button']}>
      &#10005;
      </button>
      <div className={classes.modal} onClick={handleModalClick}>
        <div className={classes['modal-form--container']}>
          <div className={classes['modal-form--title']}>Почтовая рассылка</div>
          <div className={classes['modal-form--descr']}>Подпишитесь и получайте наши новости первыми</div>
          <form className={classes['modal-form']} onSubmit={handleSubmit} noValidate>
            {errorMessage && <label htmlFor="email" className={classes['modal-error']}>{errorMessage}</label>}
            <input
              className={classes['modal-form--input']}
              type='email'
              required
              id="email"
              name="email"
              placeholder='ВАШ E-MAIL'
              value={email}
              onChange={handleEmailChange}
            />
            
            <div className={classes['modal-form--label']}>
              Спасибо за подписку!
            </div>
            <button className={classes['modal-form--btn']} type="submit">
              Подписаться
            </button>
          </form>
        </div>
        <Image src={modalImage} />
      </div>
    </div>
  );
}