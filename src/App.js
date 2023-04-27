import React, {useState, useEffect} from 'react';
import './style/App.css';
import Header from '../src/components/Header/Header';
import Card from '../src/components/Card/Card';

function App() {

  // LE TITRE DE CETTE PAGE
  const [title, setTitle] = useState('App To Do List');
  
  useEffect(() => {
    
    document.title = title;
  }, [title]);

  // TO DO LISTE
  const [monState, setMonState] = useState([

    {tache: 'Créer une app web', txt:  "Apprendre React."}
  ]);

  const [tache, setTache] = useState('');
  const [txt, setTxt] = useState('');

  function creationCarte(e){

    e.preventDefault();

    const nvTab = [...monState, {tache: tache, txt: txt}];

    setMonState(nvTab);
    // console.log(nvTab);

    setTache('');
    setTxt('');
  }

  function supprCarte(index){

    const TabNettoyage = [...monState];

    // console.log(index);
    // console.log(tabNettoyage.filter(item => tabNettoyage.indexOf(item)
    // !== tabNettoyage.indexOf(tabNettoyage[index])));

    setMonState(TabNettoyage.filter(item => TabNettoyage.indexOf(item)
    !== TabNettoyage.indexOf(TabNettoyage[index])));
  }


  // RENDU HTML
  return (
    <div>
      <Header />

      <div className="container">

        <h2 className="container_title">Rentrez vos tâches à faire</h2>

        <form onSubmit={creationCarte}>

          {/* FIELD 1 */}
          <div className="field">

            <label htmlFor="tache" className="label">Tâche</label>
            <input type="text" className="input" id="tache" value={tache} placeholder="Une tâche à faire" onChange={e => setTache(e.target.value)} />
          </div>

          {/* FIELD 2 */}
          <div className="field">

            <label htmlFor="txt" className="label">Contenu de la tâche</label>
            <textarea type="text" className="textarea" id="txt" value={txt} placeholder="Une tâche à faire" cols="30" rows="10" onChange={e => setTxt(e.target.value)}></textarea>
          </div>


          {/* BOUTON */}
          <div className="button_container">
            <button type="submit" className="button">Créer une tâche</button>
          </div>
        </form>

        {/* La méthode "map" retourne un nouveau tableau, voir le nombre de tableau dans la TO DO LISTE ci-dessus */}
        {
          monState.map((todo, index) => (

            <Card
            key={index}
            index={index}
            tache={todo.tache}
            txt={todo.txt}
            supprFunc={supprCarte}
            />
          ))
        }

      </div>

    </div>
  );
}

export default App;