import React, {useState, useEffect} from 'react'
//import welcomeImagesData from './data/welcome_imgs.json'

const Welcome = () => {

  const [welcomeImagesData, setWelcomeImagesData] = useState([]);

  const loadWelcomeImagesData = async () => {
    // Query the API GateWay
    const resp = await fetch('https://mtf59321na.execute-api.eu-central-1.amazonaws.com/Production/galleryimages');
    let jsonData = await resp.json();    

    // Assign responce data to our state variable
    setWelcomeImagesData(jsonData);

  }

  useEffect(() => {
    // Loading the menuLinks data for the API GateWay
    loadWelcomeImagesData();

    // Other side effects code goes here
  }, [])

  return (
    <div className="scene" id="welcome">
        <article className="content">
            <div className="gallery">
                {
                    welcomeImagesData.map(image => <img key={image.src} src={image.src} alt={image.alt} className={image.className} />)
                }            
            </div>
            <h1>Welcome to the Landon&nbsp;Hotel</h1>
            <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
        </article>
    </div>
  )
}

export default Welcome