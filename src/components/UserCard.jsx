import React from 'react';
import { CardContainer, CardDiv, NormalText, UserAvatar, UserBio, UserInfoBox1, UserName, UserRepos } from '../styling';
import { Link } from 'react-router-dom';
import { RiGitRepositoryLine } from "react-icons/ri";
import { SlUserFollowing } from "react-icons/sl";
import { PiUsers } from "react-icons/pi";


const UserCard = ({user}) => {


  return (
    <CardDiv>
      <Link style={{ textDecoration: 'none', color:'black', display:'flex', width:'100%' }} to={`/user/${user.login}`} state= {{repos_url:user.repos_url, user:user}} >
          <CardContainer>
          <UserAvatar src={user.avatar_url} alt="avatar" />
            <UserInfoBox1>
              <UserName>{user.name}</UserName>
              <UserBio>{user.bio}</UserBio>
              <UserRepos>
                <RiGitRepositoryLine style={{marginRight:'5px'}}/>
                <NormalText>{user.public_repos}</NormalText>
                <PiUsers />
                <NormalText>{user.followers}</NormalText>
                <SlUserFollowing />
                <NormalText>{user.following}</NormalText>
              </UserRepos>
            </UserInfoBox1>
          </CardContainer>
    </Link>
    </CardDiv>
  );
};

export default React.memo(UserCard);
