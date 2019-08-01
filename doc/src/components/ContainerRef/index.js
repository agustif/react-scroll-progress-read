import React, { forwardRef, useState, useRef } from "react"
import ScrollProgressRead from "react-scroll-progress-read"
import { getParagraph } from "../../helpers/lorem"

// forward ref to p element
const Main = forwardRef(({ txt }, ref) => (
  <p dangerouslySetInnerHTML={{ __html: txt }} ref={ref} />
))

const ContainerRef = () => {
  const mainTxt = useRef()
  const [txt, setText] = useState(getParagraph(700))
  const addText = () => setText(`${getParagraph(200)}<br /><br />${txt}`)

  return (
    <>
      <div
        style={{ margin: 0, padding: 0, position: "fixed", left: 0, top: 0 }}
      >
        <ScrollProgressRead refTarget={mainTxt} />
      </div>
      <button type="button" onClick={addText}>
        Add text to paragraph
      </button>
      <div style={{ marginTop: "20px" }}>
        <Main txt={txt} ref={mainTxt} />
      </div>
    </>
  )
}

export default ContainerRef
