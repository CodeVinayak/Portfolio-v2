import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:Hello@vinayaksingh.in">Hello@vinayaksingh.in</a>
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