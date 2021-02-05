import React, { useState } from "react";
import { Button, Progress, Grid, Image, Header } from "semantic-ui-react";
import Stepper, { Head, Navigation, Steps } from "./styles";
import arrow from "../../assets/images/icons/Arrowleft.svg";
const next = "Next";
const prev = "Previous";
const Index = (props) => {
  const { steps } = props;
  const [step, changeStep] = useState(0);

  const prev = () => {
    if (step > 0) {
      changeStep(step - 1);
    }
  };
  const next = () => {
    if (step < 11) changeStep(step + 1);
  };

  const { navigations, Component } = (steps && steps[step]) || {
    navigations: ["Back", "Next"],
    Component: () => <Header as="h3">Step {step + 1}</Header>,
  };

  return (
    <Stepper>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width="3">
            <Button disabled={step === 0} className="btn-back" onClick={next}>
              <Image src={arrow} /> back
            </Button>
          </Grid.Column>
          <Grid.Column width="10">
            <Head>
              <Progress percent={(step / 11) * 100} className="step-progress" />
            </Head>
            <Steps>{Component ? <Component /> : ""}</Steps>
          </Grid.Column>
          <Grid.Column width="3"></Grid.Column>
        </Grid.Row>
      </Grid>

      <Navigation>
        {navigations.map((nav, index) => {
          let back = navigations.length > 1 && index === 0;
          return (
            <Button
              key={nav}
              className={back ? "ghost" : ""}
              onClick={() => {
                back ? prev() : next();
              }}
            >
              {nav}
            </Button>
          );
        })}
      </Navigation>
    </Stepper>
  );
};

export default Index;
