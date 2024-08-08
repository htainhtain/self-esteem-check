import { configureStore } from '@reduxjs/toolkit'
import navReducer from './navSlice.js'
import themeReducer from './themeSlice.js'
import depressionTestReducer from './depressionTestSlice.js'
import relationshipTestReducer from './relationshipTestSlice.js'
import anxietyTestReducer from './anxietySlice.js'

export const store = configureStore({
  reducer: {
    nav: navReducer,
    theme: themeReducer,
    depressionTest: depressionTestReducer,
    relationshipTest:relationshipTestReducer,
    anxietyTest: anxietyTestReducer,
  },
})