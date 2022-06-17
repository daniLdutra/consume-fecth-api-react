import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Repository = {
  full_name: string;
  description: string;
};

function Repos() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/daniLdutra/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);

  return (
    <ul>
      {repositories.map((repo) => {
        return (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Repos;
