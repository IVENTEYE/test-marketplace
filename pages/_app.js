import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router';

function MyApp({ Component, pageProps }) {

  const progress = new ProgressBar({
    size: 4,
    color: "#71E386",
    className: "progressbar",
    delay: 80,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
