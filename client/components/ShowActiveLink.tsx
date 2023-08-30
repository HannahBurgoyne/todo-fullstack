import { useState } from "react"

function ShowActiveLink() {
  const [selected, setSelected] = useState(false)

  function handleClick() {
    setSelected(true)
  }
  return (
    <>
      <li>
        <a
          href="#/active"
          onClick={handleClick}
          className={`${selected ? 'selected' : ''}`}
        >
          Active
        </a>
      </li>
    </>
  )
}

export default ShowActiveLink
