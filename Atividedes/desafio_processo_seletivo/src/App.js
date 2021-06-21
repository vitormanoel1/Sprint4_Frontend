import './App.css';
import { Component } from 'react';


class Git extends Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      listaDoRepositorios : [],
      nomeDoRepositorio : ''
    }
  }

  buscarRepositorios = (element) =>
  {
    element.preventDefault();

    console.log('API funcionando')

    // fetch('https://api.github.com/user')
    fetch('https://api.github.com/users/' + this.state.nomeDoRepositorio + '/repos')
    // fetch('https://api.github.com/users/DudaPereira/repos')

    .then(resposta => resposta.json())

    .then(lista => this.setState({listaDoRepositorios : lista}))

    .catch(erro => console.log(erro) )
  }

  atualizaNome = async (nome) => 
  {
    await this.setState({nomeDoRepositorio : nome.target.value})
    console.log(this.state.nomeDoRepositorio)
  }

  render()
  {
  return (
    <div className="GIT">
      <main>
        <section>
          <h2> Buscar Repositorios </h2>
          <form onSubmit={this.buscarRepositorios}>
            <div>
              <input
              type="text"
              value={this.state.nomeDoRepositorio}
              onChange={this.atualizaNome}
              placeholder="Usuario do GitHub"
              />
              <button type="submit" onClick={this.buscarRepositorios}>Buscar</button>
            </div>
          </form>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th> # </th>
                <th> Nome </th>
                <th> Descrição </th>
                <th> Data de Criação </th>
                <th> Tamanho </th>
              </tr>
            </thead>
            <tbody>
              {  this.state.listaDoRepositorios.map( (repositorio) => {           
                  return(
                    <tr key={repositorio.id}>
                      <td>{repositorio.id}</td>
                      <td>{repositorio.name}</td>
                      <td>{repositorio.description}</td>
                      <td>{repositorio.created_at}</td>
                      <td>{repositorio.size}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>        
        </section>
      </main>
    </div>
    )
  }
}

export default Git;
