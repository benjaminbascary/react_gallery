import useSearch from '../hooks/useSearch';
import { Loading } from './Loading';
import { 
	Box, 
	FormLabel, 
	Heading, 
	Image, 
	Input,
	Divider, 
	Grid,
	GridItem
} from '@chakra-ui/react';

const SearchByWord = () => {

	const [images, loading, handleChange] = useSearch();

  return (
		<>
		<Divider orientation='horizontal' />
    <Box 
			display="flex" 
			flexDirection="column" 
			alignItems="center" 
			marginTop='5vh' 
			minH="100vh" 
			marginBottom="5vh"
			>
			<Heading>Search...</Heading>
			<FormLabel>
				<Input 
					placeholder='Type a subject...' 
					width='50vh' 
					onChange={handleChange}
					/>
			</FormLabel>
			{
				loading ? <Loading /> : null
			}
			<Grid templateColumns="repeat(3, 2fr)" gap="6">
				{
				images && images.map(eachUrl => {
					return(
						<GridItem 
							display="flex" 
							flexDirection="row" 
							alignItems="center" 
							justifyContent="center"
							>
							<Image 
								borderRadius='10px' 
								height="auto" 
								src={eachUrl} 
								alt="blahblah" 
								maxW='70%' 
								key={eachUrl} />
						</GridItem>
					) 
				})
				}
			</Grid>
		</Box>
		</>
  )
}

export default SearchByWord;