import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'
import "./style.css"
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../layout/Footer/Footer'

export default class Agreement extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
    render() {
      return (
          <div>
            <Navbar />
            <div className="parallax2"></div>
            <Container className="agreementDiv">
                <h2 className="center aligned agreement">User Agreement</h2>
                <p className='agreementInfo'>Thank you for choosing to be part of our community at Charity Match (“company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at support@charitymatch.com</p>
            </Container>
            <Footer />
          </div>
      )
    }
}