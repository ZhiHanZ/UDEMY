import React from 'react';
const Card = ({name, email, id}) => {
    //const {name, email, id} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma grow bw2 shadow-5'>
            <img alt='shi bai ren' src={`https://robohash.org/jiangzemin${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;