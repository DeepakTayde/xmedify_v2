import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const IconCard = ({icon, title, active=false, shadow=false, bgColor}) => {
  return (
    <Stack spacing={2} p={3} height={150} width={200} alignItems='center' borderRadius={2} bgcolor={active? "rgba(42,167,255,0.08)": bgColor} border={active ? "1px solid #2AA7FF" : "0"} boxShadow={shadow?"0 0 24px rgba(0, 0, 0, 0.09)":"none"}>
        <Box component='img' src={icon} height={60} width={60} alt={title}/>
        <Typography color={active ? 'primary.main' : "#ABB6C7"} fontSize={18} fontWeight={active ? 600 : 400}>{title}</Typography>
    </Stack>
  )
}

export default IconCard