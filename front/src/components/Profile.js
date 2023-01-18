/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Card, Icon, Image } from 'semantic-ui-react'

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Card>
        <Image src='https://cdn4.iconfinder.com/data/icons/professional-avatar-5/48/transcriber_avatar_man_profile_professions-512.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            
          </Card.Header>
          <Card.Meta>
            <span className='date'></span>
          </Card.Meta>
          <Card.Description>
            
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            
          </a>
        </Card.Content>
      </Card>


    </div>
  );
};

export default Profile;
