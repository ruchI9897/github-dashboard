import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 26px;
    padding-bottom: 20px;
    background-color:#17153B;
    overflow:scroll
`

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const SearchInput = styled.input`
    width: 40%;
    height: 40px;
    border-radius: 30px;
    font-size: 14px;
    padding: 12px;
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
    color:white;
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
    background-color:rgb(200, 172, 214, 0.5)
`

export const UserName = styled.h3`
    margin:4px;
    color: #FAFFAF
`

export const UserBio = styled.h5`
    margin:2px;
    color:white  
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
    height:100vh
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

export const ShowContributorsButton = styled.button`
  align-items: center;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.575rem - 1px) calc(.775rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
    align-self: end;
`
