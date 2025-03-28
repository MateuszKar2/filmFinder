
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { CastHeader, CastInfo, CastList, CastListItem, CastName, NoCastText, Wrapper } from './Cast.styled';

interface Actor {
    id: number,
    actor: string,
    profile_path: string,
    name: string,
    character: string,
};


const Cast = () => {
    const { movieId } = useParams();
    const [ cast, setCast ] = useState<Actor[]>([]);


    useEffect(() => {
        const fetchCast = async () => {
            try {
                const { cast } = await fetchMovieCast(movieId);
                setCast(cast);
            } catch (error) {
                console.log(error);
            };
        };

        fetchCast();
    }, [movieId]);

    return (
        <Wrapper>
            <CastHeader>Cast</CastHeader>
            {Cast.length ? (
                <CastList>
                    {cast.map(actor => (
                        <CastListItem className="cast-card" key={actor.id}>
                            {actor.profile_path ? (
                                <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={`${actor.name} profile`} />
                            ) : (
                                <img src={`https://via.placeholder.com/200x300?text=No+Image`} alt={`${actor.name} profile`}/>
                            )};

                            <CastInfo>
                                <CastName>{actor.name}</CastName>
                                <p>Character: {actor.character}</p>
                            </CastInfo>
                        </CastListItem>
                ))}
                </CastList>
            ) : (
                <NoCastText>
                     We don't have any information about the cast yet.
                </NoCastText>
            )}
        </Wrapper>
    );
};

export default Cast;