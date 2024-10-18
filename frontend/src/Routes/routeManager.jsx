import React from 'react'

import {Routes, Route} from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import Home from '../Components/Main/home.jsx'
import OurPurpose from '../Components/Main/pages/our-purpose.jsx'
import CompareLooks from '../Components/Main/pages/compare-looks.jsx'

import NotFound from '../Components/Main/notFound'
import Partner from '../Components/Main/pages/partner.jsx'
import Eyewears from '../Components/Main/eyewears/eyewears.jsx'
import SingleProductPage from '../Components/Main/pages/single-product_page.jsx'
import HomeTest from '../Components/Main/pages/home-test.jsx'

function RouteManager() {
  return (
    <Box w='100%' >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-purpose" element={<OurPurpose />} />
            <Route path="/compare-looks" element={<CompareLooks />} />
            <Route path="/partners" element={<Partner />} />
            <Route path="/eyewears" element={<Eyewears />} />
            <Route path="/eyewears/:productId" element={<SingleProductPage />} />
            <Route path="/home-test" element={<HomeTest />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Box>
  )
}

export default RouteManager