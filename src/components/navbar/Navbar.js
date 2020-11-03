import React from 'react'
import { Table } from 'react-bootstrap'
import { setCategory } from '../../redux/actions/categoriesActions'
import { connect } from 'react-redux'

const Navbar = ({ setCategory }) => {
  return (
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>Catégories</th>
        </tr>
      </thead>
      <tbody>
        <tr
          onClick={() => setCategory('contacts')}
          style={{ cursor: 'pointer' }}
        >
          <td>Contacts</td>
        </tr>
        <tr onClick={() => setCategory('mails')} style={{ cursor: 'pointer' }}>
          <td>Courriers</td>
        </tr>
        <tr onClick={() => setCategory('notes')} style={{ cursor: 'pointer' }}>
          <td>Notes</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default connect(null, { setCategory })(Navbar)
