import React from 'react'
import CommentDetail from '../CommentDetail/CommentDetail';
import faker from "faker";

const AprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">
        <CommentDetail
          nome={faker.name.firstName()}
          sobrenome={faker.name.lastName()}
          data={new Date().toLocaleDateString()}
          hora={new Date().toLocaleTimeString()}
          content={faker.lorem.text()}
          image={faker.image.avatar()} />
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Aceitar</div>
          <div className="ui basic red button">Rejeitar</div>
        </div>
      </div>
    </div>
  )
}
export default AprovalCard;