/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(`see values`, value);

  function onSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);


    socket.timeout(1000).emit('create-something', value, () => {
      setIsLoading(false);
    });

    socket.emit('pi', value, () => {
        setIsLoading(false);
    } );
  }

  return (
    <form onSubmit={ onSubmit }>
      <input onChange={ e => {
        setValue(e?.target?.value) 
      } } />

      <button type="submit" disabled={ isLoading }>Submit</button>
    </form>
  );
}