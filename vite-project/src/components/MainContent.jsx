import React from 'react';
import '../Styles/index.css'
import '../Styles/mainContent.css'

export default function MainContent(props) {
  console.log(props)
  return (
    <main>
      <div className="travel--card">
        <img src={props.imageURL} alt={props.title + " location"} />
        <section>
          <div className="location--info">
            <h4><i className="fa-solid fa-map-pin"></i>{props.location}</h4>
            <a href={props.googleMapsLink}>View on Google Earth</a>
          </div>
          <div className="title">
            <h1>{props.title}</h1>
          </div>
          <div className='travel--data'>
            <h5>{props.travelDate.startDate} - {props.travelDate.endDate}</h5>
            <p>{props.description}</p>
          </div>
        </section>
      </div>
    </main>
  )
}