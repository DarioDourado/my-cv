import React from 'react';
import { Typography } from '@mui/material';

const PersonalInfo = () => {
  return (
    <div className="container mx-auto p-4">

      <div className='flex items-center justify-end'>
        <div>
          <svg width="35" height="35" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C5.59476 0 0 5.59476 0 12.5C0 19.4052 5.59476 25 12.5 25C19.4052 25 25 19.4052 25 12.5C25 5.59476 19.4052 0 12.5 0ZM12.5 4.83871C14.9496 4.83871 16.9355 6.8246 16.9355 9.27419C16.9355 11.7238 14.9496 13.7097 12.5 13.7097C10.0504 13.7097 8.06452 11.7238 8.06452 9.27419C8.06452 6.8246 10.0504 4.83871 12.5 4.83871ZM12.5 22.1774C9.54133 22.1774 6.89012 20.8367 5.11593 18.7399C6.06351 16.9556 7.91835 15.7258 10.0806 15.7258C10.2016 15.7258 10.3226 15.746 10.4385 15.7812C11.0938 15.9929 11.7792 16.129 12.5 16.129C13.2208 16.129 13.9113 15.9929 14.5615 15.7812C14.6774 15.746 14.7984 15.7258 14.9194 15.7258C17.0817 15.7258 18.9365 16.9556 19.8841 18.7399C18.1099 20.8367 15.4587 22.1774 12.5 22.1774Z" fill="#FFA200" />
          </svg>
        </div>
        <div className='flex ml-6 border-b-2 border-b-white'>
          <span className='text-2xl sm:text- md:text-4xl xl:text-6xl  font-bold text-white mr-2'>Contacts</span>
        </div>
      </div >


      <div className='flex w-full items-center justify-end'>
        <div className=''>
          <svg width="35" height="35" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C5.59476 0 0 5.59476 0 12.5C0 19.4052 5.59476 25 12.5 25C19.4052 25 25 19.4052 25 12.5C25 5.59476 19.4052 0 12.5 0ZM12.5 4.83871C14.9496 4.83871 16.9355 6.8246 16.9355 9.27419C16.9355 11.7238 14.9496 13.7097 12.5 13.7097C10.0504 13.7097 8.06452 11.7238 8.06452 9.27419C8.06452 6.8246 10.0504 4.83871 12.5 4.83871ZM12.5 22.1774C9.54133 22.1774 6.89012 20.8367 5.11593 18.7399C6.06351 16.9556 7.91835 15.7258 10.0806 15.7258C10.2016 15.7258 10.3226 15.746 10.4385 15.7812C11.0938 15.9929 11.7792 16.129 12.5 16.129C13.2208 16.129 13.9113 15.9929 14.5615 15.7812C14.6774 15.746 14.7984 15.7258 14.9194 15.7258C17.0817 15.7258 18.9365 16.9556 19.8841 18.7399C18.1099 20.8367 15.4587 22.1774 12.5 22.1774Z" fill="#FFA200" />
          </svg>
        </div>
        <div className='flex ml-6 border-b-2 border-b-white'>
          <Typography variant='h5'>
            Contacts
          </Typography>
        </div>
      </div >

      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed md:leading-loose">
            Este é um exemplo de texto responsivo usando Tailwind CSS. Ajuste a largura da janela para ver como o texto muda de tamanho conforme o breakpoint definido.
          </p>
        </div>
      </div>
      <div className='flex w-full items-center justify-end mt-6'>

      </div>






    </div >
  )
}



export default PersonalInfo