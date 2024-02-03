import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { rootState, AppDispatch } from '../redux/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector
