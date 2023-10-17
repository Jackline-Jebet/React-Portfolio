import React from 'react';

// function FAQItem({ question, children, isMain, onClick }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = (e) => {
//     e.stopPropagation(); // This stops the event from propagating up and triggering parent onClicks
//     setIsOpen(prev => !prev);
//   };

//   return (
//     <li className={`toggle ${isMain ? 'main' : ''}`} onClick={handleToggle}>
//     {question}
//     <span className="arrow">{isOpen ? "▲" : "▼"}</span>
//     <ol style={{ display: isOpen ? 'block' : 'none' }}>
//       {children}
//     </ol>
//   </li>
//   );
// }

// export default FAQItem;

function FAQItem({ question, children, isMain, isOpen, onClick }) {

  const handleClick = (e) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <li 
      className={`toggle ${isMain ? 'main' : ''}`} 
      onClick={handleClick}
    >
      {question}
      <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      <ol style={{ display: isOpen ? 'block' : 'none' }}>
        {children}
      </ol>
    </li>
  );
}




export default FAQItem;


