import { Title, Input, Button } from './MoviesPageCom.styled';

const MoviesPageCom = ({ handleSubmit, query, handleChange }) => {
    return (
        <div>
            <Title>Search Movies:</Title>
            <form onSubmit={handleSubmit}>
                <Input 
                    value={query}
                    onChange={handleChange}
                    name="searchQuery"
                    text="text"
                    placeholder="Enter movie title"
                />
                <Button type="submit">Search movie</Button>
            </form>
        </div>
    )
}

export default MoviesPageCom;