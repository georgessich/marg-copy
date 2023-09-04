import React from "react";

export default function SubForm() {
  return (
    <div className="flex py-20 w-2/3 mx-auto justify-center">
        <div className="py-10">Все новости и мероприятия издательства</div>
      <div className="flex flex-col mx-auto w-2/4 py-10">
        <div>
          Подписывайтесь на рассылки Ad Marginem и А+А!
        </div>
        <p>
          В рассылке Ad Marginem рассказываем о новинках и акциях, дарим
          промокоды и делимся материалами:
        </p>
        <form novalidate="novalidate">
          <div>
            <div>
              
          
              <input
                type="text"
                placeholder="Ваш e-mail"
                required=""
                name="mail"
              />
              <button type="submit">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                >
                  
                  <path
                    fill="#000"
                    fill-rule="nonzero"
                    d="M15.59 6.34l-5.302-5.303.933-.933 6.793 6.792L17.91 7l.104.104-6.793 6.792-.933-.933L15.59 7.66H0V6.34h15.59z"
                  ></path>
                </svg>
              </button>
            </div>
            <p>
              Чтобы получать специальную рассылку от издательского проекта А+А,
              <br /> заполните форму по
              <a href="https://admarginem.ru/a-a-subscribe/" target="_blank">
                ссылке
              </a>
            </p>
            <div>Спасибо за подписку!</div>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
}
