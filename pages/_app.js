import { Provider } from "react-redux";
import createReduxStore from "./helpers/createStore";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  const store = createReduxStore({
    showDetail: { image: { medium: "" }, rating: {}, genres: [] },
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
