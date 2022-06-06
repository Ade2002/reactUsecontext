import React from 'react'

const Dummy = ({params,Images}) => {
  return (
  <>
    <h2>{params}</h2>
    <h1>{Images ? Images : ""}</h1>
  </>
  )
}

export default Dummy