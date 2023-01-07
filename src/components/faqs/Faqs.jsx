import React, {useEffect} from 'react'
import "./faqs.css"

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
    <div className="container_Faqs" id='faqs'>
        <h2>Preguntas Frecuentes</h2>

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
  )
}

export default Faqs