import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If you want to talk to me, don't hesitate to call me or send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:Hello@vinayaksingh.in">Hello@vinayaksingh.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone No" />
          <a href="tel:+919630576848">(+91) 9630576848</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}