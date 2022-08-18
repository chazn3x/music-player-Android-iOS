import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToast,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { musicalNotes, playCircle, search } from 'ionicons/icons';
import NowListeningPage from './pages/NowListeningPage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { TrackPreview } from './components/TrackPreview';
import { usePlayer } from './hooks/usePlayer';

setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>

        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/now-listening">
              <NowListeningPage />
            </Route>
            <Route exact path="/search">
              <SearchPage />
            </Route>
            <Route path="/library">
              <LibraryPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/now-listening" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="now-listening" href="/now-listening">
              <IonIcon icon={playCircle} />
              <IonLabel>Now Listening</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="library" href="/library">
              <IonIcon icon={musicalNotes} />
              <IonLabel>Library</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        <TrackPreview />

        <IonToast
          isOpen={true}
          message="You must be logged in to play some music."
          duration={3000}
        />

      </IonReactRouter>
    </IonApp>
  )
};

export default App;
