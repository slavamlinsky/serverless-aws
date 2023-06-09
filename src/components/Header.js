import React, {useState, useEffect} from 'react'
//import menuLinksData from './data/menu_links.json'

const Header = () => {

  const [menuLinksData, setMenuLinksData] = useState([]);

  const loadMenuLinksData = async () => {
    // Query the API GateWay
    const resp = await fetch('https://mtf59321na.execute-api.eu-central-1.amazonaws.com/Production/menulinks');
    let jsonData = await resp.json();    

    // Assign responce data to our state variable
    setMenuLinksData(jsonData);

  }

  useEffect(() => {
    // Loading the menuLinks data for the API GateWay
    loadMenuLinksData();

    // Other side effects code goes here
  }, [])



  return (
    <header id="intro">
        <article className="fullheight">
        <div className='hgroup'>
            <h1>Landon Hotel Test</h1>
            <h2>West London</h2>
            <p><a href='#welcome'><img src="https://landonhotel.com/images/misc/arrow.png"  alt="down arrow"/></a></p>
        </div>
        </article>

        <nav id="nav">
        <div className="navbar">
            <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
            <ul>
                {
                    menuLinksData.map((link) => {
                        return <li key={link.href}><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                    })
                }
            {/* <li><a className="icon info" href="#hotelinfo"><span>info</span></a></li>
            <li><a className="icon rooms" href="#rooms"><span>rooms</span></a></li>
            <li><a className="icon dining" href="#dining"><span>dining</span></a></li>
            <li><a className="icon events" href="#events"><span>events</span></a></li>
            <li><a className="icon attractions" href="#attractions"><span>attractions</span></a></li> */}
            </ul>
        </div>
        </nav>
    </header>
  )
}

export default Header