import React from 'react'
import './Home.css'
import img from '../../images/ideas.png'
const Home = () => {
  return (
    
        <div className='home'>
            <div className='leftDiv'>
                <div className='info'>
                    <h1 className='homeHeading1'>Your next BIG</h1>
                    <h1 className='homeHeading2'>idea starts here.</h1>
                    <p className='homeInfo1'>lorem ipsum shacb dbhsa sdvcsd sbxa c</p>
                    <p className='homeInfo2'>casca cd fda c cd cdsdsdvasdv svsdvasdadvswqec dsca ascac</p>
                    <button className='homeBtn'>START FREE TRAIL</button>
                </div>
            </div>
            <div className='rightDiv'>
                <img src={img} className="img" alt="img" />
            </div>
        </div>
        

    
  )
}

export default Home