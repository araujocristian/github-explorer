import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="button">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/19674933?s=460&u=25605340bd05f5fa54f2ac70b316623798e5ddf9&v=4"
            alt="Cristian Araujo"
          />
          <div>
            <strong>araujocristian/github-explores</strong>
            <p>Uma aplicação para explorar repositórios do Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/19674933?s=460&u=25605340bd05f5fa54f2ac70b316623798e5ddf9&v=4"
            alt="Cristian Araujo"
          />
          <div>
            <strong>araujocristian/github-explores</strong>
            <p>Uma aplicação para explorar repositórios do Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#teste">
          <img
            src="https://avatars3.githubusercontent.com/u/19674933?s=460&u=25605340bd05f5fa54f2ac70b316623798e5ddf9&v=4"
            alt="Cristian Araujo"
          />
          <div>
            <strong>araujocristian/github-explores</strong>
            <p>Uma aplicação para explorar repositórios do Github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
