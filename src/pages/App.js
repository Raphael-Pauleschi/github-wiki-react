import gitLogo from "../assets/github.png";
import Input from "../components/Input";
import { Container } from "./styles";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import Button from "../components/Button";
import { api } from "../services/api";

function App() {

const [repos, setRepos] = useState([]);
const [currentRepo, setCurrentRepo] = useState([]);

const handleSearchRepo = async () =>{
  const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
        setRepos(prev => [...prev, data]);
    }  
}

  return (
    <Container>
      <img
        src={gitLogo}
        width={72}
        height={72}
        alt="GitHub logo (a cat squid)"
      />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value) }/>
      <Button onClick={handleSearchRepo}/>
   {repos.map((repo)=>  <ItemRepo key={repo.node_id}/>)}
    </Container>
  );
}

export default App;
