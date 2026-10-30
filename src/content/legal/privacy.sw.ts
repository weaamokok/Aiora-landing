import type { LegalDoc } from './types';

// Swahili privacy policy, translated from privacy.en.ts. Legal and
// native-speaker review pending (Linear AIO-58).

const doc: LegalDoc = {
  title: 'Sera ya faragha',
  description: 'Kile Aiora inachokusanya, kwa nini, inashirikiwa na nani, na jinsi ya kukifuta.',
  updated: '30 Oktoba 2026',
  summaryTitle: 'Kwa ufupi',
  summary: [
    'Tunakusanya kile Aiora inachohitaji kupanga siku zako: akaunti yako, majibu yako, mpango wako, mawazo na orodha zako, na, ukiziongeza, picha zako.',
    'Majibu yako yanatumwa kwa modeli ya AI ili kutengeneza mpango wako. Picha zinatumwa tu ukizitumia na Plus. Jina lako, barua pepe yako na mawazo yako hayatumwi kamwe kwa modeli ya AI.',
    'Hatuuzi data yako na hatuonyeshi matangazo.',
    'Unaweza kufuta akaunti yako na kila kilichomo kutoka kwenye programu, na inafutwa kwenye seva zetu ndani ya siku 30.',
  ],
  contentsLabel: 'Kwenye ukurasa huu',
  sections: [
    {
      id: 'who',
      title: 'Sisi ni nani',
      body: [
        'Aiora ni programu ya kupanga siku kwa iPhone na Android, na tovuti hii iko aioraspace.com. Katika sera hii, “Aiora” na “sisi” zinamaanisha timu inayoiendesha. Sisi ndio tunaoamua jinsi data yako binafsi inavyotumika, na hilo linatufanya kuwa mdhibiti wa data hiyo chini ya sheria za ulinzi wa data kama GDPR.',
        'Maswali kuhusu faragha yatumwe kwa support@aioraspace.com.',
      ],
    },
    {
      id: 'collect',
      title: 'Tunachokusanya',
      body: [
        '**Akaunti yako.** Barua pepe yako na nenosiri lililohifadhiwa kwa njia salama (hash), au kitambulisho ambacho Apple au Google hutupa unapoingia kupitia kwao. Jina lako, maelezo kukuhusu, picha ya wasifu na lugha ya programu, ukiviongeza. Unapojisajili kwa barua pepe, tunahifadhi barua pepe yako, jina lako na nenosiri lako lililohifadhiwa kwa hash kwa muda usiozidi saa 24 tukisubiri msimbo tuliokutumia; akaunti yako huundwa tu ukishauingiza.',
        '**Kutumia Aiora kama mgeni.** Unaweza kuanza bila akaunti. Unachofanya ukiwa mgeni kinabaki kwenye kifaa chako hadi uingie; hakuna kinachotumwa kwenye seva zetu kabla ya hapo.',
        '**Majibu yako.** Unachoiambia Aiora inapotengeneza mpango wako: jinsia yako, kundi la umri, kazi yako, jinsi siku zako zilivyo na shughuli, mara ngapi unafanya mazoezi, malengo yako na maelezo yoyote unayoongeza.',
        '**Unachopanga na kuandika.** Ratiba yako, kazi zako na malengo yako ya wiki na kama umeyakamilisha, mawazo unayoyamwaga kwenye Aiora na unachoamua kuyafanyia, orodha yako ya ununuzi, na vipindi vyako vya umakini.',
        '**Picha, ukiziongeza.** Hadi picha tatu (kichwa, ubavu na mwili mzima), zinazotumika kuunda mpango wako. Kuongeza picha ni hiari na ni sehemu ya Aiora Plus. Modeli ya AI huziangalia mara moja na kuandika maelezo mafupi ya kinachofaa kwa mpango wako (kwa mfano ngozi yako na mkao wako), ambayo tunayahifadhi pamoja na wasifu wako.',
        '**Usajili.** Ukinunua Aiora Plus: mpango uliouchagua, hali yake na tarehe ya kuhuishwa, pamoja na namba ya muamala kutoka Apple au Google. Hatupokei kamwe namba ya kadi yako.',
        '**Vipindi vya kuingia.** Kwa kila kifaa ambacho umeingia, anwani ya IP na taarifa za kifaa ulichoingilia, ili kulinda akaunti yako na kuweza kukitoa kifaa kwenye akaunti.',
        '**Kifaa na matumizi.** Kitambulisho tunachohitaji kukutumia arifa, aina ya mfumo wa kifaa chako, idadi ya mipango ya AI uliyotengeneza mwezi huu, na matukio ya matumizi ya programu (kwa mfano, skrini zinazofunguliwa na vipengele vinavyotumika). Matukio haya yanaeleza ulichofanya kwenye programu, si ulichoandika. Kwenye Android, ukisakinisha Aiora kupitia kiungo alichoshiriki mtu, tunarekodi pia kampeni na msimbo wa kushiriki uliokuwa kwenye kiungo hicho. Programu ikianguka, hutuma ripoti ya hitilafu yenye aina ya kifaa chako, mfumo wa uendeshaji, toleo la programu na skrini uliyokuwa.',
        '**Mahali ulipo kwa makadirio, ukiruhusu.** Hutumika tu kuonyesha hali ya hewa kwenye skrini yako ya mwanzo. Hutumwa kwa mtoa huduma wetu wa hali ya hewa, na huduma ya mahali ya simu yako inaweza kuligeuza kuwa jina la mahali. Hatulihifadhi.',
        '**Ujumbe unaotutumia.** Ukituandikia, tunahifadhi mazungumzo ili tuweze kukusaidia.',
      ],
    },
    {
      id: 'use',
      title: 'Jinsi tunavyoitumia, na kwa nini tunaruhusiwa',
      body: [
        {
          table: {
            head: ['Tunachofanya', 'Msingi wa kisheria'],
            rows: [
              ['Kuendesha akaunti yako, kusawazisha mpango na orodha zako kati ya vifaa, na kuvilinda', 'Kutoa huduma uliyoiomba (mkataba)'],
              ['Kutengeneza na kutengeneza upya mpango wako kwa AI kutokana na majibu yako', 'Mkataba'],
              ['Kutumia picha zako kuunda mpango wako', 'Ridhaa yako, ambayo programu huiomba kabla hujaongeza picha'],
              ['Kutuma vikumbusho na arifa', 'Ridhaa yako, kupitia ruhusa ya arifa kwenye kifaa chako'],
              ['Kutuma barua pepe za akaunti (misimbo ya kujisajili, kubadilisha nenosiri)', 'Mkataba'],
              ['Kushughulikia na kuthibitisha manunuzi ya Aiora Plus', 'Mkataba, na kuhifadhi kumbukumbu za malipo zinazotakiwa kisheria'],
              ['Kuelewa jinsi Aiora inavyotumika na jinsi watu wanavyoipata, ili kuirekebisha na kuiboresha', 'Maslahi yetu halali katika bidhaa inayofanya kazi'],
              ['Kuzuia matumizi mabaya na kulinda huduma, ikiwemo kuhakikisha mpango wa kwanza wa bure unatolewa mara moja tu kwa kila mtu', 'Maslahi yetu halali katika usalama na matumizi ya haki'],
            ],
          },
        },
        'Hatutumii data yako kwa matangazo, hatujengi wasifu wa matangazo, na hatuuzi wala hatukodishi data yako kwa mtu yeyote.',
      ],
    },
    {
      id: 'ai',
      title: 'AI na mpango wako',
      body: [
        'Aiora inapotengeneza mpango, seva yetu hutuma majibu yako (jinsia, kundi la umri, kazi, shughuli, mazoezi, malengo na maelezo) na lugha ya programu kwa modeli ya AI, ambayo hurudisha ratiba.',
        'Tunafanya kazi na watoa huduma kadhaa wa modeli za AI. Yupi atatengeneza mpango fulani inategemea kile mpango unachohitaji na jinsi kila mtoa huduma alivyo na shughuli wakati huo: mmoja asipopatikana au akijaa, anayefuata hupokea ombi. Ukiwa na Aiora Plus na umeongeza picha, picha zako hutumwa mara moja kwa modeli inayoweza kusoma picha, ambayo huandika maelezo mafupi kuzihusu. Kisha mipango yako hutengenezwa kutokana na majibu yako na maelezo hayo, kwa hiyo picha zako hazitumwi tena isipokuwa uzibadilishe.',
        'Bila kujali mtoa huduma, modeli ya AI haipokei kamwe jina lako, barua pepe yako, mawazo yako, orodha yako ya ununuzi wala historia yako ya umakini. Matokeo ya modeli ni pendekezo tu: si ushauri wa kitabibu, wa lishe wala wa mazoezi, na unaweza kubadilisha sehemu yoyote ya mpango wako.',
        'Mapendekezo ya mahali wazo linapofaa (kazi, ununuzi, lengo au wazo) hukokotolewa kwenye kifaa chako, bila AI na bila kupitia seva zetu.',
      ],
    },
    {
      id: 'share',
      title: 'Tunaishiriki na nani',
      body: [
        'Tunatumia idadi ndogo ya watoa huduma kuendesha Aiora. Wanashughulikia data kwa niaba yetu na kwa madhumuni yaliyo hapa chini pekee:',
        {
          table: {
            head: ['Mtoa huduma', 'Kwa ajili ya', 'Wapi'],
            rows: [
              ['Hetzner', 'Kuhifadhi seva na hifadhidata yetu, ikiwemo picha zilizohifadhiwa', 'Ujerumani (EU)'],
              ['Watoa huduma wa modeli za AI (hubadilika kadiri modeli bora zinavyotoka; tutumie barua pepe kupata orodha ya sasa)', 'Kutengeneza mipango kutokana na majibu yako, na kueleza picha zako ukiwa na Plus', 'Marekani'],
              ['Google (Firebase)', 'Takwimu za matumizi, ripoti za hitilafu na mipangilio ya programu ya mbali', 'Marekani'],
              ['OneSignal', 'Kuwasilisha arifa', 'Marekani'],
              ['Brevo', 'Kutuma barua pepe za akaunti', 'Ufaransa (EU)'],
              ['OpenWeatherMap', 'Hali ya hewa ya mahali ulipo kwa makadirio', 'Uingereza'],
              ['Apple, Google', 'Kuingia, usajili unaonunuliwa kwenye maduka yao, na kugeuza mahali kuwa jina la mahali kwenye simu yako', 'Marekani'],
            ],
          },
        },
        'Tunaweza pia kufichua data ikiwa sheria inatutaka, au ili kulinda haki na usalama wa watumiaji wetu au umma.',
      ],
    },
    {
      id: 'transfers',
      title: 'Uhamishaji wa kimataifa',
      body: [
        'Seva zetu ziko katika Umoja wa Ulaya (EU). Baadhi ya watoa huduma walio hapo juu hushughulikia data katika nchi nyingine, ikiwemo Marekani. Hilo linapotokea, tunategemea kinga zinazotolewa na sheria, kama Vifungu vya Kawaida vya Mkataba vya Kamisheni ya Ulaya au Mfumo wa Faragha ya Data kati ya EU na Marekani.',
      ],
    },
    {
      id: 'retention',
      title: 'Tunaihifadhi kwa muda gani',
      body: [
        {
          list: [
            'Akaunti yako na kila kilichomo: kwa muda wote unaobaki na akaunti yako.',
            'Usajili wa barua pepe ambao haujathibitishwa kamwe: hadi saa 24.',
            'Unapofuta akaunti yako, unatolewa mara moja na data yako, ikiwemo picha, inafutwa kabisa kwenye seva zetu ndani ya siku 30. Picha unayobadilisha au kuiondoa, pamoja na maelezo yaliyoandikwa kuihusu, inafutwa kwa njia hiyo hiyo.',
            'Kitu kimoja hubaki baada ya akaunti kufutwa: alama ya kidijitali iliyosimbwa kwa njia moja ya barua pepe yako au kitambulisho chako cha kuingia, ambayo haiwezi kurudishwa kuwa mojawapo. Inarekodi tu kwamba mpango wa kwanza wa bure umeshatumika, ili kufuta akaunti na kujisajili upya kusitoe mpango mwingine wa bure.',
            'Kumbukumbu za usajili na malipo: kwa muda unaotakiwa na sheria za kodi na uhasibu, zikiwa zimetenganishwa na data yako nyingine.',
            'Takwimu za matumizi: zisizozidi miezi 14.',
            'Ripoti za hitilafu: siku 90.',
            'Barua pepe zako nasi: hadi miaka miwili baada ya mazungumzo kuisha.',
          ],
        },
      ],
    },
    {
      id: 'rights',
      title: 'Chaguo na haki zako',
      body: [
        'Unaweza kuona na kuhariri mpango wako, majibu yako na wasifu wako kwenye programu wakati wowote, na kufuta akaunti yako kutoka kwenye wasifu wako ndani ya programu, au kupitia aioraspace.com/delete-account.',
        'Kulingana na unakoishi, una pia haki ya kupata nakala ya data yako, kuirekebisha, kuifuta, kuzuia au kupinga jinsi tunavyoitumia, kuichukua na kuihamisha, na kuondoa ridhaa yako wakati wowote (kwa mfano, kwa kuondoa picha zako au kuzima arifa). Tuandikie kwa support@aioraspace.com na tutakujibu ndani ya siku 30.',
        'Ukiwa katika EU au Uingereza, unaweza pia kuwasilisha malalamiko kwa mamlaka ya ulinzi wa data ya nchi yako.',
        'Kufuta akaunti yako hakughairi usajili ulionunuliwa kupitia App Store au Google Play; ughairi kwenye mipangilio ya duka lako.',
      ],
    },
    {
      id: 'children',
      title: 'Watoto',
      body: [
        'Aiora haikusudiwi watoto walio chini ya miaka 13, na hatukusanyi data zao kwa kujua. Katika baadhi ya nchi, umri wa chini wa kutumia programu kama Aiora bila ridhaa ya mzazi ni mkubwa zaidi; tafadhali fuata sheria za unakoishi. Ukidhani mtoto ametupa data yake, tuandikie na tutaifuta.',
      ],
    },
    {
      id: 'security',
      title: 'Usalama',
      body: [
        'Data husafiri kati ya programu na seva zetu kupitia miunganisho iliyosimbwa. Manenosiri na misimbo ya kujisajili huhifadhiwa kama hash za njia moja, ufikiaji wa mifumo ya uzalishaji umezuiliwa, na vipindi vya kuingia hutumia tokeni za muda mfupi. Hakuna mfumo ulio salama kabisa, lakini tunajitahidi kulinda data yako na tutakujulisha ikiwa uvujaji utakuathiri.',
      ],
    },
    {
      id: 'changes',
      title: 'Mabadiliko ya sera hii',
      body: [
        'Tunapobadilisha jinsi tunavyoshughulikia data yako, tunasasisha ukurasa huu na tarehe iliyo juu. Kwa mabadiliko makubwa, tutakujulisha pia ndani ya programu kabla hayajaanza kutumika.',
      ],
    },
    {
      id: 'contact',
      title: 'Mawasiliano',
      body: ['Tuandikie kwa support@aioraspace.com kwa swali lolote kuhusu faragha yako au sera hii.'],
    },
  ],
};

export default doc;
