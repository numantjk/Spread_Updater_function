import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import UpdaterFunction from "./react_updater/updater_app.tsx";
import FormUpdater from './form_updater/form_upadate.tsx'
import Number_updater from './react_int-updater_v1/number_updater.tsx'
import SpreadUpdaterExample from './react_object_updater/object_updater.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <SpreadUpdaterExample/>
      <Number_updater/>
      <FormUpdater />
      <UpdaterFunction />
    <App />
  </StrictMode>,
)
