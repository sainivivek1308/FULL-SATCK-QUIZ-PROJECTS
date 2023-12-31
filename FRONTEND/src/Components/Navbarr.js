import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbarr() {
  //const Navdata=["About","Start Quiz"]
  const NavLinkdata=[
    {
      "namelink":"/contact",
      "StartData":"About"  
    },
    {
      "namelink":"/enterdetail",
      "StartData":" Start Quiz"
    }
  ]
  return (
    <Navbar
      fluid
      rounded
      
      style={{fontSize:"25px"}}
    >
      
      
        <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">
          Quiz Application
        </span>
      {/* </Navbar.Brand>  */}
      <Navbar.Toggle className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" />
      <Navbar.Collapse>
        <Navbar.Link
          active
          as={Link}
          to="/"
        >
          <p style={{fontSize: '18px'} }>
            Home
          </p>
        </Navbar.Link>
        {
          NavLinkdata.map(namedata=>(
            <Navbar.Link
            as={Link}

            to={namedata.namelink}
            >
            <p style={{fontSize: '18px'} }>
              {namedata.StartData}
            </p>
            </Navbar.Link>
            
          ))
        }
        
      </Navbar.Collapse>
    </Navbar>
  )
}


