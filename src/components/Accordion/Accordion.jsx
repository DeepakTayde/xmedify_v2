import * as React from "react";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  "&:not(:last-child)": {
    marginBottom:24,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ color:'primary.main' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: false,

  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(45deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: 0,
  },
  padding:0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  
}));

export default function CustomizedAccordions({ faqs }) {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary aria-controls={`panel${index}d-content`}  id={`panel${index}d-header`}>
            <Typography sx={{fontSize:18, fontWeight:700, color:'#1B3C74'}}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={14} textAlign='left' color="#1B3C74">
             {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
