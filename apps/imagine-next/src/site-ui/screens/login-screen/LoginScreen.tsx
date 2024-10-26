
'use client'
import { toast } from 'react-toastify';
import React, { SyntheticEvent, useState } from 'react';
import { GuestGuard, useSignInWithUsernameAndPassword } from '@imagine-cms/web';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';


export function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { tryLogin } = useSignInWithUsernameAndPassword(username, password);

  const onLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!username || !password) {
      toast.error('You must provide a username and password');
    }
    tryLogin();
  }

  return (
    <GuestGuard>
      <div className="login-container bg-light">
        <div className="logo">
          <img src="/logo.png" alt="Logo" height="50" />
        </div>
        <Container className="login-form">
          <h3 className="text-center mb-4">Login</h3>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Enter username"
                className="form-control"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
            </FormGroup>
            <Button color="primary" block>
              Login
            </Button>
          </Form>
        </Container>

        <footer className="text-center mt-4">
          &copy; 2023 Habbo Retro
        </footer>

        <style jsx>{`
        .login-container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .logo {
          position: absolute;
          top: 20px;
          left: 20px;
        }
        .login-form {
          max-width: 400px;
          width: 100%;
          padding: 30px;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        footer {
          position: absolute;
          bottom: 10px;
          width: 100%;
        }
      `}</style>
      </div>
    </GuestGuard>
  )
}
