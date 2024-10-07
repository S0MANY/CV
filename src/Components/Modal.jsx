import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import { useEffect } from 'react'
import diplomFace from "../img/diplom1.jpg"
import diplomBack from "../img/diplom1.2.jpg"

function Modal(props){

    function handleClose(event) {
        console.log(event.target)
        if (event.target.classList.contains("modal")) {
            props.setModal(false)
        }
    }

    // function handeleScale(){
    //     const scale = document.createElement("div")
    //     scale.style
    // }

    useEffect(() => {
        // eslint-disable-next-line
        const swiper = new Swiper(".modal__slider", {
            effect: 'flip',     
            grabCursor: true, 
            speed: 1000,
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);
   
    
    return (
        <>
            <div onClick={handleClose} className={`modal ${props.modal ? "" : "hide"} ${props.theme === "dark" ? "dark" : ""}`}>
                <div className="modal__box">
                    <div className="modal__close">
                        <img onClick={() => props.setModal(false)} src={`https://img.icons8.com/?size=50&id=46&format=png&color=${props.theme === "dark" ? "EDE9DC" : "000000"}`} alt="close btn" />
                    </div>
                    <div className="modal__slider swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src={diplomFace} alt="Diplom face" /></div>
                            <div className="swiper-slide"><img  src={diplomBack} alt="Diplom back" /></div>
                        </div>
                        <div className={`swiper-button-prev ${props.theme === "dark" ? "dark" : ""} `}></div>
                        <div className={`swiper-button-next ${props.theme === "dark" ? "dark" : ""}`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Modal}