import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Comment = ({comment}) => {
    const {name, email, body} = comment;
    return (
        <div className='col-md-4 mt-2'>
            <Card sx={{ maxWidth: 345, height:265 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <h6 className="">email: {email}</h6>
                        <Typography variant="body2" color="text.secondary">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
            {/* <div className="card mt-4 shadow" style={{height:'250px'}}>
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <h6 className="">email: {email}</h6>
                    <p className="mt-3 pt-2 border-primary border-top card-text" >{body}</p>
                </div>
            </div> */}
        </div>
    );
};

export default Comment;