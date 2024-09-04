import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import aziz from '../../img/azia.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './aboutme.css'


function Aboutme() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='aboutContainer' id='home' >
            <div className='aboutText' data-aos="fade-right">
                <h1>Hi, I'M Tianming Zhou</h1>
                <h2 style={{ display: 'flex', color: '#ae0151' }}><Typewriter
                    options={{
                        strings: ["I'M a React Developer", "I'M a Java Developer", "I'M a Full Stack Developer"],
                        autoStart: true,
                        loop: true,
                    }}
                /> </h2>

            </div>
            <input type="image" img className='azizIMG' src={aziz} data-aos="fade-left" alt='my picture' />
        </div >
    )
}

export default Aboutme