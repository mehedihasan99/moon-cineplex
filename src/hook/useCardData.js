import { useContext } from 'react'
import { CardDataContext } from '../context'

function useCardData() {
  const { state, dispatch } = useContext(CardDataContext)
  return { state, dispatch }
}
export default useCardData
