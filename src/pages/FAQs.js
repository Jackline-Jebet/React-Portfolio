import React, { useState } from 'react';
import "../styles/FAQs.css";
import FAQItem from '../components/FAQItem';

function FAQs() {
  const [openParentItem, setOpenParentItem] = useState(null);
  const [openChildItem, setOpenChildItem] = useState(null);

  const handleParentToggle = (index) => {
    if (openParentItem === index) {
      setOpenParentItem(null);
      setOpenChildItem(null);
    } else {
      setOpenParentItem(index);
      setOpenChildItem(null);
    }
  };

  const handleChildToggle = (index) => {
    if (openChildItem === index) {
      setOpenChildItem(null);
    } else {
      setOpenChildItem(index);
    }
  };

  return (
    <div className='faq'>
      <h2>Frequently Asked Questions (FAQs)</h2>

      <FAQItem 
          question="General FAQ's:" 
          isMain 
          isOpen={openParentItem === 0}
          onClick={() => handleParentToggle(0)}
      >
        <ol>
          <li className='list-2'>
            <FAQItem 
              question="What is a Master of Ceremony (MC)?"
              isOpen={openChildItem === 0}
              onClick={() => handleChildToggle(0)}
            >
              <li className='list-3'>An MC is a host or presenter who guides and engages the audience during events, ensuring the smooth flow of the program.</li>
            </FAQItem>
          </li>

          <li className='list-2'>
            <FAQItem 
              question="What types of events do you specialize in?"
              isOpen={openChildItem === 1}
              onClick={() => handleChildToggle(1)}
            >
              <li className='list-3'>I specialize in weddings, corporate events, conferences, parties, and more.</li>
            </FAQItem>
          </li>

          <li className='list-2'>
            <FAQItem 
              question="How do I book your services?"
              isOpen={openChildItem === 2}
              onClick={() => handleChildToggle(2)}
            >
              <li className='list-3'>To book me as your MC, please reach out through the contact form on my website or give me a call.</li>
            </FAQItem>
          </li>

          <li className='list-2'>
            <FAQItem 
              question="Do you provide event planning services as well?"
              isOpen={openChildItem === 3}
              onClick={() => handleChildToggle(3)}
            >
              <li className='list-3'>While I focus on being an MC, I can offer event coordination suggestions and collaborate with event planners.</li>
            </FAQItem>
          </li>

          <li className='list-2'>
            <FAQItem 
              question="What sets you apart as an MC?"
              isOpen={openChildItem === 4}
              onClick={() => handleChildToggle(4)}
            >
              <li className='list-3'>I bring energy, professionalism, and a personalized touch to every event. My experience ensures a memorable occasion.</li>
            </FAQItem>
          </li>
        </ol>
      </FAQItem>

      <FAQItem 
        question="Pre-Event Preparation:" 
        isMain 
        isOpen={openParentItem === 1}
        onClick={() => handleParentToggle(1)}
      >
        <ol>
          <li className='list-2'>
            <FAQItem 
              question="Do you customize your script for each event?"
              isOpen={openChildItem === 5}
              onClick={() => handleChildToggle(5)}
            >
              <li className='list-3'>Absolutely! I tailor my script to match the tone, theme, and goals of your event.</li>
            </FAQItem>
          </li>

          <li className='list-2'>
            <FAQItem 
              question="Can we meet before the event to discuss details?"
              isOpen={openChildItem === 6}
              onClick={() => handleChildToggle(6)}
            >
              <li className='list-3'>Of course, I'm happy to meet in person or virtually to ensure I understand your vision and requirements.</li>
            </FAQItem>
          </li>

          <li className='list-2'>
            <FAQItem 
              question="How much time do you need for event preparation?"
              isOpen={openChildItem === 7}
              onClick={() => handleChildToggle(7)}
            >
              <li className='list-3'>I typically require a week or two to prepare, but it depends on the complexity of the event.</li>
            </FAQItem>
          </li>
        </ol>
      </FAQItem>


      <FAQItem 
        question="During the Event:" 
        isMain 
        isOpen={openParentItem === 2}
        onClick={() => handleParentToggle(2)}
      >
        <ol>
          <li className='list-2'>
            <FAQItem 
              question="Do you handle impromptu situations?"
              isOpen={openChildItem === 8}
              onClick={() => handleChildToggle(8)}
            >
              <li className='list-3'>Yes, I'm skilled in thinking on my feet and can smoothly handle unexpected moments that arise.</li>
            </FAQItem>
          </li>
          <li className='list-2'>
            <FAQItem 
              question="How do you engage the audience?"
              isOpen={openChildItem === 9}
              onClick={() => handleChildToggle(9)}
            >
              <li className='list-3'>I use a mix of storytelling, humor, and interaction to keep the audience engaged and entertained.</li>
            </FAQItem>
          </li>
          <li className='list-2'>
            <FAQItem 
              question="What do you do if there's a technical issue during the event?"
              isOpen={openChildItem === 10}
              onClick={() => handleChildToggle(10)}
            >
              <li className='list-3'>I remain adaptable and ensure the show goes on smoothly. I can engage the audience while technical issues are resolved.</li>
            </FAQItem>
          </li>
        </ol>
      </FAQItem>

      <FAQItem 
        question="Rates and Availability:" 
        isMain 
        isOpen={openParentItem === 3}
        onClick={() => handleParentToggle(3)}
      >
        <ol>
          <li className='list-2'>
            <FAQItem 
              question="What are your rates for MC services?"
              isOpen={openChildItem === 11}
              onClick={() => handleChildToggle(11)}
            >
              <li className='list-3'>Rates vary based on the type of event, duration, and other factors. Please contact me for a personalized quote.</li>
            </FAQItem>
          </li>
          <li className='list-2'>
            <FAQItem 
              question="Are your services available for out-of-town events?"
              isOpen={openChildItem === 12}
              onClick={() => handleChildToggle(12)}
            >
              <li className='list-3'>Yes, I'm available for events both locally and out of town. Travel arrangements can be discussed.</li>
            </FAQItem>
          </li>
          <li className='list-2'>
            <FAQItem 
              question="How far in advance should I book your services?"
              isOpen={openChildItem === 13}
              onClick={() => handleChildToggle(13)}
            >
              <li className='list-3'>It's recommended to book me as early as possible to ensure availability, especially for peak event seasons.</li>
            </FAQItem>
          </li>
        </ol>
      </FAQItem>

      <FAQItem 
        question="Post-Event:" 
        isMain 
        isOpen={openParentItem === 4}
        onClick={() => handleParentToggle(4)}
      >
        <ol>
          <li className='list-2'>
            <FAQItem 
              question="Can we provide feedback after the event?"
              isOpen={openChildItem === 14}
              onClick={() => handleChildToggle(14)}
            >
              <li className='list-3'>Absolutely! Your feedback is invaluable and helps me continuously improve my services.</li>
            </FAQItem>
          </li>
          <li className='list-2'>
            <FAQItem 
              question="Can we stay in touch for future events?"
              isOpen={openChildItem === 15}
              onClick={() => handleChildToggle(15)}
            >
              <li className='list-3'>Certainly, I'd love to work with you again. Feel free to reach out for any future event needs.</li>
            </FAQItem>
          </li>
        </ol>
      </FAQItem>
    </div>
  );
}

export default FAQs;