
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchData } from '../../APIs';
import { ChildContainers, Container, ContentAndIssuesContainer, PText } from '../../styling';
import UserContext from '../../UserContext';

const RepositoryView = () => {
    const { state: { commits_url, contents_url, issues_url  } } = useLocation();
    const [commitsInfo, setCommitsInfo] = useState([]);
    const [contentsInfo, setContentsInfo] = useState([]);
    const [issuesInfo, setIssuesInfo] = useState([]);
    const { userInfo } = useContext(UserContext);

    useEffect(() => {   
        const getData = async () => {
            const commitsInfo = await fetchData(commits_url.split('{')[0]);
            const contentsInfo = await fetchData(contents_url.split('{')[0]);
            const issuesInfo = await fetchData(issues_url.split('{')[0]);
            setCommitsInfo(commitsInfo);
            setContentsInfo(contentsInfo);
            setIssuesInfo(issuesInfo);
        };
        getData();
    }, [commits_url, contents_url, issues_url]);

    return (
        <Container>
            <h1>{userInfo.name}'s Repositories</h1>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'29%', display:'flex', flexDirection:'column'}}>
                    {contentsInfo && contentsInfo.length > 0 ? <ChildContainers>
                        <h2>Contents:</h2>
                        {contentsInfo && contentsInfo.map(content => (
                                content.download_url && <div key={content.sha} style={{width:'100%',display:'flex', justifyContent:'center'}}>
                                    <a href={content.download_url}>{content.name}</a>
                                </div>
                        ))}
                    </ChildContainers> :  <div style={{display:'flex', justifyContent:'center'}}><h3>No Files</h3></div> }
                    <hr/>
                    { issuesInfo && issuesInfo.length > 0 ?<ChildContainers>
                        
                        <h2>Issues:</h2>
                        {issuesInfo && issuesInfo.map(issue => (
                            <div key={issue.id} style={{width:'100%'}}>
                                <PText style={{fontWeight:'bold'}}>{issue.title}</PText>
                                <PText style={{fontStyle:'italic'}}>Author: {issue.user.login}</PText>
                                <hr />
                            </div>
                        ))}
                    </ChildContainers> : <div style={{display:'flex', justifyContent:'center'}}><h3>No Issues</h3></div> }
                </div>
            <ContentAndIssuesContainer>
                
                <ChildContainers>
                        <h2>Recent Commits:</h2>
                        {commitsInfo && commitsInfo.map(commit => (
                            <div key={commit.id} style={{width:'100%'}}>
                                <PText style={{fontWeight:'bold'}}>Message: {commit.commit.message}</PText>
                                <PText style={{fontStyle:'italic'}}>Author: {commit.commit.author.name}</PText>
                                <hr />
                            </div>
                        ))}
                    </ChildContainers>
            </ContentAndIssuesContainer>
            </div>
            
        </Container>
    );
};

export default RepositoryView;
