import React from 'react';

const Contact = () => {
  return (
    <section className='my-28' id='contact'>
      <center>
<header className='text-2xl font-bold pt-10'>
        <h2>Kontakt</h2>
      </header>
        </center>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>Konstantin Kremer</p>
            <p className='font-thin'>Stuttgart, Germany</p>
            <a href='mailto: konstantin1103@gmx.de 'target='_blank' rel='noreferrer' className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-0auto'>
              konstantin1103@gmx.de
            </a>
        
          <a href='/images/icons/lebenslauf.pdf'target='_blank' rel='noreferrer' className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-0auto'>
              resumé
            </a>
          <div className='flex flex-row flex-wrap mt-7'>
            

            

            </div>
          </div>
        </div>
      </div>
      <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
        
      </div>
    </section>
  );
};

export default Contact;
