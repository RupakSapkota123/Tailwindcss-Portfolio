import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "../reducers/rootReducers";

const localStorageMiddleware = (store) => {
  return (next) => (action) => {
    const result = next(action);
    try {
      const { settings } = store.getState();
      console.log("settings", settings);
      localStorage.setItem("Rupak_Theme", JSON.stringify(settings.theme));
    } catch (error) {
      console.log("theme error", error);
    }
    return result;
  };
};

const reHydrateStore = () => {
  const storage = localStorage.getItem("Rupak_Theme");
  if (storage && storage !== null) {
    return {
      settings: {
        theme: JSON.parse(storage),
      },
    };
  }
  return undefined;
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, localStorageMiddleware];
const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const configStore = () => {
  const store = createStore(
    rootReducers,
    reHydrateStore(),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  //   sagaMiddleware.run();
  return store;
};

const store = configStore();

export default store;
