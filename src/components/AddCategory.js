import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {
  
  const [ inputValue , setInpuValue ] = useState( '' );

  const handleInputChange = ( e ) => {
    setInpuValue( e.target.value );
  }

  const handleSubmit = ( e ) => {

    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      setCategories( cats => [ inputValue , ...cats ] );
      setInpuValue( '' );
    }

  }

  return (
    
    <form onSubmit={ handleSubmit }>
      <input type="text"
        name="txtCategory"
        placeholder="Ingrese Categoria"
        value={ inputValue }
        onChange={ handleInputChange }/>
      
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}



export default AddCategory
