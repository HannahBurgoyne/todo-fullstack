import { useState } from 'react'

function ShowAllLink() {
  const [selected, setSelected] = useState(false)

  function handleClick() {
    setSelected(true)
  }

  return (
    <>
      <li>
        <a
          href="#/"
          onClick={handleClick}
          className={`${selected ? 'selected' : ''}`}
        >
          All
        </a>
      </li>
    </>
  )
}

export default ShowAllLink
