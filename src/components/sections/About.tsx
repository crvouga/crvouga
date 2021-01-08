import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { goTo } from "../../utility";
import { ChipTopic } from "../project-card/ChipTopic";
import { usePersonalLogoSrc } from "../ThemeProvider";

const useStyles = makeStyles(() => ({
  cardImageContainer: {
    position: "relative",
    width: "100%",
    paddingTop: `${(1 / 2.35) * 100}%`,
  },
  cardImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  },
}));

const CardImage = ({ src }: { src: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardImageContainer}>
      <img className={classes.cardImage} src={src} />
    </div>
  );
};

const ASU_URL = "https://www.asu.edu/";
export const EducationCard = () => {
  const asuChip = (
    <Box display="inline" p={1 / 2}>
      <Chip
        avatar={<Avatar src="/asu-logo.png" />}
        clickable
        size="small"
        variant="outlined"
        onClick={() => goTo(ASU_URL)}
        label="Arizona State Univeristy"
      />
    </Box>
  );
  return (
    <Card>
      <CardImage src="/diploma.svg" />
      <Divider />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Typography component="div" variant="body1">
          I achieved a Bachelor of Science degree in Mathematics and Statistics
          from {asuChip} in the spring of 2020. My education has sharped my
          problem solving/analytical skills, and provided me with the ability
          and confidence to tackle hard problems that deal with abstact concepts
          and critical thinking.
        </Typography>
      </CardContent>
    </Card>
  );
};

export const SummaryCard = () => {
  const personalLogoSrc = usePersonalLogoSrc();

  return (
    <Card>
      <CardImage src={personalLogoSrc} />
      <Divider />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Summary
        </Typography>
        <Typography variant="body1">
          Howdy. My name is Chris Vouga. I'm a software engineer based in the
          Phoenix Valley. My main area of focus is in web development. Being a
          Math major, I've always enjoyed learning about the theory in software
          engineering like functional programming, type systems, and software
          architecture.
        </Typography>
      </CardContent>
    </Card>
  );
};

export const SkillsCard = () => {
  const techStack = ["typescript", "react", "postgres", "nodejs"].map(
    (topic) => (
      <Box display="inline" key={topic} p={1 / 2}>
        <ChipTopic topic={topic} variant="outlined" size="small" />
      </Box>
    )
  );

  return (
    <Card>
      <CardImage src="/code.svg" />
      <Divider />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Technology
        </Typography>
        <Typography component="div" variant="body1">
          Currently, the tech stack I enjoy most using and have the most
          experience with is: {techStack}. The philsophy I live by is to learn
          and adopt technology on a need-to-nerd basis. So focus on tech that
          gets the job done right rather than tech thats gets the job done
          fashionability.
        </Typography>
      </CardContent>
    </Card>
  );
};

export const About = () => {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        A Little About Me
      </Typography>

      <Grid container spacing={2}>
        <Grid item sm={4}>
          <SummaryCard />
        </Grid>
        <Grid item sm={4}>
          <SkillsCard />
        </Grid>
        <Grid item sm={4}>
          <EducationCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
