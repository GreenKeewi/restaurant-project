import ReactDOM from 'react-dom/client'
import { App } from 'App'
import { ThemeProvider } from "theme"
import { SelectedPageProvider } from 'hooks/useSelectedPage'
import { HeightProvider } from 'hooks/useHeightContext'
import { LangProvider } from "i18n";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <SelectedPageProvider defaultSelectedPage="home">
    <LangProvider>
      <ThemeProvider>
        <HeightProvider>
          <App />
        </HeightProvider>
      </ThemeProvider>
    </LangProvider>
  </SelectedPageProvider >
)