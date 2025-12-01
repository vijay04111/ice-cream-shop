import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { AddProductValidations } from '../validations/AddProductValidations';

function Add() {

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  


  function sendProductData(data)
  {
    axios.post('http://localhost:5001/icecremes',data).then((res)=>{
      alert("Data Stored Succesfully" )
        console.log(res.data);
        reset();
    }).catch((error)=>{
        console.log(error);
        
    })
  }

  return    <>

    {/* Form Start Form Here */}
      <div
        style={{ display: "flex",justifyContent: "center",marginTop: "40px",}}>
        <form style={{ width: "400px" }} onSubmit={handleSubmit(sendProductData)}>
          
          <h3 className="text-center mb-4 fw-bold">Ice Cream Product</h3>

          <p className='text-danger'>{errors.name && errors.name.message}</p>
          <div className="mb-3">
            <label className="form-label">Ice Cream Name</label>
            <input type="text" className="form-control" {...register('name' , AddProductValidations.name)}/>
          </div>

          <p className='text-danger'>{errors.category && errors.category.message}</p>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input type="text" className="form-control" {...register('category' , AddProductValidations.category)}/>
          </div>

          <p className='text-danger'>{errors.flavours && errors.flavours.message}</p>
          <div className="mb-3">
            <label className="form-label">Flavours</label>
            <input type="text" className="form-control" {...register('flavours' , AddProductValidations.flavours)} />
          </div>

          <p className='text-danger'>{errors.size && errors.size.message}</p>
          <div className="mb-3">
            <label className="form-label">Size</label>
            <input type="text" className="form-control" {...register('size' , AddProductValidations.size)}/>
          </div>

          <p className='text-danger'>{errors.price && errors.price.message}</p>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" {...register('price', AddProductValidations.price)}/>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" {...register('available' )} />
            <label className="form-check-label">Is Available</label>
          </div>

          <button className="btn btn-primary w-100">Submit</button>
        </form>
      </div>

{/* Table */}

        
    </>
  
}

export default Add;
