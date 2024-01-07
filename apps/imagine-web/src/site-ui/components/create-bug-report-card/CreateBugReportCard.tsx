import { Link } from 'wouter';
import { Card } from '../card/Card';
import { Form } from '../form/Form';
import { Input } from '../input/Input';
import { toast } from 'react-toastify';
import { UserGuard } from '@imagine-cms/web';
import { Textarea } from '../textarea/Textarea';
import { GuestGuard } from '../guest-guard/GuestGuard';
import { ButtonBrand } from '../button/Button.remix';
import React, { SyntheticEvent, useState } from 'react';
import { useBugReportCreate } from '@imagine-cms/client';
import { CreateBugReportCardProps } from './CreateBugReportCard.types';

export function CreateBugReportCard({ onCreate }: CreateBugReportCardProps) {
  const [url, setURL] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const createBugReport = useBugReportCreate();

  const isDisabled = !url || !content || !title;

  const onCreateBugReport = async (event?: SyntheticEvent) => {
    event?.preventDefault();
    try {
      if (isDisabled) {
        return;
      }
      const newBugReport = await createBugReport.execute({ content, title, url });
      toast.success(`Successfully created bug report ${newBugReport.id}`)
      setURL('');
      setContent('');
      setTitle('')
      onCreate(newBugReport);
    } catch (e: any) {
      toast.error('Failed to create bug report due to an error');
    }
  }

  return (
    <Card header="New Bug Report">
      <GuestGuard redirect={false}>
        <p><Link to="/login">Login</Link> to submit bug reports</p>
      </GuestGuard>
      <UserGuard redirect={false}>
        <Form onSubmit={onCreateBugReport} disabled={isDisabled}>
          <label>Describe the problem in a few short words</label>
          <Input type="text" value={title} onChange={e => setTitle(e.currentTarget.value ?? '')} />
          <label>Paste the URL of where you encounter the bug</label>
          <Input type="text" value={url} onChange={e => setURL(e.currentTarget.value ?? '')} />
          <label>Describe the issue</label>
          <Textarea rows={10} value={content} onChange={setContent} />
          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <ButtonBrand type="submit" disabled={isDisabled}>Save</ButtonBrand>
          </div>
        </Form>
      </UserGuard>
    </Card>
  )
}