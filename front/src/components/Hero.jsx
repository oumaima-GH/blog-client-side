import React, { useState } from 'react';

const featuredPosts = [
    {
        id: 1,
        thumbnail: 'https://media.geeksforgeeks.org/wp-content/uploads/20240319155102/what-is-ai-artificial-intelligence.webp',
        title: 'The Rise of AI in Everyday Life',
        description: 'Simple and effective tips to improve your health and wellbeing.',
      },
    {
      id: 2,
      thumbnail: 'https://www.mooc.org/hubfs/what-computer-programming-jobs-offer-remote-work-jpg.jpeg',
      title: '10 Tips for a Healthier Lifestyle',
      description: 'An in-depth look at how artificial intelligence is becoming a part of our daily routines.',
    },
    {
      id: 3,
      thumbnail: 'https://www.bsr.org/images/heroes/bsr-travel-hero..jpg',
      title: 'Top 10 Destinations for 2024',
      description: 'Explore the best travel destinations to visit in 2024.',
    },
  ];
  
  export const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredPosts.length) % featuredPosts.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPosts.length);
    };
  
    const { thumbnail, title, description } = featuredPosts[currentIndex];
  
    return (
      <section className="hero">
        <div className="hero-content">
          <button className="hero-btn prev" onClick={handlePrev}>‹</button>
          <div className="hero-carousel">
            <img src={thumbnail} alt={title} className="hero-image" />
            <div className="hero-text">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
          <button className="hero-btn next" onClick={handleNext}>›</button>
        </div>
      </section>
    );
  };

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const Hero = () => {
//   const [featuredPosts, setFeaturedPosts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFeaturedPosts = async () => {
//       try {
//         const response = await axios.get('/api/v1/articles'); 
//         setFeaturedPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchFeaturedPosts();
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredPosts.length) % featuredPosts.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPosts.length);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (featuredPosts.length === 0) {
//     return <div>No featured posts available</div>;
//   }

//   const { thumbnail, title, description } = featuredPosts[currentIndex];

//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <button className="hero-btn prev" onClick={handlePrev}>‹</button>
//         <div className="hero-carousel">
//           <img src={thumbnail} alt={title} className="hero-image" />
//           <div className="hero-text">
//             <h3>{title}</h3>
//             <p>{description}</p>
//           </div>
//         </div>
//         <button className="hero-btn next" onClick={handleNext}>›</button>
//       </div>
//     </section>
//   );
// };
