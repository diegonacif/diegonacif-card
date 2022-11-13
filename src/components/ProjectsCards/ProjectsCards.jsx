import {useState, useEffect} from "react";
import { Container, Screenshot } from './styles';

import api from '../../services/axios';

export function ProjectsCards({ repoId }) {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    async function getRepository() {
      await api
        .get(`/repos`)
        .then((response) => setRepo(response.data[repoId]))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      }      
      getRepository();
    }, [repoId]);
    
    console.log(repo.name);
  return (
    <Container>
      <Screenshot />
      <span>{repo.name}</span>
      <span>{repo.created_at}</span>
      <span>{repo.updated_at}</span>
      <div className="buttons">
        <button>VER O SITE</button>
        <button onClick={() => window.open(`${repo.html_url}`)}>GITHUB</button>
      </div>
    </Container>
  );
};