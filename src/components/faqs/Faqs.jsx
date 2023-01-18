import React, {useEffect} from 'react'
import "./faqs.css"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { Power4 } from 'gsap'

const Faqs = () => {

    useEffect(() => {

        const items = document.querySelectorAll(".box_faq button");

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');
            
            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }
            
            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }
    
        items.forEach(item => item.addEventListener('click', toggleAccordion));


        /* animation title */
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            duration:1,
            ease: Power4.easeOut,
            scrollTrigger:{
                trigger:".boxfaqs",
                /* pin:true, */
                start:"-600px top",
                end:"-=500",
              }
          })
      
          tl.to( ".line_title_faqs",{
            width: "85%",
            duration: .5,
            x: -100,
          })
      
         
          tl.from( ".faqsTitle",{
            opacity:0,
            duration: .8,
            y:20,
          })

          tl.from( ".box_faq-item",{
            opacity:0,
            duration: .8,
            y:20,
          })



        return () => {
            items.forEach(item => item.addEventListener('click', toggleAccordion));
        }
    },[])


    const faqs = [
        {
            title : "Question Example 1?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut  tortor pretium viverra suspendisse potenti." 
        },
        {
            title : "Question Example 2?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " 
        }
        ,
        {
            title : "Question Example 3?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut  tortor pretium viverra suspendisse potenti." 
        }
        ,
        {
            title : "Question Example 4?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut  tortor pretium viverra suspendisse potenti." 
        }
        ,
        {
            title : "Question Example 5?",
            content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut  tortor pretium viverra suspendisse potenti." 
        }
    ]

  return (
    <div className="boxfaqs"id='faqs'>
        <div className="container_Faqs" >
            <div className="line_title_faqs"></div>
            <h2 className="faqsTitle">Preguntas Frecuentes</h2>

            <div className="box_faq">
                {faqs.map((index, key) => {
                    return <div className="box_faq-item" key={key}>
                                <button id="box_faq-button" aria-expanded="false">
                                    <span className="box_faq-title">{index.title}</span>
                                    <span className="icon" aria-hidden="true"></span>
                                </button>
                                <div className="box_faq-content">
                                    <p>{index.content}</p>
                                </div>
                            </div>
                })}
            </div>
        </div>
    </div>
    
  )
}

export default Faqs