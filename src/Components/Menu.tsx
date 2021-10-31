import { FC } from 'react'

const Menu: FC = ({ children }) => {
  return <div className="top-bar layout row">{children}</div>
}

export default Menu
