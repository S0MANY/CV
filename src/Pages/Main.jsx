import { Header } from "../Components/Header"
import { Avatar } from "../Components/Avatar"
import { Contacts } from "../Components/Contacts"
import { Skills } from "../Components/Skills"
import { Education } from "../Components/Education"
import { AboutMe } from "../Components/AboutMe"
import { Experience } from "../Components/Experience"

import {  useState } from "react"

function Main() {
    // eslint-disable-next-line
    const [theme , setTheme] = useState("light")



    return (
        <>
            <Header theme={theme} func={setTheme} />
            <main>
                <div className="container">
                    <Avatar theme={theme}/>
                    <Contacts theme={theme}/>
                    <Skills theme={theme}/>
                    <Education theme={theme}/>
                    <Experience theme={theme}/>
                    <AboutMe theme={theme}/>
                </div>
            </main>
            
            
        </> 
    )
}

export {Main}