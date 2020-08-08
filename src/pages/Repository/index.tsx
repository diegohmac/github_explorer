import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues, NotFound, Loading } from './styles';

interface RepositoryParams {
  repository: string;
}

interface RepositoryDTO {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<RepositoryDTO | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function getData(): Promise<void> {
      const [repo, repoIssues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);
      setRepository(repo.data);
      setIssues(repoIssues.data);
    }

    getData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <Link to="/">
          <img src={logoImg} alt="Github Explorer" />
        </Link>
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      {repository ? (
        <>
          <RepositoryInfo>
            <header>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <p>Stars</p>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <p>Forks</p>
              </li>
              <li>
                <strong>{repository.full_name}</strong>
                <p>Open Issues</p>
              </li>
            </ul>
          </RepositoryInfo>
          {issues.length > 0 ? (
            <Issues>
              {issues.map(issue => (
                <a
                  key={issue.id}
                  href={issue.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                  </div>
                  <FiChevronRight size={20} />
                </a>
              ))}
            </Issues>
          ) : (
            <NotFound>There are no open issues.</NotFound>
          )}
        </>
      ) : (
        <Loading size={80} />
      )}
    </>
  );
};

export default Repository;
