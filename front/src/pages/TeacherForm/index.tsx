import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

const TeacherForm = () => {

    const history = useHistory();

    const [bio, setBio] = useState('');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const [cost, setCost] = useState('');
    const [subject, setSubject] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { weekday: 0, from: '', to: '' }
    ]);

    const addNewScheduleItem = () => {
        setScheduleItems([
            ...scheduleItems,
            { weekday: 0, from: '', to: '' }
        ]);
    }

    const handleCreateClass = (e: FormEvent) => {
        e.preventDefault();

        api.post('/classes', {
            name,
            avatar,
            bio,
            whatsapp,
            cost: Number(cost),
            subject,
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso.');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro.');
        })
    }

    const setScheduleItemValue = (position: number, field: string, value: string) => {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updateScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input
                            name="name"
                            value={name}
                            label="Nome Completo"
                            onChange={e => setName(e.target.value)}
                        />

                        <Input
                            name="avatar"
                            value={avatar}
                            label="Avatar"
                            onChange={e => setAvatar(e.target.value)}
                        />

                        <Input
                            name="whatsapp"
                            value={whatsapp}
                            label="WhatsApp"
                            onChange={e => setWhatsapp(e.target.value)}
                        />

                        <Textarea
                            name="bio"
                            value={bio}
                            label="Biografia"
                            onChange={e => setBio(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre Aula</legend>

                        <Select
                            name="subject"
                            value={subject}
                            label="Matéria"
                            onChange={e => setSubject(e.target.value)}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' }
                            ]}
                        />

                        <Input
                            name="cost"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                            label="Custo da sua hora por aula"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horário Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={index} className="schedule-item">
                                    <Select
                                        name="weekday"
                                        label="Dia da Semana"
                                        value={scheduleItem.weekday}
                                        onChange={e => setScheduleItemValue(index, 'weekday', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda' },
                                            { value: '2', label: 'Terça' },
                                            { value: '3', label: 'Quarta' },
                                            { value: '4', label: 'Quinta' },
                                            { value: '5', label: 'Sexta' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input
                                        label="De"
                                        name="from"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input
                                        name="to"
                                        type="time"
                                        label="Até"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;
