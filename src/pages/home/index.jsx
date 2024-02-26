import React, { useEffect, useState } from 'react'
import ProductTile from '../../components/product-tile';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const result = await res.json();
        console.log(result);

        if (result) {
            setData(result);
            setLoading(false);
            setError(null);
        }

    } catch(e) {
        setError(e.message);
        setLoading(false);
    }
  }

  useEffect(()=> {
    fetchData();
  }, [])

  if (error) {
    return <div>
        <h1>Something went wrong...</h1>
        <p>{error}</p>
    </div>
  }

  if (loading) {
    return <div>
        <h1>Loading...</h1>
    </div>
  }


  return (
    <div className='h-screen mt-5'>
        {
            !loading && !error && data ? <div>
                <h1 className='text-gray-800 text-3xl text-center font-semibold'>Product list</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-6'>
                    {
                        data.map(item => {
                            return <ProductTile item={item} key={item.id} />;
                        })
                    }
                </div>
            </div> : <div>
                Something went wrong! Please try again later!
            </div>
        }
    </div>
  )
}
