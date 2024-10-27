'use client';
import { toast } from 'react-toastify';
import { Form } from '../../../components/form/Form';
import { Input } from '../../../components/input/Input';
import { useSessionUpdateEmail } from '@imagine-cms/client';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Accordion } from '../../../components/accordion/Accordion';
import { ButtonBrand } from '../../../components/button/Button.remix';

export function ChangeEmailAddressForm() {
  const sessionUpdateEmail = useSessionUpdateEmail();
  const [emailAddress, setEmailAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const isDisabled =
    !emailAddress || !currentPassword || sessionUpdateEmail.loading;

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target?.value ?? '');
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target?.value ?? '');
  };

  const onSaveEmailChanges = async (event: SyntheticEvent) => {
    event?.preventDefault();
    try {
      if (isDisabled) {
        return;
      }
      await sessionUpdateEmail.execute({
        email: emailAddress,
        password: currentPassword,
      });
      setCurrentPassword('');
      toast.success('Your email has been updated');
    } catch {
      toast.error('Your email could not be changed');
    }
  };

  return (
    <Accordion header="Change Email">
      <Form onSubmit={onSaveEmailChanges}>
        <label>Email Address</label>
        <Input onChange={onChangeEmail} type="email" />
        <label>Password</label>
        <Input onChange={onChangePassword} type="password" />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonBrand disabled={isDisabled} type="submit">
            Update Email
          </ButtonBrand>
        </div>
      </Form>
    </Accordion>
  );
}
