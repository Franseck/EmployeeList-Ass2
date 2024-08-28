import React from 'react'

const Employees =  ({data}) => {
  return (
    <>{
      data.map(({name, image, age, email})=>(
             <article className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{age} years</p>
        </div>
      </article>
      ))

    }
 
    </>
  );
};

export default Employees;