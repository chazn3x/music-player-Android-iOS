import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonText, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { useRef, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import './LoginModal.css';

const LoginModal: React.FC<any> = ({ page, presentingElement }) => {
  const modal = useRef(null)
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const { login } = useAuth()
  const handleLogin = () => {
    if (login(mail, password)) {
      setMail('')
      setPassword('')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement} canDismiss>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div className="ion-padding">
          <IonText className='spotify-subs'>
            In order to use this music player you must have a Spotify Premium subscription.
          </IonText>
        </div>
        <IonList inset>
          <IonItem>
            <IonLabel position="stacked">Enter your email</IonLabel>
            <IonInput type="text" placeholder="Your email" value={mail} onIonChange={e => setMail(e.detail.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Enter your password</IonLabel>
            <IonInput type="password" placeholder="Your password" value={password} onIonChange={e => setPassword(e.detail.value)} />
          </IonItem>
        </IonList>
        {error && <IonText color='danger' className='ion-padding'>
          Invalid credentials.
        </IonText>}
        <IonButton expand='block' onClick={handleLogin}>
          Login
        </IonButton>
        {/* <IonButton expand='block' fill='clear'>
          Don't have an account?
        </IonButton> */}
      </IonContent>
    </IonModal>
  );
};

export default LoginModal;
