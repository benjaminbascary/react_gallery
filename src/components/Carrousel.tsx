import useCarrouselImages from '../hooks/useCarrouselImages';
import { Loading } from './Loading';
import { 
	Box, 
	GridItem, 
	Image, 
	Grid, 
	Divider 
} from '@chakra-ui/react';

const Carrousel = () => {

	const [images] = useCarrouselImages();

	return (
		<>
		<Divider />
		<Box 
			display="flex" 
			flexDirection="column" 
			justifyContent="center" 
			alignItems='center'
			>
			<Grid templateColumns="repeat(3, 2fr)" gap="6">
			{
				images ? images.map(eachUrl => {
					return(
						<GridItem 
							display="flex" 
							flexDirection="row" 
							alignItems="center" 
							justifyContent="center"
							key={eachUrl} 
							>
							<Image 
								borderRadius='10px' 
								height="auto" 
								src={eachUrl} 
								alt="blahblah" 
								maxW='70%' 
								/>
						</GridItem>
					) 
					}
				) : (
					<Loading />
				)
			}
			</Grid>
		</Box>
		</>
	)
}

export default Carrousel;
