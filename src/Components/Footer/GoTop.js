import React from 'react'

const GoTop = () => {
  const handleScroll = () => {
    const top = document.getElementById("top");
    top.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
        <div  onClick={handleScroll} className="footer-top">
          <h3>Back to top</h3>
        </div>
    </div>
  )
}

export default GoTop