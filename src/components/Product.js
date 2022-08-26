import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loading from './Loading'
import ShowProduct from './ShowProduct'
import ShowProducts from './ShowProducts'


const Product = () => {

    const { id } = useParams()
    const [ product, setProduct ] = useState([])
    const [ loading, setLoading ] = useState(false)

   

    useEffect(()=>{
        const getProduct = async() => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    },[])
 
  return (
    <div className='d-flex'>
        <div className='container py-5 my-5'>
            <div className='row'>
                {
                    loading ? <Loading /> : <ShowProduct product = {product}  />
                }
            </div>
        </div>
    </div>
  )
}

export default Product