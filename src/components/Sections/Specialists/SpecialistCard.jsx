import { Box, Typography } from '@mui/material'
import React from 'react'

const SpecialistCard = ({img, title, designation}) => {
  return (
    <Box textAlign="center">
                  <Box
                component={"img"}
                src={img}
                width={1}
                style={{width:"90%", height:"90%", objectFit:"cover"}}
                mb={2}
                sx={{boxShadow:"0 15px 55px -10px rgba(0,0,0,0.09)", borderRadius:"50% 50% 8px 8px"}}
                />
              <Typography fontSize={{sx:16, md:24}} color='#1B3C74'>{title}</Typography>
              <Typography fontWeight={500} fontSize={{xs:14, md:17}} color='primary.main'>{designation}</Typography>
    </Box>
  )
}

export default SpecialistCard