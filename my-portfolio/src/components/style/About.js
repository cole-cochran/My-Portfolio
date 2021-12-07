import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function ImageAvatars() {
  return (
    <Stack className="about-me">
        <Avatar alt="Cole Cochran staring into the distance" 
        src="https://github.com/cole-cochran/My-Portfolio/blob/develop/my-portfolio/src/assets/images/portrait.png?raw=true"
        sx={{ width: 200, height: 200 }}
      />
      <Typography>
      Cole Cochran is a Software Engineer with experience in DevOps & Site Reliability turned Full Stack Developer.
       When not working on understanding different programming languages, he spends time mountain biking and entertaining his Australian Shepherd. 
      </Typography>
    </Stack>
  );
}