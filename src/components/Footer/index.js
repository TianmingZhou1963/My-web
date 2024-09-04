import React from 'react'
import { AiFillLinkedin, AiFillGithub, } from 'react-icons/ai'
import './footer.css'

const year = new Date().getFullYear();

function Footer() {
            return (
                        <footer className='footerbox'>
                                    <h1 data-aos='zoom-in'>
                                                Tianming Zhou
                                    </h1>
                                    <div data-aos='zoom-in'>
                                                <a href='https://github.com/TianmingZhou1963/My-web.git' target="_blank" rel="noreferrer"><AiFillGithub /></a>
                                                <a href='https://www.linkedin.com/in/tianming-zhou-2400b52a8' target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                                    </div>
                                    <h2 >©<span>{year}</span> by TMZ</h2>
                        </footer>
            )
}

export default Footer