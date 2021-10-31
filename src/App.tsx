import './App.scss'

import {
  Link,
  Navigate,
  Outlet,
  ReactLocation,
  Route,
  Router
} from 'react-location'
import Posts from './pages/Posts'
import Container from './Components/Container'
import Menu from './Components/Menu'
import Post from './pages/Post'
import About from './pages/About'
import Main from './pages/Main'
import { Helmet } from 'react-helmet'

const reactLocation = new ReactLocation()

type MyRoue = Route & {
  name: string
}

export const FIRST_LEVEL_ROUTES: MyRoue[] = [
  {
    path: 'posts',
    name: 'Posts',
    element: (
      <Container>
        <Outlet />
      </Container>
    ),
    children: [
      {
        path: '/',
        element: <Posts />
      },
      {
        path: ':postId',
        element: <Post />
      },
      { element: <Navigate to="/" /> }
    ]
  },
  { path: 'about', name: 'About', element: <About /> }
]

function App() {
  return (
    <>
      <Helmet>
        <title>Test app</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Test app" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <Router
        location={reactLocation}
        routes={[
          {
            path: '',
            element: <Main />
          },
          ...FIRST_LEVEL_ROUTES,
          {
            element: '404'
          }
        ]}
      >
        <div className="layout spread">
          <Menu>
            <Link to="/">Test-app</Link>
            <ul className="navbar">
              {FIRST_LEVEL_ROUTES.map(({ path, name }) => {
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      getActiveProps={() => ({
                        className: 'active'
                      })}
                    >
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Menu>
          <Outlet />
        </div>
      </Router>
    </>
  )
}

export default App
