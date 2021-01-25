import React from 'react'
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" userText="Nice Post" userAvatar="https://source.unsplash.com/random" />
      </ApprovalCard>

      <CommentDetail author="Alex" timeAgo="Today at 2:30AM" userText="Same To You!" userAvatar="https://source.unsplash.com/random" />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" userText="Awesome Thread" userAvatar="https://source.unsplash.com/random" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
