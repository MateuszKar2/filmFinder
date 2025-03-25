import { StyledSection, StyledLink, SectionTitle, List, ListItem } from './MovieList.styled';


interface Movie {
        id: number,
        title: string,
        release_date: string,
        overview: string,
        poster_path: string,
        vote_average: string,
        };

interface DataPictures {
    trendingMovies: Movie[];
};


const MovieList = ({ trendingMovies }: DataPictures) => {
    return (
        <StyledSection>
            <SectionTitle>Trending today</SectionTitle>

            <List>
                {trendingMovies.map(trendingMovie => (
                    <ListItem key={trendingMovie.id}>
                        <StyledLink to={`/movies/${trendingMovie.id}`}>
                            {trendingMovie.title}
                        </StyledLink>
                    </ListItem>
                ))}
            </List>
        </StyledSection>
    );
};

export default MovieList;

