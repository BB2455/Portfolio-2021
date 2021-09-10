import * as React from "react";
import { AboutWrapper, P } from "./About.styled";
import { Title } from "../shared";

const About = () => {
  return (
    <AboutWrapper id="about">
      <Title>About Me</Title>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima optio
        esse repudiandae amet hic beatae laudantium dolorum totam voluptas
        pariatur maxime officia in deserunt aut molestiae, similique dolore
        expedita quasi aliquam dolorem. Laboriosam repellendus dolores
        voluptates aut, odit sit quo voluptatibus nisi ipsa ad nostrum impedit
        non accusamus quibusdam autem excepturi asperiores illum inventore ex.
        Eos dolorem sunt repellendus autem vel dolores a quo alias cumque
        voluptates. Soluta quaerat quidem ipsum consequuntur. Ipsa architecto
        ipsum cupiditate veritatis quae enim suscipit nobis ex dolor officia
        minus numquam recusandae reprehenderit accusantium, sunt iure dicta esse
        ad qui similique modi soluta. Adipisci, magni!
      </P>
    </AboutWrapper>
  );
};

export default About;
