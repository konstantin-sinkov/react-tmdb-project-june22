import React from 'react';

const Movie = ({movie}) => {
    return (
        <div>
            {movie.id} -- {movie.title}
        </div>
    );
}

export {Movie};
