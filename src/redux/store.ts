import {configureStore} from '@reduxjs/toolkit'
import videoReducer from './videoSlice.ts'
import {useDispatch} from 'react-redux'

export const store = configureStore({
    reducer: {
        video: videoReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()