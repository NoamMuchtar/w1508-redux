import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllPosts from "./components/AllPosts";
import PostTitles from "./components/PostsTitles";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-6 border">
              <AllPosts />
            </div>
            <div className="col-6 border">
              <PostTitles />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
