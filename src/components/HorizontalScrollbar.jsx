/* eslint-disable react/prop-types */
import React from 'react'
import { Box, IconButton } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollContainerRef = React.createRef();

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={scrollLeft} sx={{ position: 'absolute', left: 0, zIndex: 1 }}>
        <img src={LeftArrowIcon} alt="left-arrow" />
      </IconButton>
      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          width: '100%',
          pl: 6, // to provide space for the left arrow
          pr: 6, // to provide space for the right arrow
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            sx={{ flex: '0 0 auto', m: '0 20px' }}
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Box>
      <IconButton onClick={scrollRight} sx={{ position: 'absolute', right: 0, zIndex: 1 }}>
        <img src={RightArrowIcon} alt="right-arrow" />
      </IconButton>
    </Box>
  );
};

export default HorizontalScrollbar;