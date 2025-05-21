import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ChoosePaymentType from './pages/ChoosePaymentType'
import BuyGiftCardPage from './pages/BuyGiftCardPage'
import BuyAirtimePage from './pages/BuyAirtimePage'
import OffPayments from './pages/OffPayments'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/choose-payment' element={<ChoosePaymentType />} />
        <Route path='/buy/gift-card' element={<BuyGiftCardPage />} />
        <Route path='/buy/air-time' element={<BuyAirtimePage />} />
        <Route path='/buy/off-payments' element={<OffPayments />} />
      </Routes>
    </>
  )
}

export default App