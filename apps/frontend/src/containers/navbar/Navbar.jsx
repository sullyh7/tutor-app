import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
  <div className="navbar bg-base-100 flex justify-between">
    <Link to={""} className=" btn btn-ghost normal-case text-3xl font-bold"><span className='text-primary'>Muslim</span>Tutors</Link>
    <nav className='hidden justify-between min-w-[40%] md:flex sm-justify-between'>
      <Link className=''>Portal</Link>
      <Link to={"join-us"} className=''>Join Us</Link>
      <Link to={"join-the-team"} className=''>Join the team</Link>
      <Link className=''>Contact us</Link>
    </nav>
    <div>
    <details className="dropdown flex md:hidden">
      <summary className="m-1 btn">Menu</summary>
      <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
      <li><Link to={"login"} className=''>Login</Link></li>
      <li><Link className=''>Portal</Link></li>
      <li><Link to={"join-us"} className=''>Join Us</Link></li>
      <li><Link to={"join-the-team"} className=''>Join the team</Link></li>
      <li><Link className=''>Contact us</Link></li>
      </ul>
    </details>
    </div>
    
    <div className="flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <button className='hidden sm:flex text-1xl btn w-[10rem] p-4 items-center text-center'>
            <Link to={"login"}>Login</Link>
          </button>
        </li>
      </ul>
    </div>
</div>
  )
}

export default Navbar