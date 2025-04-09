import React from 'react';
import styles from "@/app/ui/home.module.css"
import { bebas } from './ui/fonts';

const Home = () => {
    return (
        <div>
            <h1 className={`${bebas.className} ${styles.text}`}>comenzando la app!!</h1>   
            <p className='p-10 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eaque minus pariatur molestiae, est praesentium alias? Rerum, libero tempore exercitationem harum numquam odio sunt, magni repellat, expedita quae delectus officia!</p>

        </div>
    );
};

export default Home;