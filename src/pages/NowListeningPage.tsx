import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { personCircleOutline, settings } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import LoginModal from '../components/LoginModal';
import './NowListeningPage.css';

const NowListeningPage: React.FC = () => {
  const page = useRef(null)
  const [presentingElement, setPresentingElement] = useState(null);
  useEffect(() => {
    setPresentingElement(page.current);
  }, []);
  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Now listening</IonTitle>
          {!isPlatform('ios') && <IonButtons slot='secondary'>
            <IonButton id="open-modal">
              <IonIcon slot='icon-only' size='large' icon={personCircleOutline} />
            </IonButton>
            <IonButton >
              <IonIcon slot='icon-only' icon={settings} />
            </IonButton>
          </IonButtons>}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle slot='secondary' size="large">Now listening</IonTitle>
            <IonButtons slot='primary'>
              <IonButton id="open-modal">
                <IonIcon slot='icon-only' size='large' icon={personCircleOutline} />
              </IonButton>
              <IonButton >
                <IonIcon slot='icon-only' icon={settings} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Now listening page" />
      </IonContent>
      <LoginModal page={page} presentingElement={presentingElement} />
    </IonPage>
  );
};

export default NowListeningPage;
