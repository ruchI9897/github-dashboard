import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 26px;
    padding-bottom: 20px;
`

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
`

export const SearchInput = styled.input`
    width: 40%;
    height: 40px;
    border-radius: 30px;
    font-size: 14px;
    padding: 6px;
`

export const AllCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: normal;
    justify-content: center;
    flex-direction: column;
    width: 70%;
`

export const CardContainer = styled.div`
    textDecoration: none;
    color:black;
    width: 100%;
    display: flex;

`

export const FilterContainer = styled.div`
    display:flex;
    gap:12px
`


export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 100%;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;

`

export const UserName = styled.h3`
    margin:4px;
    color: green
`

export const UserBio = styled.h5`
    margin:2px;
    color:gray  
`

export const UserRepos = styled.div`
    margin:0;
    display:flex;
    gap:4px;
    margin-left:5px;
    align-items: center;
`

export const NormalTextBold = styled.h6`
    margin:0;
    font-weight:900;
    font-size:14px
`

export const NormalText = styled.h6`
    margin:0;
    font-size:12px
`

export const FollowersDiv = styled.div`
display: flex;
    gap: 12px;
`

export const UserAvatar = styled.img`
    width: 60px;
    border-radius: 50%;
    margin: 10px;
    
`

export const UserInfoBox1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const RepoInfo = styled.div`
    display:flex;
    width: 100%;
    padding: 5px;


`

export const RepoContainer = styled(CardContainer)`
    flex-direction:column;
`

export const Container = styled.div`
    width: 100%;
`

export const ContentAndIssuesContainer = styled.div`
    display:flex;
    gap:10px;
    width:70%;
    flex-direction: column;
`

export const ChildContainers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 99%;
    border-radius: 5px;
`

export const PText = styled.p`
    margin:0
`
