import { useState } from 'react'

function ShowCompletedLink() {
  const [selected, setSelected] = useState(false)

  function handleClick() {
    setSelected(true)
  }
  return (
    <>
      <li>
        <a
          href="#/completed"
          onClick={handleClick}
          className={`${selected ? 'selected' : ''}`}
        >
          Completed
        </a>
      </li>
    </>
  )
}

export default ShowCompletedLink
