import { FC } from 'react'

const Container: FC = (props) => {
  return (
    <div className="container">
      <div {...props} />
    </div>
  )
}
export default Container
