import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" alt="Avatar" />
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                    <br /><br />
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp" />
                        Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
