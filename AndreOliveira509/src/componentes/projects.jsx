function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="project-list">

        <div className="project-card">
          <h3>Clima por CEP</h3>
          <p>Aplicativo que consome a API do OpenWeatherMap para mostrar o clima atual de uma cidade via CEP.</p>
          <div className="project-links">
            <a href="https://github.com/andreoliveira509/clima-api" target="_blank" rel="noopener noreferrer">Ver repositório</a>
            <a href="https://andreoliveira509.github.io/clima-api/" target="_blank" rel="noopener noreferrer">Ver site</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Pokédex</h3>
          <p>Uma Pokédex moderna que permite pesquisar Pokémon por tipo, com dados da PokéAPI.</p>
          <div className="project-links">
            <a href="https://github.com/andreoliveira509/poke-api" target="_blank" rel="noopener noreferrer">Ver repositório</a>
            <a href="https://andreoliveira509.github.io/poke-api/" target="_blank" rel="noopener noreferrer">Ver site</a>
          </div>
        </div>

        <div className="project-card">
          <h3>To-Do List com React</h3>
          <p>Lista de tarefas com persistência no localStorage, estilizada com Tailwind.</p>
          <div className="project-links">
            <a href="https://github.com/seuusuario/todo-react" target="_blank" rel="noopener noreferrer">Ver repositório</a>
            <a href="https://seuusuario.github.io/todo-react/" target="_blank" rel="noopener noreferrer">Ver site</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Batalha Naval</h3>
          <p>Jogo da batalha Naval com cartas animadas e pontuação, feito com HTML, CSS e JS.</p>
          <div className="project-links">
            <a href="https://github.com/andreoliveira509/batalha-naval" target="_blank" rel="noopener noreferrer">Ver repositório</a>
            <a href="https://andreoliveira509.github.io/batalha-naval/" target="_blank" rel="noopener noreferrer">Ver site</a>
          </div>
        </div>

        <div className="project-card">
          <h3>CRUD com Node.js</h3>
          <p>Aplicação completa de cadastro de usuários com Node, Express e Sequelize.</p>
          <div className="project-links">
            <a href="https://github.com/seuusuario/crud-node" target="_blank" rel="noopener noreferrer">Ver repositório</a>
            <a href="https://seuusuario.github.io/crud-node/" target="_blank" rel="noopener noreferrer">Ver site</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
