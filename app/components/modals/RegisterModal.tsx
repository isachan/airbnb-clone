'use client';

import React, { useState, useCallback } from 'react';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import { Modal } from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: { name: '', email: '', password: '' } });

  //ASYNC AWAIT
  // const onSubmit: SubmitHandler<FieldValues> = async data => {
  //     setIsLoading(true);
  //     try {
  //         await axios.post('/api/auth/register', data);
  //         registerModal.onClose();
  //     } catch (err) {
  //         console.error(err);
  //     }
  // }

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);
    axios
      .post('/api/auth/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subtitle='Create an account!' />
      <Input id='email' label='email' disabled={isLoading} register={register} errors={errors} required />
      <Input id='name' label='name' disabled={isLoading} register={register} errors={errors} required />
      <Input id='password' label='password' type='password' disabled={isLoading} register={register} errors={errors} required />
    </div>
  );

  return <Modal disabled={isLoading} isOpen={registerModal.isOpen} title='Register' actionLabel='Continue' onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} />;
};

export default RegisterModal;
