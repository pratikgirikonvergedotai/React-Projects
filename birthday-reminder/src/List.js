import React from 'react';

const List = ({ people }) => {
  return (
    // looping over data to render it
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
