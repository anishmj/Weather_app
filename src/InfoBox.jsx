import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

function InfoBox({info}) {

    const image_url = "https://www.google.com/imgres?q=unsplash%20haze&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1743228632%2Fphoto%2Fmanhattan-bridge-and-brooklyn-bridge-in-haze-or-smoke-or-fire-smoke.webp%3Fb%3D1%26s%3D170667a%26w%3D0%26k%3D20%26c%3DUs5axNMHoGz35NB1_N69n4Q9lwCoI29pVNCILV6B5co%3D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhaze&docid=XO6_vii6oGZqjM&tbnid=x_pQN4-vqN-xvM&vet=12ahUKEwiHuuPe2O-HAxUTklYBHQG_JtgQM3oECEwQAA..i&w=509&h=339&hcb=2&ved=2ahUKEwiHuuPe2O-HAxUTklYBHQG_JtgQM3oECEwQAA"
    
  return (
    <div className='InfoBox'>
        
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={image_url}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {info.city}
      </Typography>
      <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>Temperature = {info.temp}&deg;C</div>
        <div>Feels Like = {info.feelslike}</div>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  </div>
  )
}

export default InfoBox