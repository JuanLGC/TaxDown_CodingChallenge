import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../components/header';
import { Form } from '../components/form';

export function Home() {
    return (
      <>
        <Header linkTo="/submissions" buttonText="Submissions"/>
        <Form />
      </>
    );
  }