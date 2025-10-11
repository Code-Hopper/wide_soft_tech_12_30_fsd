import React, { useState } from 'react'
import LanugageGrid from './components/LanugageGrid.jsx';
import AddLanuage from './components/AddLanuage.jsx';

import { languages } from './components/Dataset.js';

const App = () => {

  let [dataSetLanguages, setDataSetLanguages] = useState(languages)

  return (
    <>
      <AddLanuage dataSetLanguages={dataSetLanguages} dataSetLanguagesHandler={setDataSetLanguages} />
      <LanugageGrid dataSetLanguages={dataSetLanguages} />
    </>
  )
}

export default App