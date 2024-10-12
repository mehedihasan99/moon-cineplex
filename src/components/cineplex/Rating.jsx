import React from 'react'
import { FaRegStar } from 'react-icons/fa6'
export default function Rating({ rating }) {
  const ratings = new Array(rating).fill('')
  return (
    <>
      {ratings.map((_, index) => (
        <FaRegStar color="green" key={index} />
      ))}
    </>
  )
}
