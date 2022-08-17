import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { settings } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './NowListeningPage.css';

const NowListeningPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Now listening</IonTitle>
          {!isPlatform('ios') && <IonButtons slot='secondary'>
            <IonButton>
              <IonIcon slot='icon-only' icon={settings}/>
            </IonButton>
          </IonButtons>}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle slot='secondary' size="large">Now listening</IonTitle>
            <IonButtons slot='primary'>
              <IonButton >
                <IonIcon slot='icon-only' icon={settings}/>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Now listening page" />
      </IonContent>
    </IonPage>
  );
};

export default NowListeningPage;
