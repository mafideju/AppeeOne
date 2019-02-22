import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import faker from "faker";

class ModalDimmer extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button color="green" onClick={this.show(true)}>Default</Button>
        <Button color="yellow" onClick={this.show('inverted')}>Inverted</Button>
        <Button color="red" onClick={this.show('blurring')}>Blurring</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>O Melhor CSS em React</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={faker.image.nightlife()} />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalDimmer