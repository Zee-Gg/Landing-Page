import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  company?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  company,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> {firstName}</p>
    <p><strong>Email:</strong> {email}</p>
    {company && <p><strong>Company:</strong> {company}</p>}
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);
