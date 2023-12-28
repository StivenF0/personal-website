
interface NavProps {
  children: any
}


const Nav = ({ children }: NavProps) => {
  return (
    <nav className="flex items-center justify-between mx-[3.2rem]">
      {children}
    </nav>
  )
}

export default Nav