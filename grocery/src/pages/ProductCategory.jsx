import React from 'react'
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
  
const {products} = useAppContext();
const {category} = useParams();
const searchCategory = categories.find((item) => item.path.toLowerCase() === category);
const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)

    return (
    <div className='mt-16'>
        {
            searchCategory && (
                <div>
                    <p className=' text-2xl'>{searchCategory.text.toUpperCase()}</p>
                    <div className='w-16 h-0.5 bg-indigo-600 rounded-full'>

                    </div>
                </div>
            )
        }

        {
            filteredProducts.length > 0 ? (
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 place-items-center'>
                    {
                        filteredProducts.map((product, index) => (
                            <ProductCard key={product._id} product={product}/>
                        ))
                    }
                </div>
            ):(
                <div className='flex items-center justify-center h-[60vh]'>
                    <p className='text-2xl font-medium text-gray-500'>
                        No Products Found in this category
                    </p>
                </div>
            )
        }
        
    </div>
  )
}

export default ProductCategory