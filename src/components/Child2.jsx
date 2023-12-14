import React from 'react'
import { Child3 } from './Child3'

export const Child2 = (props) => {
  return (
    <section>
        <div> Child Two </div>
        <Child3 userName = {props.userName} />
    </section>
  )
}
