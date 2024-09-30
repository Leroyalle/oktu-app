import React from 'react';

interface Props {
  role: string;
  fullName: string;
  phone?: string;
  email?: string;
  className?: string;
}

export const ContactsTableItem: React.FC<Props> = ({ role, fullName, phone, email }) => {
  return (
    <>
      <td>{role}</td>
      <td>{fullName}</td>
      {phone && email && (
        <>
          <td>{'+' + phone || ''}</td>
          <td>
            <a href={`mailto:${email}`}>{email || ''}</a>
          </td>
        </>
      )}
    </>
  );
};
