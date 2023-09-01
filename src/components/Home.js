import { Container } from "react-bootstrap";

export const Home = () => {

  return (
    <section id='home'>
      <Container>
        <hr size="50" className='main-color'></hr>
        <hr size="50" className='caret-color'></hr>
        <hr size="50" className='sub-color'></hr>
        <hr size="50" className='sub-alt-color'></hr>
        <Container>Hi, my name is</Container>
        <Container>Felipe Ruiz</Container>
        <Container>I'm a Full-Stack Dev</Container>
        <Container></Container>
      </Container>
    </section>
  );
}