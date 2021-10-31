import React, { FC } from 'react'
import { Link } from 'react-location'
import { FIRST_LEVEL_ROUTES } from '../App'

const Main: FC = () => {
  return (
    <div className="main-page-menu">
      {FIRST_LEVEL_ROUTES.map((route) => (
        <Link to={route.path}>{route.name}</Link>
      ))}
    </div>
  )
}

export default Main
