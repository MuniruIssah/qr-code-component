import * as React from "react"
import qr from '../images/image-qr-code.png'

export default function IndexPage() {
  return (
      <div className="App">
          <div className="card">
              <div className={"qr-image"} style={{backgroundImage:`url(${qr})`}}></div>
              <h2 className='card-title'>Improve your front-end<br/> skills by building projects</h2>
              <p className='card-description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
      </div>
  )
}

export const Head = () => <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>QR CODE</title>
</>
