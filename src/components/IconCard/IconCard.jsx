import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const IconCard = ({img, title, active=false, bgColor}) => {
  return (
    <Stack spacing={2} py={3} px={5} alignItems='center' borderRadius={2} bgcolor={active? "rgba(42,167,255,0.08)": bgColor} border={active ? "1px solid #2AA7FF" : "0"}>
        <Box component='img' src={img} height={60} width={60} alt={title}/>
        <Typography color={active ? 'primary.main' : "#ABB6C7"} fontSize={18} fontWeight={active ? 600 : 400}>{title}</Typography>
    </Stack>
  )
}

export default IconCard