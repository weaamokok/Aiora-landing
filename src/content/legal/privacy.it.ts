import type { LegalDoc } from './types';

// Italian privacy policy, translated from privacy.en.ts. GDPR terms follow the
// official Italian text of the Regulation (titolare del trattamento, base
// giuridica, clausole contrattuali tipo). Legal and native-speaker review
// pending (Linear AIO-58).

const doc: LegalDoc = {
  title: 'Informativa sulla privacy',
  description: 'Quali dati raccoglie Aiora, perché, con chi li condivide e come cancellarli.',
  updated: '30 ottobre 2026',
  summaryTitle: 'In breve',
  summary: [
    'Raccogliamo ciò che serve ad Aiora per pianificare le tue giornate: il tuo account, le tue risposte, il tuo programma, i tuoi pensieri e le tue liste e, se le aggiungi, le tue foto.',
    'Le tue risposte vengono inviate a un modello di IA per costruire il tuo programma. Le foto ci arrivano solo se le usi con Plus. Il tuo nome, la tua email e i tuoi pensieri non vengono mai inviati a un modello di IA.',
    'Non vendiamo i tuoi dati e non mostriamo pubblicità.',
    'Puoi eliminare il tuo account e tutto ciò che contiene dall’app, e verrà cancellato dai nostri server entro 30 giorni.',
  ],
  contentsLabel: 'In questa pagina',
  sections: [
    {
      id: 'who',
      title: 'Chi siamo',
      body: [
        'Aiora è un’app di pianificazione per iPhone e Android, con questo sito su aioraspace.com. In questa informativa, «Aiora», «noi» e «ci» indicano il team che la gestisce. Siamo noi a decidere come vengono usati i tuoi dati personali, il che ci rende titolari del trattamento ai sensi delle leggi sulla protezione dei dati come il GDPR.',
        'Per domande sulla privacy scrivi a support@aioraspace.com.',
      ],
    },
    {
      id: 'collect',
      title: 'Cosa raccogliamo',
      body: [
        '**Il tuo account.** Il tuo indirizzo email e una password protetta con hash sicuro, oppure l’identificativo che ci fornisce Apple o Google quando accedi con loro. Il tuo nome, la bio, l’immagine del profilo e la lingua dell’app, se li aggiungi. Quando ti registri con l’email, conserviamo la tua email, il nome e la password con hash per un massimo di 24 ore, in attesa del codice che ti abbiamo inviato; il tuo account viene creato solo quando lo inserisci.',
        '**Usare Aiora come ospite.** Puoi iniziare senza un account. Ciò che fai come ospite resta sul tuo dispositivo finché non accedi; fino ad allora non viene inviato nulla ai nostri server.',
        '**Le tue risposte.** Ciò che dici ad Aiora quando costruisce il tuo programma: il genere, la fascia d’età, il lavoro, quanto sono attive le tue giornate, quanto spesso ti alleni, i tuoi obiettivi e le note che aggiungi.',
        '**Ciò che pianifichi e scrivi.** Il tuo programma, le attività e gli obiettivi settimanali e se li hai completati, i pensieri che scrivi in Aiora e cosa decidi di farne, la lista della spesa e le tue sessioni di concentrazione.',
        '**Le foto, se le aggiungi.** Fino a tre foto (viso, profilo e figura intera), usate per modellare il tuo programma. Aggiungere foto è facoltativo e fa parte di Aiora Plus. Un modello di IA le esamina una volta e scrive una breve descrizione di ciò che è utile per il tuo programma (per esempio la pelle e la postura), che conserviamo con il tuo profilo.',
        '**Abbonamenti.** Se acquisti Aiora Plus, il piano che hai scelto, il suo stato e la data di rinnovo, e il riferimento della transazione di Apple o Google. Non riceviamo mai il numero della tua carta.',
        '**Sessioni di accesso.** Per ogni dispositivo su cui hai effettuato l’accesso, l’indirizzo IP e i dati del dispositivo da cui è avvenuto, così possiamo proteggere il tuo account e disconnettere un dispositivo.',
        '**Dispositivo e utilizzo.** L’identificativo che ci serve per inviarti notifiche push, la piattaforma del tuo dispositivo, quanti programmi con l’IA hai generato questo mese e gli eventi di utilizzo dell’app (per esempio quali schermate vengono aperte e quali funzioni vengono usate). Gli eventi di utilizzo descrivono cosa hai fatto nell’app, non cosa hai scritto. Su Android, se hai installato Aiora da un link condiviso da qualcuno, registriamo anche la campagna e il codice di condivisione contenuti in quel link. Se l’app si blocca, invia un rapporto sull’arresto anomalo con il modello del dispositivo, il sistema operativo, la versione dell’app e la schermata in cui ti trovavi.',
        '**Posizione approssimativa, se lo consenti.** Usata solo per mostrare il meteo nella schermata Home. Viene inviata al nostro fornitore di dati meteo, e il servizio di localizzazione del tuo telefono può trasformarla nel nome di un luogo. Non la conserviamo.',
        '**I messaggi che ci invii.** Se ci scrivi via email, conserviamo la conversazione per poterti aiutare.',
      ],
    },
    {
      id: 'use',
      title: 'Come li usiamo e su quale base giuridica',
      body: [
        {
          table: {
            head: ['Cosa facciamo', 'Base giuridica'],
            rows: [
              ['Gestire il tuo account, sincronizzare programma e liste tra i dispositivi e tenerli al sicuro', 'Fornire il servizio che hai richiesto (contratto)'],
              ['Costruire e ricostruire il tuo programma con l’IA a partire dalle tue risposte', 'Contratto'],
              ['Usare le tue foto per modellare il tuo programma', 'Il tuo consenso, che l’app ti chiede prima che tu aggiunga le foto'],
              ['Inviare promemoria e notifiche push', 'Il tuo consenso, tramite il permesso per le notifiche del dispositivo'],
              ['Inviare email relative all’account (codici di registrazione, reimpostazione della password)', 'Contratto'],
              ['Elaborare e verificare gli acquisti di Aiora Plus', 'Contratto, e conservazione dei dati di fatturazione richiesta dalla legge'],
              ['Capire come viene usata Aiora e come le persone la trovano, per correggerla e migliorarla', 'Il nostro legittimo interesse ad avere un prodotto che funziona'],
              ['Prevenire gli abusi e mantenere il servizio sicuro, anche assicurandoci che il primo programma gratuito sia dato una sola volta a persona', 'Il nostro legittimo interesse alla sicurezza e a un uso corretto'],
            ],
          },
        },
        'Non usiamo i tuoi dati per la pubblicità, non creiamo profili pubblicitari e non vendiamo né affittiamo i tuoi dati a nessuno.',
      ],
    },
    {
      id: 'ai',
      title: 'L’IA e il tuo programma',
      body: [
        'Quando Aiora costruisce un programma, il nostro server invia le tue risposte (genere, fascia d’età, lavoro, attività, allenamento, obiettivi e note) e la lingua dell’app a un modello di IA, che restituisce un programma.',
        'Lavoriamo con diversi fornitori di modelli di IA. Quale costruisce un certo programma dipende da ciò che serve e da quanto è carico ciascun fornitore in quel momento: se uno non è disponibile o è al limite, la richiesta passa al successivo. Se hai Aiora Plus e hai aggiunto delle foto, le foto vengono inviate una sola volta a un modello in grado di leggere le immagini, che ne scrive una breve descrizione. I tuoi programmi vengono poi costruiti a partire dalle tue risposte e da quella descrizione, quindi le foto non vengono inviate di nuovo a meno che tu non le cambi.',
        'Qualunque sia il fornitore, il modello di IA non riceve mai il tuo nome, il tuo indirizzo email, i tuoi pensieri, la lista della spesa o la cronologia delle sessioni di concentrazione. Ciò che il modello produce è un suggerimento: non è un consiglio medico, nutrizionale o sportivo, e puoi modificare qualsiasi parte del tuo programma.',
        'I suggerimenti su dove va un pensiero (attività, spesa, obiettivo o pensiero) vengono calcolati sul tuo dispositivo. Non coinvolgono l’IA né i nostri server.',
      ],
    },
    {
      id: 'share',
      title: 'Con chi li condividiamo',
      body: [
        'Per far funzionare Aiora ci affidiamo a un numero ridotto di fornitori di servizi. Trattano i dati per nostro conto e solo per gli scopi indicati qui sotto:',
        {
          table: {
            head: ['Fornitore', 'A cosa serve', 'Dove'],
            rows: [
              ['Hetzner', 'Hosting dei nostri server e del database, comprese le foto conservate', 'Germania (UE)'],
              ['Fornitori di modelli di IA (cambiano man mano che escono modelli migliori; scrivici per l’elenco aggiornato)', 'Generare programmi dalle tue risposte e, con Plus, descrivere le tue foto', 'Stati Uniti'],
              ['Google (Firebase)', 'Statistiche di utilizzo, rapporti sugli arresti anomali e impostazioni remote dell’app', 'Stati Uniti'],
              ['OneSignal', 'Invio delle notifiche push', 'Stati Uniti'],
              ['Brevo', 'Invio delle email relative all’account', 'Francia (UE)'],
              ['OpenWeatherMap', 'Meteo per la tua posizione approssimativa', 'Regno Unito'],
              ['Apple, Google', 'Accesso, abbonamenti acquistati nei loro store e trasformazione di una posizione nel nome di un luogo sul tuo telefono', 'Stati Uniti'],
            ],
          },
        },
        'Possiamo anche comunicare dati se la legge lo richiede, o per tutelare i diritti e la sicurezza dei nostri utenti o del pubblico.',
      ],
    },
    {
      id: 'transfers',
      title: 'Trasferimenti internazionali',
      body: [
        'I nostri server si trovano nell’UE. Alcuni dei fornitori qui sopra trattano dati in altri Paesi, tra cui gli Stati Uniti. In questi casi ci basiamo sulle garanzie previste dalla legge, come le clausole contrattuali tipo della Commissione europea o il quadro UE-USA per la protezione dei dati personali (EU-U.S. Data Privacy Framework).',
      ],
    },
    {
      id: 'retention',
      title: 'Per quanto tempo li conserviamo',
      body: [
        {
          list: [
            'Il tuo account e tutto ciò che contiene: finché mantieni il tuo account.',
            'Una registrazione via email mai confermata: fino a 24 ore.',
            'Quando elimini il tuo account, l’uscita è immediata e i tuoi dati, foto comprese, vengono cancellati definitivamente dai nostri server entro 30 giorni. Una foto che sostituisci o rimuovi, e la descrizione scritta a partire da essa, viene cancellata allo stesso modo.',
            'Una sola cosa sopravvive a un account eliminato: un’impronta codificata a senso unico della tua email o del tuo ID di accesso, da cui non si può risalire a nessuno dei due. Serve solo a registrare che il primo programma gratuito è già stato usato, così eliminare l’account e registrarsi di nuovo non ne regala un altro.',
            'Dati di abbonamento e fatturazione: per il tempo richiesto dalla normativa fiscale e contabile, conservati separatamente dal resto dei tuoi dati.',
            'Statistiche di utilizzo: non oltre 14 mesi.',
            'Rapporti sugli arresti anomali: 90 giorni.',
            'Email scambiate con noi: fino a due anni dopo la fine della conversazione.',
          ],
        },
      ],
    },
    {
      id: 'rights',
      title: 'Le tue scelte e i tuoi diritti',
      body: [
        'Puoi vedere e modificare il tuo programma, le tue risposte e il tuo profilo nell’app in qualsiasi momento, ed eliminare il tuo account dal tuo profilo nell’app oppure tramite aioraspace.com/delete-account.',
        'A seconda di dove vivi, hai anche il diritto di accedere a una copia dei tuoi dati, di rettificarli, di ottenerne la cancellazione, di limitarne il trattamento o di opporti al modo in cui li usiamo, di portarli con te e di revocare il consenso in qualsiasi momento (per esempio rimuovendo le foto o disattivando le notifiche). Scrivi a support@aioraspace.com e ti risponderemo entro 30 giorni.',
        'Se ti trovi nell’UE o nel Regno Unito, puoi anche presentare un reclamo all’autorità di controllo per la protezione dei dati del tuo Paese.',
        'Eliminare il tuo account non disdice un abbonamento acquistato tramite l’App Store o Google Play; disdicilo dalle impostazioni dello store.',
      ],
    },
    {
      id: 'children',
      title: 'Minori',
      body: [
        'Aiora non è pensata per i minori di 13 anni e non raccogliamo consapevolmente i loro dati. In alcuni Paesi l’età minima per usare app come Aiora senza il consenso di un genitore è più alta; segui le regole del luogo in cui vivi. Se pensi che un minore ci abbia fornito i suoi dati, scrivici e li cancelleremo.',
      ],
    },
    {
      id: 'security',
      title: 'Sicurezza',
      body: [
        'I dati viaggiano tra l’app e i nostri server tramite connessioni cifrate. Le password e i codici di registrazione sono conservati come hash a senso unico, l’accesso ai sistemi di produzione è limitato e le sessioni usano token di breve durata. Nessun sistema è perfettamente sicuro, ma lavoriamo per proteggere i tuoi dati e ti informeremo se una violazione ti riguarda.',
      ],
    },
    {
      id: 'changes',
      title: 'Modifiche a questa informativa',
      body: [
        'Quando cambiamo il modo in cui trattiamo i tuoi dati, aggiorniamo questa pagina e la data in alto. Per le modifiche importanti, ti avviseremo anche nell’app prima che entrino in vigore.',
      ],
    },
    {
      id: 'contact',
      title: 'Contatti',
      body: ['Scrivi a support@aioraspace.com per qualsiasi domanda sulla tua privacy o su questa informativa.'],
    },
  ],
};

export default doc;
