import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom";

import Main from './containers/Main/index.jsx'

const wrapper = document.getElementById("root");
if (wrapper) ReactDOM.render(<Main />, wrapper);
