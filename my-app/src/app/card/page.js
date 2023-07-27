import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";



const CardPage = () => {
    return(
       <div style={{width:"100%",height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
           <Card sx={{maxWidth:300}} >
         <CardMedia component={'img'} 
         height="100"
         image="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
         alt="car"
         />
         <CardContent>
             <Typography gutterBottom variant="h5" component="div">
                 Web Desgin
             </Typography>
             <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tempore accusantium.
                
             </Typography>
         </CardContent>
           <CardActions>
            <Button >Share</Button>
           </CardActions>

           
       </Card>
       </div>
    )
}

export default CardPage;