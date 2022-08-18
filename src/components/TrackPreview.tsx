import { IonButton, IonButtons, IonIcon, IonImg, IonItem, IonLabel, IonThumbnail, IonToolbar } from "@ionic/react";
import { pause, play as playIcon, playForward } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { usePlayer } from "../hooks/usePlayer";
import './TrackPreview.css'

const waitForElement = (sel: string, cb: any) => {
  const el = document.querySelector(sel);
  if (!el || !(el.getBoundingClientRect().height > 0)) {
    requestAnimationFrame(() => waitForElement(sel, cb));
  } else {
    cb(el);
  }
}

export const TrackPreview: React.FC = ({ }) => {
  const [top, setTop] = useState(0);
  useEffect(() => {
    waitForElement('ion-tab-bar', (tabBar) => {
      if (tabBar) {
        const box = tabBar.getBoundingClientRect();
        setTop(window.innerHeight - box.top);
      }
    })
  }, []);

  const { playPause, playing, nextSong } = usePlayer()

  return (
    <IonToolbar className="track-preview-sticky" style={{ bottom: `${top}px` }}>
      <IonThumbnail slot="start">
        <IonImg src='/assets/icon/icon.png' />
      </IonThumbnail>
      <IonLabel>
        Music
      </IonLabel>
      <IonButtons slot="end">
        <IonButton onClick={playPause}>
          <IonIcon slot="icon-only" icon={!playing ? playIcon : pause} />
        </IonButton>
        <IonButton onClick={nextSong}>
          <IonIcon slot="icon-only" icon={playForward} />
        </IonButton>
      </IonButtons>
    </IonToolbar>
  )
}