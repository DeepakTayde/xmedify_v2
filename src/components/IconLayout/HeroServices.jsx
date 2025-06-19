import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DoctorIcon from '../../assets/Doctor.png'
import DrugStoreIcon from '../../assets/Drugstore.png'
import HospitalIcon from '../../assets/Hospital.png'
import CapsuleIcon from '../../assets/Capsule.png'
import AmbulanceIcon from '../../assets/Ambulance.png'
import IconCard from '../IconCard/IconCard'


const HeroServices = () => {

  const services = [
    {img: DoctorIcon , title: "Doctors"},
    {img: DrugStoreIcon , title: "Labs"},
    {img: HospitalIcon , title: "Hospitals", active:true},
    {img: CapsuleIcon , title: "Medical Store"},
    {img: AmbulanceIcon , title: "Ambulance"},
  ]
  return (
    <Box>
      <Typography component='h4' fontSize={20} color='#102851' fontWeight={500} textAlign='center' mb={2}>
        You may be looking for
      </Typography>
      <Grid container columnSpacing={{xs: 1, md: 2}} justifyContent='space-between'>
          {services.map((service)=>(
              <Grid item key={service.title} xs={4} md={2.5} >
            <IconCard img={service.img} title={service.title} active={service.active || false} bgColor='#FAFBFE'/>
          </Grid>
          )

          )}
      </Grid>
    </Box>
  )
}

export default HeroServices