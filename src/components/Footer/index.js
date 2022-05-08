import React from "react";
import { FaGithubSquare, FaLinkedin, FaSpotify} from 'react-icons/fa'

function Footer() {

    return (
        <footer className="d-flex justify-content-center fixed-bottom p-2">
            <a className="p-5" href="https://github.com/HandsomeDingor" target="_blank" rel="noreferrer"><FaGithubSquare size={70}/></a>
            <a className="p-5" href="https://www.linkedin.com/in/junjie-wu-683918140/" target="_blank" rel="noreferrer"><FaLinkedin size={70}/></a>
            <a className="p-5" href="https://open.spotify.com/user/handsomeding" target="_blank" rel="noreferrer"><FaSpotify size={70}/></a>
        </footer>
    )

}


export default Footer;