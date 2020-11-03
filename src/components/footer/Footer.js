import React from 'react'

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <p className='lead mb-2'>
        EasyMind | Développé par{' '}
        <a
          href='https://www.juliendelusseau.fr'
          target='_blank'
          rel='noopener noreferrer'
        >
          Julien Delusseau
        </a>
      </p>
      <small>&copy; 2020, tous droits réservés</small>
    </footer>
  )
}

export default Footer
