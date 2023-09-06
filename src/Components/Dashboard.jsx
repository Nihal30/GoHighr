import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <Card
        sx={{
          margin: '20px',
          padding: '20px',
          maxWidth: '100%',
          boxSizing: 'border-box',
          '@media (min-width: 768px)': {
            maxWidth: '50%',
            margin: '20px auto',
          },
          '@media (min-width: 1024px)': {
            maxWidth: '30%',
          },
        }}
      >
        <CardContent>
          <Typography variant="h5">Login Info</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Dashboard;
