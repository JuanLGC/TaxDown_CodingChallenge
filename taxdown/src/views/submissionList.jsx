import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../components/header';
import { Submissions } from '../components/submissions';

export function SubmissionList() {
    return (
      <>
        <Header linkTo="/" buttonText="Back Home"/>
        <Submissions />
      </>
    );
  }