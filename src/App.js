import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([])
  const [newTech, setNewTech] = useState('')

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech))
  }, [tech])

  const handlaAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  const techSize = useMemo(() => tech.length, [tech])

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handlaAdd}>
        Add
      </button>
    </>
  );
}

export default App;
