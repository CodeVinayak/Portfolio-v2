import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Entre em contato comigo</h2>
        <p>Se você viu o meu potencial ou quer conversar comigo, não exite em me mandar uma mensagem.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:joaotuliosoares@hotmail.com">joaotuliosoares@hotmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+5531981213843">(31) 98121-3843</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}