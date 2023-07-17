
import { useEffect, useState } from "react";
import api from '../../services/api'

// URL da API: /movie/now_playing?api_key=3790253604aa07af218badb6767b5e8e&language=pt-BR

function Home(){

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing",{
        params:{
          api_key: "3790253604aa07af218badb6767b5e8e",
          language: "pt-BR",
          page: 1,
        }
      })

      //console.log(response.data.results.slice(0,10))

      setFilmes(response.data.results.slice(0,10))
    }

    loadFilmes()

  },[])

  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`htts://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filmes.title}/>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;