import { Spinner, Text } from '@chakra-ui/react';
import useTrailer from '../hooks/useTrailers';

interface Props{
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
    const {data, isLoading, error} = useTrailer(gameId);

    if(isLoading) return  <Spinner />;
    if(error) throw error;

    if (data?.count === 0) return <Text>No trailer is available!</Text>
    
    const first = data?.results[0];
    

    return first ? <video src={first.data[480]} poster={first.preview} controls /> : null

}

export default GameTrailer