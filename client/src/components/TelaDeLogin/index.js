// /components/TelaDeLogin/index.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    width: 100%;

    label {
        margin-bottom: 5px;
        font-weight: bold;
    }

    input {
        width: 94%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;

        &::placeholder {
            color: #999;
            font-style: italic;
        }
    }

    .forgot-password {
        font-size: 12px;
        color: #007bff;
        text-decoration: none;
        margin-top: 0px;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    .button-enter {
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .button-enter:hover {
        background-color: #45a049;
    }

    .button-create {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .button-create:hover {
        background-color: #0056b3;
    }
`;
const TelaDeLogin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const verificaUsuario = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: email, password: senha }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login falhou');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.message === 'Login bem-sucedido') {
                navigate('/inicio');
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    };
    return (
        <Login onSubmit={verificaUsuario}>
            <label htmlFor='username'></label>
            <input
                required
                placeholder='Email'
                type='email'
                id='username'
                name='username'
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'></label>
            <input
                required
                placeholder='Senha'
                type='password'
                id='password'
                name='password'
                onChange={(e) => setSenha(e.target.value)}
            />
            <button type='submit' className="button-enter">Entrar</button>
            <a href="/forgot-password" className="forgot-password">Esqueceu a senha?</a>
            <button type='submit' className="button-create">Criar nova conta</button>
        </Login>
    );
};

export default TelaDeLogin;