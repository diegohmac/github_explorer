import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface RepositoryDTO {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [error, setError] = useState('');
  const [repositories, setRepositories] = useState<RepositoryDTO[]>(() => {
    const storageRepos = localStorage.getItem('@GithubExplorer:repositories');
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    if (!newRepo) {
      setError('Type author/repository-name');
      return;
    }
    try {
      const { data: repo } = await api.get<RepositoryDTO>(`repos/${newRepo}`);
      setRepositories([...repositories, repo]);
      setNewRepo('');
      setError('');
    } catch (err) {
      setError('Repository not found.');
    }
  }

  function handleDeleteRepository(name: string): void {
    const remainingRepos = repositories.filter(repo => repo.full_name !== name);
    setRepositories(remainingRepos);
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories.</Title>

      <Form hasError={!!error} onSubmit={handleAddRepository}>
        <input
          placeholder="Type the repository name"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Search</button>
      </Form>

      {error && <Error>{error}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <div key={repository.full_name}>
            <Link to={`/repository/${repository.full_name}`}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
            <FiX
              size={20}
              onClick={() => handleDeleteRepository(repository.full_name)}
            />
          </div>
        ))}
      </Repositories>
    </>
  );
};

export default Home;
