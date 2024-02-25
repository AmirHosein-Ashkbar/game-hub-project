import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Prop{
    children: string; 
}

const ExpandableText = ( { children }: Prop) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const limit = 300;
    

  if(children === "") return <Text>No description Found.</Text>
  if(children.length <= limit) return <Text>{children}</Text>

  const summary = children.substring(0,limit);

  return (
    <>
    <Text>
        {isExpanded ? children : summary+"..."}
        <Button fontWeight="bold" colorScheme='yellow' marginLeft={1} size='xs'  onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Show Less" : "Read More"}</Button>
    </Text>
      
    </>
  )
}

export default ExpandableText