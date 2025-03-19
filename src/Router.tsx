import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { History } from './components/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/history" Component={History} />
      </Route>
    </Routes>
  )
}
