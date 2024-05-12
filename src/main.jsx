import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from "./Layout.jsx";
import SharedLayout from "./SharedLayout.jsx";
import {MyComponent} from "./AnimatePresence.jsx";
import AnimatePresenceBtn from "./AnimatePresenceBtn.jsx";
import YoutubeLikeBtn from "./YoutubeLikeButton.jsx";
import Example from "./FakeDrawer.jsx";
import FeedbackModal from "./FeedbackModal.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    {/*  <Layout/>*/}
    {/*  <SharedLayout/>*/}
    {/*  <MyComponent/>*/}
    {/*  <AnimatePresenceBtn/>*/}
    {/*  <YoutubeLikeBtn/>*/}
    {/*  <Example/>*/}
      <FeedbackModal/>
  </React.StrictMode>,
)
