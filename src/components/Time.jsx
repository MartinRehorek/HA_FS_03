import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

export default function Time(props) {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
      }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, []);
      const now = date.getHours();
      if ((now >= 22 || now <= 6) && props.isClosed === false ) {
        props.manageStore(true)
      } else if (now < 22 && now > 6 && props.isClosed === true) {
        props.manageStore(false)
      }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text" gutterBottom>
        Čas
        </Typography>
        <Typography variant="h5" component="div">
        {date.toLocaleTimeString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
