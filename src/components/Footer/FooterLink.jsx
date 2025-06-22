import { Link, Stack } from '@mui/material'
import React from 'react'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const FooterLink = ({children}) => {
  return (
    <Link underline='none' color='#fff'>
        <Stack direction='row' spacing={0.5}>
        <KeyboardArrowRightIcon/>
            {children}
        </Stack>
    </Link>
  )
}

export default FooterLink