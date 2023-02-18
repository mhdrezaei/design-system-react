import React from 'react'
import ReactDom from "react-dom"

import { Button } from "@ds.e/react"
import "@ds.e/scss/lib/Button.css"

ReactDom.render(
    <Button label='Example Buton' ></Button>,
    document.querySelector('#root')
)