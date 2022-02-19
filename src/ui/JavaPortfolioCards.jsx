import React from 'react';
import Portfoliocard from './PortfolioCard';
import cafejava from '../assets/java/cafejava.jpg'
import javacalc from '../assets/java/javacalc.jpg'
import minesweeper from '../assets/java/minesweeper.jpg'

const Javaportfoliocards = () => {
    return (
        <div>
        
            <Portfoliocard 
            link="https://github.com/alexalextran/Java-Calculator-W-Wo-GUI/blob/main/Calculator2.java"
            title="Simple GUI Calculator"
            text="First Ever Project, this goes back to my first year of uni where i started learning java, and for my first project i attempted an simple terminal calculator which i then adapted to a working GUI calculator" features="Working Gui calculator, basic math functions" image={javacalc}/>

            <Portfoliocard
            link="https://github.com/alexalextran/Coffee-Shop-GUI"
             title="Cafe GUI"
              text="This was a Pure GUI project to see how much i could do with JAVA gui libraries and its safe to say, i don't think i'll ever touch Java GUI again" features="receipt function" image={cafejava}/>
            
            <Portfoliocard
            link="https://github.com/alexalextran/MINESWEEPER-CLONE"
            title="Minesweeper Clone"
             text="Minesweeper clone that i attempted with zero game library knowledge, and its safe to say i had to use alot of tutorials to finish this project, not my proudest project, but it works nonetheless" features="Timer, reset feature, win&lose condition" image={minesweeper}/>
        </div>
    );
}

export default Javaportfoliocards;
