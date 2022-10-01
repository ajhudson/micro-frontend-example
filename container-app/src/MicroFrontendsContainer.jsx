import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FirstRemoteMicroApp = React.lazy(async () => import("FirstMicroApp/App"));
const SecondRemoteMicroApp = React.lazy(async () =>
  import("SecondMicroApp/App")
);

const MicroFrontendsContainer = () => {
  return (
    <div>
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>1st Micro Frontend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FirstRemoteMicroApp />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>2nd Micro Frontend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SecondRemoteMicroApp />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MicroFrontendsContainer;
