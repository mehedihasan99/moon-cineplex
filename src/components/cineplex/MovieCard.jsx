import React, { useState } from 'react'
import { toast } from 'react-toastify'
import useCardData from '../../hook/useCardData'
import { getImgUrl } from '../../utils/cineplex-utils'
import MovieDetailsModal from './MovieDetailsModal'
import Rating from './Rating'

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const { state, dispatch } = useCardData()
  function handleAddMovieToCart(e, movie) {
    e.stopPropagation()
    const found = state.cardData.find((data) => data.id === movie.id)
    if (!found) {
      dispatch({
        type: 'ADD_TO_CARD',
        movie: { ...movie },
      })
      toast.success('Successfully added !', {
        position: 'top-center',
      })
    } else {
      toast.error('Item is already added !', {
        position: 'top-left',
      })
    }
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onCloseModal={() => {
            setSelectedMovie(null)
            setShowModal(false)
          }}
          onAddToCart={handleAddMovieToCart}
        />
      )}

      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a
          href="#"
          onClick={() => {
            setSelectedMovie(movie)
            setShowModal(true)
          }}
        >
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={movie.rating} />
            </div>
            <button
              onClick={(e) => handleAddMovieToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  )
}
