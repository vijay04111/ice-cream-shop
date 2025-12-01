import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { productContext } from './Services';
import "./ViewProduct.css";

function ViewProduct() {

  const myproductContext = useContext(productContext);

  useEffect(() => {
    myproductContext.getProductData()
  }, []);

  return (
    <>
      <div className="butterfly-bg">

       
        <div className="butterfly b1"></div>
       
        <div className="butterfly b5"></div>

        <div className="table-container w-75 fade-in" style={{ margin: "30px auto" }}>

          <table className='table table-bordered table-hover table-striped text-center slide-up'>
            <thead>
              <tr className="fade-row">
                <th>Ice Creame Name</th>
                <th>Category</th>
                <th>Flavours</th>
                <th>Size</th>
                <th>Price</th>
                <th>Is Available</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {
                myproductContext.products.map((ice) => (

                  <tr className="row-animate" key={ice.id}>
                    <td>{ice.name}</td>
                    <td>{ice.category}</td>
                    <td>{ice.flavours}</td>
                    <td>{ice.size}</td>
                    <td>{ice.price}</td>
                    <td><input type='checkbox' checked={ice.available} readOnly /></td>
                    <td className='d-flex justify-content-between'>
                      <Link className='btn btn-primary zoom-btn' to={`/edit/${ice.id}`}>EDIT</Link>
                      <Link className='btn btn-danger zoom-btn' onClick={() => { myproductContext.deleteProduct(ice.id) }}>DELETE</Link>
                    </td>
                  </tr>

                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewProduct;
