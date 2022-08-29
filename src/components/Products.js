import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import ShowProducts from './ShowProducts'

const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter ] = useState([])
    const [loading, setLoading ] = useState(false)
    const componentMounted = true

    useEffect(() => {

        const getProducts = async() => {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            if(componentMounted){
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }

            return ()=>{
                componentMounted = false
            }
         }

        getProducts()

    },[])

   

  return (
    <div className='container py-5 my-5'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                <hr/>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading /> : <ShowProducts filter ={filter} setFilter ={setFilter} data = {data}/>}
            </div>
        </div>
    </div>
  )
}

export default Products