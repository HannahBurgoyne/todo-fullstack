import { useState } from 'react'
import { Link } from 'react-router-dom'
import ShowAllLink from './ShowAllLink'
import ShowActiveLink from './ShowActiveLink'
import ShowCompletedLink from './ShowCompletedLink'
import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../apis/apiClient'

function Footer() {
  const { data } = useQuery(['todos'], fetchTodos)
  return (
    <>
      <>
        <span className="todo-count">
          <strong>{data?.length}</strong> items left
        </span>
      </>
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
