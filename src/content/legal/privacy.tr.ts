import type { LegalDoc } from './types';

// Turkish privacy policy, translated from privacy.en.ts. Legal and
// native-speaker review pending (Linear AIO-58).

const doc: LegalDoc = {
  title: 'Gizlilik politikası',
  description: 'Aiora neleri topluyor, neden, kimlerle paylaşıyor ve nasıl silebilirsin.',
  updated: '19 Ekim 2026',
  summaryTitle: 'Kısaca',
  summary: [
    'Aiora’nın günlerini planlamak için ihtiyaç duyduklarını topluyoruz: hesabın, cevapların, planın, düşüncelerin ve listelerin, eklersen de fotoğrafların.',
    'Cevapların, planını oluşturmak için bir yapay zekâ modeline gönderilir. Fotoğraflar yalnızca onları Plus ile kullanırsan gönderilir. Adın, e-postan ve düşüncelerin hiçbir zaman bir yapay zekâ modeline gönderilmez.',
    'Verilerini satmıyoruz ve reklam göstermiyoruz.',
    'Hesabını ve içindeki her şeyi uygulamadan silebilirsin; 30 gün içinde sunucularımızdan silinir.',
  ],
  contentsLabel: 'Bu sayfada',
  sections: [
    {
      id: 'who',
      title: 'Biz kimiz',
      body: [
        'Aiora, iPhone ve Android için bir planlama uygulaması; bu da aioraspace.com adresindeki sitesi. Bu politikada “Aiora” ve “biz”, uygulamayı yöneten ekip anlamına gelir. Kişisel verilerinin nasıl kullanılacağına biz karar veririz; bu da bizi GDPR gibi veri koruma yasaları kapsamında veri sorumlusu yapar.',
        'Gizlilikle ilgili sorular için: hello@aioraspace.com.',
      ],
    },
    {
      id: 'collect',
      title: 'Neleri topluyoruz',
      body: [
        '**Hesabın.** E-posta adresin ve güvenli şekilde hash’lenmiş parolan ya da Apple veya Google ile giriş yaptığında bize ilettikleri kimlik. Eklersen adın, biyografin, profil fotoğrafın ve uygulama dilin. E-postayla kaydolduğunda, sana gönderdiğimiz kodu girmeni beklerken e-postanı, adını ve hash’lenmiş parolanı en fazla 24 saat tutarız; hesabın ancak kodu girdiğinde oluşturulur.',
        '**Aiora’yı misafir olarak kullanmak.** Hesap açmadan başlayabilirsin. Misafirken yaptıkların, giriş yapana kadar cihazında kalır; o zamana kadar sunucularımıza hiçbir şey gönderilmez.',
        '**Cevapların.** Aiora planını oluştururken ona anlattıkların: cinsiyetin, yaş aralığın, işin, günlerinin ne kadar hareketli geçtiği, ne sıklıkla antrenman yaptığın, hedeflerin ve eklediğin notlar.',
        '**Planladıkların ve yazdıkların.** Programın, görevlerin ve haftalık hedeflerin ile bunları yapıp yapmadığın, Aiora’ya döktüğün düşünceler ve onlarla ne yapmaya karar verdiğin, alışveriş listen ve odak seansların.',
        '**Eklersen fotoğrafların.** Planını şekillendirmek için kullanılan en fazla üç fotoğraf (yüz, yan profil ve boydan). Fotoğraf eklemek isteğe bağlıdır ve Aiora Plus’ın bir parçasıdır. Bir yapay zekâ modeli onlara bir kez bakar ve planın için işe yarayanların (örneğin cildin ve duruşun) kısa bir tarifini yazar; bunu profilinle birlikte saklarız.',
        '**Abonelikler.** Aiora Plus satın alırsan: seçtiğin plan, durumu ve yenilenme tarihi ile Apple veya Google’ın işlem referansı. Kart numaranı asla almayız.',
        '**Oturumlar.** Giriş yaptığın her cihaz için, hesabını güvende tutmak ve bir cihazın oturumunu kapatabilmek amacıyla, giriş yapılan IP adresi ve cihaz bilgileri.',
        '**Cihaz ve kullanım.** Sana bildirim göndermek için gereken kimlik, cihazının platformu, bu ay yapay zekâyla kaç plan oluşturduğun ve uygulama kullanım olayları (örneğin hangi ekranların açıldığı ve hangi özelliklerin kullanıldığı). Kullanım olayları uygulamada ne yaptığını anlatır, ne yazdığını değil. Android’de, Aiora’yı birinin paylaştığı bir bağlantıdan yüklediysen, o bağlantının taşıdığı kampanyayı ve paylaşım kodunu da kaydederiz.',
        '**İzin verirsen yaklaşık konumun.** Yalnızca ana ekranında hava durumunu göstermek için kullanılır. Hava durumu sağlayıcımıza gönderilir ve telefonunun kendi konum hizmeti onu bir yer adına çevirebilir. Biz saklamayız.',
        '**Bize gönderdiğin mesajlar.** Bize yazarsan, sana yardım edebilmek için yazışmayı saklarız.',
      ],
    },
    {
      id: 'use',
      title: 'Bunları nasıl kullanıyoruz ve dayanağımız ne',
      body: [
        {
          table: {
            head: ['Ne yapıyoruz', 'Hukuki dayanak'],
            rows: [
              ['Hesabını yönetmek, planını ve listelerini cihazların arasında eşitlemek ve güvende tutmak', 'İstediğin hizmeti sunmak (sözleşme)'],
              ['Cevaplarından yapay zekâyla planını oluşturmak ve yeniden oluşturmak', 'Sözleşme'],
              ['Planını şekillendirmek için fotoğraflarını kullanmak', 'Uygulamanın fotoğraf eklemeden önce istediği açık rızan'],
              ['Hatırlatıcı ve bildirim göndermek', 'Cihazının bildirim izniyle verdiğin rıza'],
              ['Hesap e-postaları göndermek (kayıt kodları, parola sıfırlama)', 'Sözleşme'],
              ['Aiora Plus satın alımlarını işlemek ve doğrulamak', 'Sözleşme ve yasanın gerektirdiği fatura kayıtlarını saklamak'],
              ['Aiora’nın nasıl kullanıldığını ve insanların onu nasıl bulduğunu anlayıp düzeltmek ve geliştirmek', 'Çalışan bir ürüne yönelik meşru menfaatimiz'],
              ['Kötüye kullanımı önlemek ve hizmeti güvende tutmak; ilk ücretsiz planın kişi başına bir kez verilmesini sağlamak da buna dahil', 'Güvenlik ve adil kullanıma yönelik meşru menfaatimiz'],
            ],
          },
        },
        'Verilerini reklam için kullanmıyoruz, reklam profili oluşturmuyoruz ve verilerini kimseye satmıyor ya da kiralamıyoruz.',
      ],
    },
    {
      id: 'ai',
      title: 'Yapay zekâ ve planın',
      body: [
        'Aiora bir plan oluştururken sunucumuz cevaplarını (cinsiyet, yaş aralığı, iş, hareket düzeyi, antrenman, hedefler ve notlar) ve uygulama dilini bir yapay zekâ modeline gönderir; model de bir program döndürür.',
        'Birkaç yapay zekâ model sağlayıcısıyla çalışıyoruz. Bir planı hangisinin oluşturacağı, planın neye ihtiyaç duyduğuna ve o an her sağlayıcının ne kadar yoğun olduğuna bağlıdır: biri kullanılamıyorsa ya da kapasitesi doluysa isteği bir sonraki alır. Aiora Plus’ın varsa ve fotoğraf eklediysen, fotoğrafların görüntüleri okuyabilen bir modele bir kez gönderilir ve model onların kısa bir tarifini yazar. Planların bundan sonra cevaplarından ve bu tariften oluşturulur; fotoğrafların, sen değiştirmedikçe yeniden gönderilmez.',
        'Hangi sağlayıcı oluşturursa oluştursun, yapay zekâ modeli adını, e-posta adresini, düşüncelerini, alışveriş listeni ya da odak geçmişini asla almaz. Modelin çıktısı bir öneridir: tıbbi, beslenme ya da spor tavsiyesi değildir ve planının her parçasını değiştirebilirsin.',
        'Bir düşüncenin nereye ait olduğuna dair öneriler (görev, alışveriş, hedef ya da düşünce) cihazında hesaplanır; yapay zekâ ya da sunucularımız işin içinde değildir.',
      ],
    },
    {
      id: 'share',
      title: 'Kimlerle paylaşıyoruz',
      body: [
        'Aiora’yı çalıştırmak için az sayıda hizmet sağlayıcıyla çalışıyoruz. Verileri bizim adımıza ve yalnızca aşağıdaki amaçlar için işlerler:',
        {
          table: {
            head: ['Sağlayıcı', 'Ne için', 'Nerede'],
            rows: [
              ['Hetzner', 'Saklanan fotoğraflar dahil sunucularımızı ve veritabanımızı barındırmak', 'Almanya (AB)'],
              ['Yapay zekâ model sağlayıcıları (örneğin Groq ve OpenRouter)', 'Cevaplarından plan oluşturmak, Plus ile fotoğraflarını tarif etmek', 'ABD'],
              ['Google (Firebase)', 'Kullanım istatistikleri ve uzaktan uygulama ayarları', 'ABD'],
              ['OneSignal', 'Bildirimleri iletmek', 'ABD'],
              ['Brevo', 'Hesap e-postalarını göndermek', 'Fransa (AB)'],
              ['OpenWeatherMap', 'Yaklaşık konumun için hava durumu', 'Birleşik Krallık'],
              ['Apple, Google', 'Giriş, mağazalarından alınan abonelikler ve telefonunda bir konumu yer adına çevirmek', 'ABD'],
            ],
          },
        },
        'Yasa gerektirirse ya da kullanıcılarımızın veya kamunun haklarını ve güvenliğini korumak için de verileri açıklayabiliriz.',
      ],
    },
    {
      id: 'transfers',
      title: 'Yurt dışına aktarım',
      body: [
        'Sunucularımız AB’de. Yukarıdaki sağlayıcılardan bazıları verileri ABD dahil başka ülkelerde işler. Bu durumda, Avrupa Komisyonu’nun Standart Sözleşme Maddeleri ya da AB–ABD Veri Gizliliği Çerçevesi gibi yasanın öngördüğü güvencelere dayanırız.',
      ],
    },
    {
      id: 'retention',
      title: 'Ne kadar süre saklıyoruz',
      body: [
        {
          list: [
            'Hesabın ve içindeki her şey: hesabını tuttuğun sürece.',
            'Hiç onaylanmayan bir e-posta kaydı: en fazla 24 saat.',
            'Hesabını sildiğinde hemen çıkış yaparsın ve fotoğrafların dahil verilerin 30 gün içinde sunucularımızdan kalıcı olarak silinir. Değiştirdiğin ya da kaldırdığın bir fotoğraf ve ondan yazılan tarif de aynı şekilde silinir.',
            'Silinen bir hesaptan geriye tek bir şey kalır: e-postanın ya da giriş kimliğinin, ikisine de geri çevrilemeyen tek yönlü kodlanmış bir parmak izi. Yalnızca ilk ücretsiz planın kullanıldığını kaydeder; böylece hesabı silip yeniden kaydolmak bir ücretsiz plan daha vermez.',
            'Abonelik ve fatura kayıtları: vergi ve muhasebe mevzuatının gerektirdiği süre boyunca, diğer verilerinden ayrı olarak.',
            'Kullanım istatistikleri: en fazla 14 ay.',
            'Bizimle yazışmaların: yazışma bittikten sonra en fazla iki yıl.',
          ],
        },
      ],
    },
    {
      id: 'rights',
      title: 'Seçeneklerin ve hakların',
      body: [
        'Planını, cevaplarını ve profilini uygulamada istediğin zaman görebilir ve düzenleyebilir; hesabını uygulamadaki profilinden ya da aioraspace.com/delete-account adresinden silebilirsin.',
        'Yaşadığın yere bağlı olarak verilerinin bir kopyasını alma, düzeltme, sildirme, kullanımını kısıtlama ya da itiraz etme, başka yere taşıma ve rızanı istediğin zaman geri çekme (örneğin fotoğraflarını kaldırarak ya da bildirimleri kapatarak) hakların da var. hello@aioraspace.com adresine yaz, 30 gün içinde yanıt verelim.',
        'AB’de ya da Birleşik Krallık’taysan, ülkendeki veri koruma otoritesine de şikâyette bulunabilirsin.',
        'Hesabını silmek, App Store ya da Google Play’den alınan bir aboneliği iptal etmez; onu mağaza ayarlarından iptal et.',
      ],
    },
    {
      id: 'children',
      title: 'Çocuklar',
      body: [
        'Aiora 13 yaşından küçük çocuklara yönelik değildir ve onların verilerini bilerek toplamayız. Bazı ülkelerde Aiora gibi uygulamaları ebeveyn onayı olmadan kullanmanın alt yaş sınırı daha yüksektir; yaşadığın yerin kurallarına uy. Bir çocuğun bize verilerini verdiğini düşünüyorsan bize yaz, silelim.',
      ],
    },
    {
      id: 'security',
      title: 'Güvenlik',
      body: [
        'Veriler uygulama ile sunucularımız arasında şifreli bağlantılarla taşınır. Parolalar ve kayıt kodları tek yönlü hash olarak saklanır, üretim sistemlerine erişim kısıtlıdır ve oturumlar kısa ömürlü token’lar kullanır. Hiçbir sistem kusursuz güvenli değildir, ama verilerini korumak için çalışıyoruz ve seni etkileyen bir ihlal olursa sana haber veririz.',
      ],
    },
    {
      id: 'changes',
      title: 'Bu politikadaki değişiklikler',
      body: [
        'Verilerini nasıl işlediğimizi değiştirdiğimizde bu sayfayı ve en üstteki tarihi güncelleriz. Önemli değişikliklerde, yürürlüğe girmeden önce uygulamada da haber veririz.',
      ],
    },
    {
      id: 'contact',
      title: 'İletişim',
      body: ['Gizliliğinle ya da bu politikayla ilgili her soru için hello@aioraspace.com adresine yaz.'],
    },
  ],
};

export default doc;
