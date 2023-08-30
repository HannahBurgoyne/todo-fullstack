import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShowAllLink from './ShowAllLink'
import ShowActiveLink from './ShowActiveLink'
import ShowCompletedLink from './ShowCompletedLink'

function Footer() {
  return (
    <>
      <span className="todo-count">
        <strong>0</strong> item left
      </span>
      <ul className="filters">
        <ShowAllLink />
        <ShowActiveLink />
        <ShowCompletedLink />
      </ul>
      <button className="clear-completed">Clear completed</button>
    </>
  )
}

export default Footer
