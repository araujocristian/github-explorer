import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/19674933?s=400&u=25605340bd05f5fa54f2ac70b316623798e5ddf9&v=4"
            alt="Cristian Araujo"
          />
          <div>
            <strong>Cristian</strong>
            <p>descripstions</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>92183</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>92183</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>92183</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="#ddd">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
