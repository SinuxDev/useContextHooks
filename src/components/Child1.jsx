import React from 'react'
import { Child2 } from './Child2'

export const Child1 = (props) => {
  return (
    <section>
        <div>Child One</div>
        <Child2 userName = {props.userName} />
    </section>
  )
}
