import { Routes, Route } from 'react-router-dom'
import React from 'react'

import {

  Private,
  
} from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Private />} />
    
    </Routes>
  )
}
