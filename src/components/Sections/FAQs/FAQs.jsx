import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import FaqsBanner from '../../../assets/faqs-banner.png'
import CustomizedAccordions from '../../Accordion/Accordion'

const FAQs = () => {
  const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
  ]

  return (
        <Box
          py={6}

        >
          <Container >
                  <Typography
                    sx={{
                      fontSize: "16",
                      color: "primary.main",
                      fontWeight: 600,
                    }}
                    lineHeight={1.2}
                    textAlign="center"
                  >
                    {" "}
                    Get Your Answer
                  </Typography>
                  <Typography
                    variant="h2"
                    fontSize="48px"
                    color="#1B3C74"
                    fontWeight={600}
                    mb={2}
                    textAlign="center"
                    lineHeight={1.2}
                  >
                    Frequently Asked Questions
                  </Typography>
            <Grid container spacing={6} alignItems='center'>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={FaqsBanner}
                  alt="Medical Center Hero"
                  sx={{width:'100%', maxWidth:500, display:'block', mx:'auto'}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                    <Box maxWidth={450}>
                      <CustomizedAccordions  faqs={faqs}/>
                    </Box>

              </Grid>
            </Grid>
          </Container>
        </Box>
  )
}

export default FAQs