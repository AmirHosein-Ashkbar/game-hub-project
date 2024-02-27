import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenShots from '../hooks/useScreenShots'

interface Props {
    gameId: number;
}

const GameScreenShots = ( { gameId }: Props ) => {

    const {data, isLoading, error} = useScreenShots(gameId)

    if (error) throw error;
    if(isLoading) return null;

    
    
  return (
    <SimpleGrid marginY={5} spacing={6} columns={{ base: 1, md:2  }}>
        {data?.results.map(screenShot => <Image key={screenShot.id} src={screenShot.image}  /> )}
    </SimpleGrid>
  )
}

export default GameScreenShots