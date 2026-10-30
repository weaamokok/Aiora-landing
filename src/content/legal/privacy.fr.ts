import type { LegalDoc } from './types';

// French privacy policy, translated from privacy.en.ts. Legal and
// native-speaker review pending (Linear AIO-58).

const doc: LegalDoc = {
  title: 'Politique de confidentialité',
  description: 'Ce qu’Aiora collecte, pourquoi, avec qui c’est partagé, et comment le supprimer.',
  updated: '30 octobre 2026',
  summaryTitle: 'En bref',
  summary: [
    'Nous collectons ce dont Aiora a besoin pour planifier tes journées : ton compte, tes réponses, ton plan, tes pensées et tes listes et, si tu en ajoutes, tes photos.',
    'Tes réponses sont envoyées à un modèle d’IA pour construire ton plan. Les photos ne le sont que si tu les utilises avec Plus. Ton nom, ton e-mail et tes pensées ne sont jamais envoyés à un modèle d’IA.',
    'Nous ne vendons pas tes données et nous n’affichons pas de publicité.',
    'Tu peux supprimer ton compte et tout son contenu depuis l’app, et il est effacé de nos serveurs sous 30 jours.',
  ],
  contentsLabel: 'Sur cette page',
  sections: [
    {
      id: 'who',
      title: 'Qui nous sommes',
      body: [
        'Aiora est une app de planification pour iPhone et Android, avec ce site sur aioraspace.com. Dans cette politique, « Aiora » et « nous » désignent l’équipe qui la gère. C’est nous qui décidons de l’usage de tes données personnelles, ce qui fait de nous le responsable du traitement au sens des lois sur la protection des données comme le RGPD.',
        'Pour toute question sur la confidentialité : support@aioraspace.com.',
      ],
    },
    {
      id: 'collect',
      title: 'Ce que nous collectons',
      body: [
        '**Ton compte.** Ton adresse e-mail et un mot de passe haché de façon sécurisée, ou l’identifiant qu’Apple ou Google nous transmet quand tu te connectes avec eux. Ton nom, ta bio, ta photo de profil et la langue de l’app, si tu les ajoutes. Quand tu t’inscris par e-mail, nous gardons ton e-mail, ton nom et ton mot de passe haché pendant 24 heures au maximum, le temps que tu saisisses le code que nous t’avons envoyé ; ton compte n’est créé qu’une fois le code saisi.',
        '**Utiliser Aiora en invité.** Tu peux commencer sans compte. Ce que tu fais en invité reste sur ton appareil jusqu’à ce que tu te connectes ; rien n’est envoyé à nos serveurs avant.',
        '**Tes réponses.** Ce que tu dis à Aiora quand il construit ton plan : ton genre, ta tranche d’âge, ton travail, ton niveau d’activité au quotidien, la fréquence de tes entraînements, tes objectifs et les notes que tu ajoutes.',
        '**Ce que tu planifies et écris.** Ton planning, tes tâches et tes objectifs de la semaine, et si tu les as faits, les pensées que tu déposes dans Aiora et ce que tu décides d’en faire, ta liste de courses et tes sessions de concentration.',
        '**Tes photos, si tu en ajoutes.** Jusqu’à trois photos (visage, profil et en pied), utilisées pour adapter ton plan. Ajouter des photos est facultatif et fait partie d’Aiora Plus. Un modèle d’IA les regarde une fois et rédige une courte description de ce qui est utile pour ton plan (par exemple ta peau et ta posture), que nous gardons avec ton profil.',
        '**Abonnements.** Si tu achètes Aiora Plus : la formule choisie, son statut et sa date de renouvellement, et la référence de transaction d’Apple ou de Google. Nous ne recevons jamais ton numéro de carte.',
        '**Sessions de connexion.** Pour chaque appareil sur lequel tu es connecté·e, l’adresse IP et les informations de l’appareil depuis lequel tu t’es connecté·e, pour sécuriser ton compte et pouvoir déconnecter un appareil.',
        '**Appareil et utilisation.** L’identifiant nécessaire pour t’envoyer des notifications, la plateforme de ton appareil, le nombre de plans générés par IA ce mois-ci, et des événements d’utilisation de l’app (par exemple, les écrans ouverts et les fonctionnalités utilisées). Ces événements décrivent ce que tu as fait dans l’app, pas ce que tu as écrit. Sur Android, si tu as installé Aiora depuis un lien partagé par quelqu’un, nous enregistrons aussi la campagne et le code de partage de ce lien. Si l’app plante, elle envoie un rapport de plantage avec le modèle de ton appareil, le système d’exploitation, la version de l’app et l’écran où tu étais.',
        '**Position approximative, si tu l’autorises.** Utilisée uniquement pour afficher la météo sur ton écran d’accueil. Elle est envoyée à notre fournisseur météo, et le service de localisation de ton téléphone peut la convertir en nom de lieu. Nous ne la conservons pas.',
        '**Les messages que tu nous envoies.** Si tu nous écris, nous gardons l’échange pour pouvoir t’aider.',
      ],
    },
    {
      id: 'use',
      title: 'Comment nous les utilisons, et sur quelle base',
      body: [
        {
          table: {
            head: ['Ce que nous faisons', 'Base légale'],
            rows: [
              ['Gérer ton compte, synchroniser ton plan et tes listes entre tes appareils, et les protéger', 'Fournir le service que tu as demandé (contrat)'],
              ['Construire et reconstruire ton plan avec l’IA à partir de tes réponses', 'Contrat'],
              ['Utiliser tes photos pour adapter ton plan', 'Ton consentement, que l’app demande avant que tu ajoutes des photos'],
              ['Envoyer des rappels et des notifications', 'Ton consentement, via l’autorisation de notifications de ton appareil'],
              ['Envoyer les e-mails liés au compte (codes d’inscription, réinitialisation du mot de passe)', 'Contrat'],
              ['Traiter et vérifier les achats d’Aiora Plus', 'Contrat, et conservation des justificatifs de facturation exigés par la loi'],
              ['Comprendre comment Aiora est utilisé et comment les gens le découvrent, pour le corriger et l’améliorer', 'Notre intérêt légitime à proposer un produit qui fonctionne'],
              ['Prévenir les abus et sécuriser le service, notamment pour que le premier plan gratuit ne soit offert qu’une fois par personne', 'Notre intérêt légitime en matière de sécurité et d’usage équitable'],
            ],
          },
        },
        'Nous n’utilisons pas tes données à des fins publicitaires, nous ne créons pas de profils publicitaires, et nous ne vendons ni ne louons tes données à qui que ce soit.',
      ],
    },
    {
      id: 'ai',
      title: 'L’IA et ton plan',
      body: [
        'Quand Aiora construit un plan, notre serveur envoie tes réponses (genre, tranche d’âge, travail, activité, entraînement, objectifs et notes) et la langue de l’app à un modèle d’IA, qui renvoie un planning.',
        'Nous travaillons avec plusieurs fournisseurs de modèles d’IA. Celui qui construit un plan donné dépend de ce dont le plan a besoin et de la charge de chaque fournisseur à ce moment-là : si l’un est indisponible ou saturé, le suivant prend la demande. Si tu as Aiora Plus et as ajouté des photos, tes photos sont envoyées une fois à un modèle capable de lire les images, qui en rédige une courte description. Tes plans sont ensuite construits à partir de tes réponses et de cette description : tes photos ne sont pas renvoyées, sauf si tu les changes.',
        'Quel que soit le fournisseur, le modèle d’IA ne reçoit jamais ton nom, ton adresse e-mail, tes pensées, ta liste de courses ni ton historique de concentration. Ce que le modèle produit est une suggestion : ce n’est pas un avis médical, nutritionnel ou sportif, et tu peux modifier n’importe quelle partie de ton plan.',
        'Les suggestions sur la place d’une pensée (tâche, courses, objectif ou pensée) sont calculées sur ton appareil, sans IA et sans passer par nos serveurs.',
      ],
    },
    {
      id: 'share',
      title: 'Avec qui nous les partageons',
      body: [
        'Nous faisons appel à un petit nombre de prestataires pour faire fonctionner Aiora. Ils traitent les données pour notre compte et uniquement pour les finalités ci-dessous :',
        {
          table: {
            head: ['Prestataire', 'Pour quoi faire', 'Où'],
            rows: [
              ['Hetzner', 'Héberger nos serveurs et notre base de données, y compris les photos stockées', 'Allemagne (UE)'],
              ['Fournisseurs de modèles d’IA (ils changent à mesure que de meilleurs modèles sortent ; écris-nous pour la liste actuelle)', 'Générer des plans à partir de tes réponses, et décrire tes photos avec Plus', 'États-Unis'],
              ['Google (Firebase)', 'Statistiques d’utilisation, rapports de plantage et réglages de l’app à distance', 'États-Unis'],
              ['OneSignal', 'Envoyer les notifications', 'États-Unis'],
              ['Brevo', 'Envoyer les e-mails liés au compte', 'France (UE)'],
              ['OpenWeatherMap', 'La météo pour ta position approximative', 'Royaume-Uni'],
              ['Apple, Google', 'Connexion, abonnements achetés dans leurs stores, et conversion d’une position en nom de lieu sur ton téléphone', 'États-Unis'],
            ],
          },
        },
        'Nous pouvons aussi communiquer des données si la loi l’exige, ou pour protéger les droits et la sécurité de nos utilisateurs ou du public.',
      ],
    },
    {
      id: 'transfers',
      title: 'Transferts internationaux',
      body: [
        'Nos serveurs sont dans l’UE. Certains prestataires ci-dessus traitent des données dans d’autres pays, dont les États-Unis. Dans ce cas, nous nous appuyons sur les garanties prévues par la loi, comme les clauses contractuelles types de la Commission européenne ou le cadre de protection des données UE–États-Unis (Data Privacy Framework).',
      ],
    },
    {
      id: 'retention',
      title: 'Combien de temps nous les gardons',
      body: [
        {
          list: [
            'Ton compte et tout son contenu : tant que tu gardes ton compte.',
            'Une inscription par e-mail jamais confirmée : 24 heures au maximum.',
            'Quand tu supprimes ton compte, tu es déconnecté·e immédiatement et tes données, photos comprises, sont définitivement effacées de nos serveurs sous 30 jours. Une photo que tu remplaces ou retires, et la description rédigée à partir d’elle, sont effacées de la même façon.',
            'Une seule chose survit à un compte supprimé : une empreinte codée à sens unique de ton e-mail ou de ton identifiant de connexion, qui ne permet de retrouver ni l’un ni l’autre. Elle indique seulement que le premier plan gratuit a été utilisé, pour qu’on ne puisse pas en obtenir un autre en supprimant son compte puis en se réinscrivant.',
            'Abonnements et justificatifs de facturation : aussi longtemps que l’exigent les lois fiscales et comptables, séparément du reste de tes données.',
            'Statistiques d’utilisation : 14 mois au maximum.',
            'Rapports de plantage : 90 jours.',
            'Nos échanges par e-mail : jusqu’à deux ans après la fin de la conversation.',
          ],
        },
      ],
    },
    {
      id: 'rights',
      title: 'Tes choix et tes droits',
      body: [
        'Tu peux consulter et modifier ton plan, tes réponses et ton profil dans l’app à tout moment, et supprimer ton compte depuis ton profil dans l’app, ou sur aioraspace.com/delete-account.',
        'Selon l’endroit où tu vis, tu as aussi le droit d’obtenir une copie de tes données, de les rectifier, de les faire effacer, de limiter leur utilisation ou de t’y opposer, de les récupérer pour les emporter ailleurs, et de retirer ton consentement à tout moment (par exemple en retirant tes photos ou en désactivant les notifications). Écris à support@aioraspace.com et nous te répondrons sous 30 jours.',
        'Si tu es dans l’UE ou au Royaume-Uni, tu peux aussi déposer une réclamation auprès de l’autorité de protection des données de ton pays.',
        'Supprimer ton compte ne résilie pas un abonnement pris sur l’App Store ou Google Play : résilie-le dans les réglages du store.',
      ],
    },
    {
      id: 'children',
      title: 'Enfants',
      body: [
        'Aiora ne s’adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment leurs données. Dans certains pays, l’âge minimum pour utiliser une app comme Aiora sans l’accord d’un parent est plus élevé ; respecte les règles de ton pays. Si tu penses qu’un enfant nous a transmis ses données, écris-nous et nous les supprimerons.',
      ],
    },
    {
      id: 'security',
      title: 'Sécurité',
      body: [
        'Les données circulent entre l’app et nos serveurs via des connexions chiffrées. Les mots de passe et les codes d’inscription sont stockés sous forme de hachages à sens unique, l’accès aux systèmes de production est restreint, et les sessions utilisent des jetons de courte durée. Aucun système n’est parfaitement sûr, mais nous travaillons à protéger tes données et te préviendrons si une violation te concerne.',
      ],
    },
    {
      id: 'changes',
      title: 'Modifications de cette politique',
      body: [
        'Quand nous changeons la façon dont nous traitons tes données, nous mettons à jour cette page et la date en haut. Pour les changements importants, nous te prévenons aussi dans l’app avant leur entrée en vigueur.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: ['Écris à support@aioraspace.com pour toute question sur ta vie privée ou sur cette politique.'],
    },
  ],
};

export default doc;
