import React from 'react';

type Props = {
   contactTitle: string | null
   contactValue: string | null
}

export const Contact = ({contactTitle, contactValue}: Props) => {
   return (
      <div>
         <b>{contactTitle}</b>: {contactValue}
      </div>
   );
};