import React from 'react'
import PropTypes from 'prop-types'

const SearchBox = ({ value, onChange, onSubmit }) => (
  <div>
    <input type="text" value={ value } onChange={ onChange } />
    <button onClick={ onSubmit } >Search</button>
  </div>
)

SearchBox.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

export default SearchBox
