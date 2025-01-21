import React from 'react'
import { getImgUrl } from '../../utils/getImgUrl'
import { useParams } from "react-router-dom"
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
import  booksApi, { useFetchBookByIdQuery } from '../../redux/features/books/booksApi'

const SingleBook = () => {
    const {id} = useParams();
    const {data:book,isLoading,isError} = useFetchBookByIdQuery(id);

    const dispatch = useDispatch();

  const handleAddTocart = (product) =>{
    dispatch(addToCart(product));
  }

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error happening to load book info</div>
  return (
    <div className='max-w-lg shadow-md p-5'>
        <h1 className='text-2xl font-bold mb-6'>{booksApi.title}</h1>
        <div className=''>
            <div>
                <img
                   src={`${getImgUrl(book.coverImage)}`}
                   alt={book.title}
                   className='mb-8'
                />
            </div>
            <div className='mb-5'>
                <p className='text-gray-700 mb-2'><strong>Author:</strong>{book.author ||
                'admin'}</p>
                <p className='text-gray-700 mb-4'>
                    <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString
                    ()}
                </p>
                <p className='text-gray-700 mb-4 capitalize'>
                    <strong>Category:</strong> {book?.category}
                </p>
                <p className='text-gray-700'><strong>Description</strong> {book.description}
                </p>
            </div>
            <button onClick={() => handleAddTocart(book)} className='btn-primary px-6 
            space-x-1 flex items-center gap-1'>
                <FiShoppingCart className=''/>
                <span>Add to cart</span>
            </button>
        </div>
      
    </div>
  )
}

export default SingleBook

