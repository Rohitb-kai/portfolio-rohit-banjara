import React from 'react'
import ContactForm from './ContactForm'
import ContactsecLeft from './ContactsecLeft'

const Contactsecond = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-2 sm:mx-28 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-0">
            <ContactsecLeft/>
           <ContactForm/>
          </div>
    </div>
  )
}

export default Contactsecond