import { Provider } from "react-redux";
import createReduxStore from "../helpers/createStore";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  const store = createReduxStore({
    showDetail: {
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/6/16463.jpg",
      },
      rating: {},
      genres: [],
    },
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
