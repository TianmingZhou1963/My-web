import React from 'react'
import Navbar from '../components/Navbar';
import Aboutme from '../components/Aboutme';
import FindMe from '../components/FindME';
import Skills from '../components/Skills';

import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Aboutme />
            <FindMe />
            <Skills />
            {/* <MyIntroduction /> */}
            <Contacts />
            <Footer />
        </>
    )
}

export default HomePage
