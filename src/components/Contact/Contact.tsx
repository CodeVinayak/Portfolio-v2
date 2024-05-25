import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";

// import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contacto</h2>
       
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:verocampero2@gmail.com"><img src={emailIcon} alt="Email" />verocampero2@gmail.com</a>
        </div>
       
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}