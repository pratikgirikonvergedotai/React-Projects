import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'



const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    // using predefine css col-2 to style columns
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    console.log(links)
    // using predefine css col-3 to style columns
    if (links.length === 3) {
      setColumns('col-3')
    }
    // using predefine css col-4 to style columns
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [page, location, links])
  return (
    <aside
    // conditional rendering to display submenu 
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
