import { CastList, CastItem, Text, Image } from "./Cast.styled";

import defaultPicture from './avatar-picture.png';

const CastCom = ({ movieCast }) => {
    if (!movieCast) {
        return
    }

    return (
        <CastList>
            {movieCast.map(({ id, profile_path, original_name, name, character }) => (
                <CastItem key={id}>
                     {profile_path ? (
                        <Image
                        alt={original_name}
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        />
                    ) : (
                        <Image
                        src={defaultPicture}
                        alt={original_name} />
                    )}
                    <div>
                        <h4>{name}</h4>
                        <Text>Character: {character}</Text>
                    </div>
                </CastItem>
            ))}
        </CastList>
    )
}


export default CastCom;