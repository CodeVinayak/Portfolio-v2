import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){
  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Let's discuss automation, monitoring, and manufacturing improvement opportunities.</p>
        <p>Reach out for collaboration, project discussion, or industrial digitalization initiatives.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:anwarraihan10@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:anwarraihan10@gmail.com">anwarraihan10@gmail.com</a>
        </div>
        <div>
          <a href="tel:+6285766600726"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+6285766600726">(+62) 85766600726</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}
