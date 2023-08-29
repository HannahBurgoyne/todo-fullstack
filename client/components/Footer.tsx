import Link from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <p>{} item left</p>
      <Link>All</Link>
      <Link>Active</Link>
      <Link>Completed</Link>
      <button>Clear completed</button>
    </footer>
  )
}

export default Footer
