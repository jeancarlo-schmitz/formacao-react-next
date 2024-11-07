import { useState } from 'react'
import './App.css'
import Box from '@mui/material/Box'
import Header from './ui/surface/header/Header'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Footer from './ui/surface/footer/Footer.styled'

function App() {
  const [count, setCount] = useState(0)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
      cols: 2,
    },
  ];

  return (
    <Box>
      <Header />
      <main>
        <Box sex={{ pt: 15, maxWidth: 'sm', mx: 'auto' }} component={'section'}>
          <Typography
            component={'h1'}
            variant={matches ? 'h4' : 'h2'}
            align='center'>
            Album de Fotos
          </Typography>
          <Typography
            component={'p'}
            variant={matches ? 'body2' : 'subtitle1'}
            align='center'
            sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Non illum laborum unde iusto
            porro eum voluptatem earum suscipit amet quos
            doloribus tempora, reprehenderit aspernatur
            facere praesentium, consectetur deleniti numquam
            molestiae.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 'sm', mx: 'auto'}}>
          <ImageList>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </main>

      <Footer />
    </Box>
  )
}

export default App
