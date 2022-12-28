// Set default options for MUI components

export const components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
      disableFocusRipple: true,
      disableTouchRipple: true,
    },
  },
  MuiTextField: {
    defaultProps: {
      // variant: "outlined",
      // fullWidth: true,
      // size: "small",
    },
  },
  MuiSelect: {
    defaultProps: {
      // variant: "outlined",
      // fullWidth: true,
      // size: "small",
    },
  },
  // Paper
  MuiPaper: {
    defaultProps: {},
  },
  //Accordion
  MuiAccordion: {
    defaultProps: {},
  },
  // AccordionSummary
  MuiAccordionSummary: {
    defaultProps: {},
  },
  // AccordionDetails
  MuiAccordionDetails: {
    defaultProps: {},
  },
  // Container
  MuiContainer: {
    defaultProps: {
      //maxWidth: false,
    },
  },
};
