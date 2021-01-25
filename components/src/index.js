import React from 'react'
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" userText="Nice Post" userAvatar="https://source.unsplash.com/random" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 2:30AM" userText="Same To You!" userAvatar="https://source.unsplash.com/random" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" userText="Awesome Thread" userAvatar="https://source.unsplash.com/random" />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
