import React from 'react'

export default function Displayer(props) {
  console.log('props', props)
  return (
    <div className="gutter__small">
      Props: {props.message}
    </div>
  )
}
