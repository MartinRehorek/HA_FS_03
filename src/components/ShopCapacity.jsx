import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ShopCapacity(props) {
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text" gutterBottom>
        {props.title}
        </Typography>
        <Typography variant="h5" component="div" style={ props.count >= props.maxValue ? { color: 'red'} : {}}>
        {props.count} {props.maxValue ? '/' : ''} {props.maxValue}
        </Typography>
      </CardContent>
      
      <CardActions style={ (props.count < props.maxValue) && !props.isClosed ? {justifyContent: 'center'} : { display: 'none' }}>
        <Button size="large" variant="outlined" style={{ textAlign: 'center', }} onClick={() => props.incrementShop(props.shopIndex)}>+1</Button>
      </CardActions>
    </Card>
  );
}
