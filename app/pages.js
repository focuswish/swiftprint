import React from 'react'
import Spinner from './components/Spinner'

const styles = {
  width: '100%',
  minHeight: '100vh',
  // backgroundColor: 'transparent',
  position: 'absolute',
  padding: '40vh',
  boxSizing: 'border-box',
  top: 0,
  zIndex: 0,
  pointerEvents: 'none',
  backgroundImage: 'linear-gradient(to bottom, #121212 0%, #323232 100%)'
}

export const LoadingOverlay = ({ loading, children }) => (
  <div style={{ ...styles }}>
    <Spinner />
  </div>
)

LoadingOverlay.defaultProps = {
  loading: true
}

export const Home = React.lazy(() => import('./containers/Home'))
export const Order = React.lazy(() => import('./containers/Order'))
export const SignIn = React.lazy(() => import('./containers/Login'))
export const Account = React.lazy(() => import('./containers/Account'))
export const Terms = React.lazy(() => import('./containers/Terms'))
export const PrivacyPolicy = React.lazy(() => import('./containers/PrivacyPolicy'))
export const CookiePolicy = React.lazy(() => import('./containers/CookiePolicy'))
export const Disclaimer = React.lazy(() => import('./containers/Disclaimer'))
export const Unsubscribe = React.lazy(() => import('./containers/Unsubscribe'))
export const Dashboard = React.lazy(() => import('./containers/Dashboard'))

export default [{
  component: Home,
  path: '/',
  exact: true,
  key: 'home'
}, {
  component: Order,
  path: '/order/:id?',
  key: 'order'
}, {
  component: SignIn,
  path: '/login',
  exact: true,
  key: 'login'
}, {
  component: Account,
  path: '/account',
  exact: true,
  key: 'account'
}, {
  component: Terms,
  path: '/terms',
  exact: true,
  key: 'terms'
}, {
  component: PrivacyPolicy,
  path: '/privacy-policy',
  exact: true,
  key: 'privacy-policy'
}, {
  component: CookiePolicy,
  path: '/cookie-policy',
  exact: true,
  key: 'cookie-policy'
}, {
  component: Disclaimer,
  path: '/disclaimer',
  exact: true,
  key: 'disclaimer'
}, {
  component: Unsubscribe,
  path: '/unsubscribe',
  key: 'unsubscribe'
}, {
  component: Dashboard,
  path: '/dashboard/:id?',
  key: 'dashboard'
}, {
  component: props => <p>404</p>,
  key: 'not-found'
}]