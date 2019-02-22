import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class ModalControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button color="olive" onClick={this.handleOpen}>Modal Legal Esse</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='React em 2019' />
        <Modal.Content>
          <h3>Então vamos lá! Com esse clareamento que está sendo propiciado pelos estudos recentes em React, teremos boas novidades em 2019.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Estude com Mais Afinco !!!!!!!
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
export default ModalControlled;