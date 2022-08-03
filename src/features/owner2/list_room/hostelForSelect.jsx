import React from 'react';
import PropTypes from 'prop-types';
import ShowImage from '../../../components/showImage';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

HostelForSelect.propTypes = {
    
};

function HostelForSelect({hostel}) {
    return (
        <Card>
            <CardActionArea
                // onClick={() => handleClickWishList(hostel.id)}
            >
                <CardMedia
                    component="img"
                    height="auto"
                    // image="https://picsum.photos/300"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {hostel.name}
                    </Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    );
}

export default HostelForSelect;