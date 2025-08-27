// public/js/projects-data.js 

const projectsData = {
"deepfake": {
    id: "deepfake",
    title: "DeepLock - Gerçek ve Sahte Görüntülerin Ayrıştırılması: Derin Öğrenme Modelleri ile Deepfake Tespiti",
    shortDescription: "TÜBİTAK 2209-A projesi kapsamında geliştirilen derin öğrenme tabanlı deepfake tespit sistemi. EfficientNet-B7 mimarisi ile %88 doğrulama AUC'si ve %82 test AUC'si elde edildi.",
    fullDescription: `
        <p><strong>Bu proje neden geliştirildi?</strong><br>
        Deepfake teknolojisinin hızla yaygınlaşması ve sahte medya içeriklerinin artması nedeniyle, güvenilir bir tespit sistemi geliştirme ihtiyacı doğdu. Bu kritik problemi çözmek için TÜBİTAK 2209-A programı desteğiyle DeepLock sistemi geliştirildi.</p>
        
        <p><strong>DeepLock Nedir?</strong><br>
        DeepLock, yüz-odaklı görsel analiz akışı kullanan derin öğrenme tabanlı bir deepfake tespit sistemidir. MTCNN yüz algılama ve EfficientNet-B7 sınıflandırma modeli kullanılarak sahte videolar yüksek doğrulukla tespit edilmektedir.</p>

        <h4>🎯 Proje Hedefleri:</h4>
        <ul>
        <li>Hiper-gerçekçi yüz değiştirilmiş videoların otomatik tespiti</li>
        <li>DFDC veri seti üzerinde 100.000+ video analizi</li>
        <li>Yüz bölgesi odaklı tespit sistemi</li>
        <li>Modüler ve ölçeklenebilir mimari geliştirme</li>
        <li>Sosyal medya platformları için içerik doğrulama</li>
        </ul>

        <h4>🔬 Teknik Yaklaşım:</h4>
        <ul>
        <li><strong>Yüz Algılama:</strong> MTCNN ile kare-kare yüz çıkarma</li>
        <li><strong>Kalite Filtreleme:</strong> 1600+ piksel alan eşiği uygulaması</li>
        <li><strong>Ön İşleme:</strong> 380×380 piksel yeniden boyutlandırma ve normalleştirme</li>
        <li><strong>Sınıflandırma:</strong> EfficientNet-B7 önceden eğitilmiş model ince ayarı</li>
        <li><strong>Eğitim Stratejisi:</strong> Dengeli mini-paket örnekleme ve bırakma düzenlileştirmesi</li>
        </ul>

        <h4>📊 Başarı Ölçütleri:</h4>
        <ul>
        <li><strong>Doğrulama AUC:</strong> 0.88 (88%)</li>
        <li><strong>Test AUC:</strong> 0.82 (82%)</li>
        <li><strong>Veri Seti:</strong> DFDC - 100.000+ etiketli video klibi</li>
        <li><strong>İşleme:</strong> Her 10. kare örnekleme ile zamansal çeşitlilik</li>
        <li><strong>Mimari:</strong> Modüler akış ile gelecekteki geliştirmeler desteği</li>
        </ul>

        <h4>🛠️ Uygulama Detayları:</h4>
        <ul>
        <li>Çok-görevli Kademeli CNN (MTCNN) yüz algılama için</li>
        <li>EfficientNet-B7 bileşik ölçeklendirme stratejisi</li>
        <li>SGD eniyileyici (ÖO=0.01, momentum=0.9)</li>
        <li>Veri zenginleştirme (renk titreşimi, çevirme, döndürme)</li>
        <li>Doğrulama kaybına dayalı erken durdurma mekanizması</li>
        </ul>

        <p><strong>Proje Etkisi ve Gelecek:</strong><br>
        DeepLock, dijital adli tıp, sosyal medya içerik denetimi ve gazeteci doğrulama iş akışları için pratik bir çözüm sunmaktadır. Zamansal tutarlılık modülleri, topluluk stratejileri ve meta veri analizi ile geliştirilmeye devam edilmektedir.</p>
        `,
    technologies: [
        "Python 3.8+",
        "PyTorch",
        "MTCNN",
        "EfficientNet-B7",
        "DFDC Veri Seti",
        "OpenCV",
        "PIL",
        "NumPy",
        "Matplotlib",
        "Google Colab",
        "CUDA",
        "Derin Öğrenme",
        "Bilgisayarlı Görü",
        "Yüz Algılama"
    ],
    category: "Yapay Zeka ve Araştırma",
    date: "Haziran 2025",
    client: "TÜBİTAK 2209-A",
    status: "Devam Ediyor",
    images: {
        main: "projectimages/deepfake/deepfake1.jpeg",
        gallery: [
            "projectimages/deepfake/deepfake2.jpeg",
            "projectimages/deepfake/deepfake3.jpeg",
            "projectimages/deepfake/deepfake4.jpeg",
            "projectimages/deepfake/deepfake5.jpeg",
            "projectimages/deepfake/deepfake6.png"
        ]
    },
    features: [
        "MTCNN Yüz Algılama",
        "EfficientNet-B7 Sınıflandırma",
        "100K+ DFDC Video İşleme",
        "88% Doğrulama AUC",
        "82% Test AUC",
        "Modüler Akış Mimarisi",
        "TÜBİTAK 2209-A Destekli",
        "Gerçek Zamanlı Tespit Kabiliyeti"
    ]
},

"healthylife": {
    id: "healthylife",
    title: "HealthyLife - Yapay Zeka Destekli Beslenme Rehberi",
    shortDescription: "Django ve OpenAI API kullanılarak geliştirilen kişiselleştirilmiş beslenme önerileri sunan kapsamlı web uygulaması. Yapay zeka destekli yemek önerileri ve duyarlı tasarım.",
    fullDescription: `
        <p><strong>Proje neden geliştirildi?</strong><br>
        Artan obezite oranları ve sağlıksız beslenme alışkanlıkları nedeniyle, kişiselleştirilmiş beslenme rehberliğine olan ihtiyacı karşılamak için HealthyLife geliştirildi. Modern web teknolojileri ve yapay zeka algoritmalarından yararlanılarak kullanıcılara özel diyet planları sunuldu.</p>
        
        <p><strong>HealthyLife Nedir?</strong><br>
        Kullanıcıların kalori hedeflerine ve öğün tercihlerine göre kişiselleştirilmiş beslenme önerileri sunan, OpenAI GPT-3.5-turbo entegrasyonlu, Django çerçevesi ile geliştirilmiş kapsamlı bir web uygulamasıdır.</p>

        <h4>🎯 Proje Hedefleri:</h4>
        <ul>
        <li>Kişiselleştirilmiş beslenme önerilerinin yapay zeka ile sunulması</li>
        <li>Kullanıcı dostu ve duyarlı arayüz tasarımı</li>
        <li>Kalori hedefi ve öğün türü bazlı akıllı öneriler</li>
        <li>Güvenli kullanıcı kimlik doğrulama sistemi</li>
        <li>Modüler ve ölçeklenebilir sistem mimarisi</li>
        </ul>

        <h4>🤖 Yapay Zeka ve Teknoloji:</h4>
        <ul>
        <li><strong>OpenAI Entegrasyonu:</strong> GPT-3.5-turbo ile yemek önerileri</li>
        <li><strong>Django Çerçevesi:</strong> Güçlü arka uç geliştirme</li>
        <li><strong>Veritabanı Yönetimi:</strong> Kullanıcı profilleri ve kalori hedefleri takibi</li>
        <li><strong>Duyarlı Tasarım:</strong> HTML5, CSS3, JavaScript ile modern arayüz</li>
        <li><strong>API Entegrasyonu:</strong> Harici besin veritabanı bağlantıları</li>
        </ul>

        <h4>📱 Ana Özellikler:</h4>
        <ul>
        <li><strong>Kalori Hedefi Belirleme:</strong> Günlük kalori ihtiyaçlarına göre hedef ayarlama</li>
        <li><strong>Öğün Türü Seçimi:</strong> Kahvaltı, öğle, akşam, atıştırmalık, tatlı kategorileri</li>
        <li><strong>Yapay Zeka Destekli Öneriler:</strong> Kişiselleştirilmiş 3 beslenme seçeneği</li>
        <li><strong>Kullanıcı Kimlik Doğrulama:</strong> Güvenli kayıt ve giriş sistemi</li>
        <li><strong>Başarı Geri Bildirimi:</strong> Kullanıcı etkileşimi ve bildirim sistemi</li>
        </ul>

        <p><strong>Proje Çıktıları:</strong><br>
        HealthyLife, modern web geliştirme ve yapay zeka teknolojilerini harmanlayarak kullanıcılara değerli beslenme rehberliği sunan kapsamlı bir platform haline geldi. Projede karşılaşılan veritabanı entegrasyonu zorlukları ve kimlik doğrulama sorunları, gelecekteki geliştirmeler için önemli öğrenme noktaları oluşturdu.</p>
        `,
    technologies: [
        "Python 3.8+",
        "Django Çerçevesi",
        "OpenAI GPT-3.5-turbo",
        "HTML5",
        "CSS3", 
        "JavaScript",
        "SQLite Veritabanı",
        "Django ORM",
        "RESTful API",
        "Duyarlı Tasarım",
        "Django TestCase",
        "Figma Tasarım",
        "Git ve GitHub",
        "Trello Proje Yönetimi"
    ],
    category: "Tam Yığın ve Yapay Zeka",
    date: "Mart 2024",
    client: "Maltepe Üniversitesi",
    status: "Tamamlandı",
    video: "projectimages/healthylife/healthylife.mp4",
    images: {
        main: "projectimages/healthylife/healthylife.png",
        gallery: [
            "projectimages/healthylife/healthylife.png"
        ]
    },
    features: [
        "OpenAI GPT-3.5 Entegrasyonu",
        "Django Tam Yığın Geliştirme",
        "Yapay Zeka Destekli Yemek Önerileri",
        "Duyarlı Web Tasarımı",
        "Kullanıcı Kimlik Doğrulama Sistemi",
        "Kalori Hedefi Yönetimi",
        "Veritabanı Entegrasyonu",
        "Kapsamlı Test",
        "Takım Çalışması"
    ]
},

"arvis": {
    id: "arvis",
    title: "ArVis Teknoloji Kurumsal Web Sitesi",
    shortDescription: "React ve modern teknolojiler kullanılarak geliştirilen ArVis Teknoloji'nin kurumsal web sitesi. Yapay zeka, biyometrik doğrulama ve kimlik tespiti çözümlerinin tanıtıldığı duyarlı platform.",
    fullDescription: `
        <p><strong>Proje neden geliştirildi?</strong><br>
        ArVis Teknoloji'nin yapay zeka tabanlı çözümlerini ve biyometrik kimlik doğrulama sistemlerini müşterilerine etkin bir şekilde tanıtmak için modern, duyarlı ve kullanıcı dostu bir kurumsal web sitesi geliştirildi.</p>
        
        <p><strong>ArVis Teknoloji Nedir?</strong><br>
        Yeni nesil teknolojilerle "Yapay Görü" çözümleri sunan, kimlik doğrulama, yüz tanıma, OCR ve biyometrik sistemler alanında uzmanlaşmış teknoloji şirketidir.</p>

        <h4>🎯 Proje Hedefleri:</h4>
        <ul>
        <li>ArVis'in yapay zeka/makine öğrenmesi çözümlerinin profesyonel tanıtımı</li>
        <li>Biyometrik doğrulama sistemlerinin görsel sunumu</li>
        <li>Müşteri deneyimini en iyileyen modern kullanıcı deneyimi/arayüz tasarımı</li>
        <li>Duyarlı tasarım ile tüm cihazlarda mükemmel görünüm</li>
        <li>Arama motoru en iyileştirmeli yapı ile organik trafik artışı</li>
        </ul>

        <h4>🔧 Teknik Özellikler:</h4>
        <ul>
        <li><strong>Ön Uç Çerçevesi:</strong> React.js ile bileşen tabanlı mimari</li>
        <li><strong>Stil Oluşturma:</strong> Modern CSS3, Flexbox ve Grid düzen sistemi</li>
        <li><strong>Duyarlı Tasarım:</strong> Mobil öncelikli yaklaşım ile uyarlanabilir tasarım</li>
        <li><strong>Performans:</strong> En iyileştirilmiş yükleme ve pürüzsüz animasyonlar</li>
        <li><strong>Erişilebilirlik:</strong> WCAG uyumlu erişilebilirlik standartları</li>
        </ul>

        <h4>📱 Sayfalar ve İçerikler:</h4>
        <ul>
        <li><strong>Ana Sayfa:</strong> ArVis'in avantajları ve temel çözümler</li>
        <li><strong>Ürünler:</strong> KYC, Mobil KYC, Web KYC, VC çözümleri</li>
        <li><strong>Kendi Kendine Hizmet:</strong> ArVis-DH, Nabız Tespiti, Ses Analizi sistemi</li>
        <li><strong>İletişim:</strong> Merkez ve Araştırma-Geliştirme ofis bilgileri</li>
        <li><strong>Hakkımızda:</strong> Şirket vizyonu ve teknoloji yaklaşımı</li>
        </ul>

        <h4>🚀 Öne Çıkan Özellikler:</h4>
        <ul>
        <li>%99.614 Yüz Tanıma Oranı gösterimi</li>
        <li>Etkileşimli ürün kartları ve vurgulama efektleri</li>
        <li>Modern kahraman bölümü ile çekici ilk izlenim</li>
        <li>Pürüzsüz kaydırma ve paralaks efektleri</li>
        <li>Harekete geçirici çağrı en iyileştirmesi ile dönüşüm artışı</li>
        </ul>

        <p><strong>Proje Sonuçları:</strong><br>
        ArVis Teknoloji'nin dijital varlığını güçlendiren bu platform, şirketin yapay zeka tabanlı çözümlerini etkili bir şekilde tanıtarak müşteri kazanımına katkı sağladı. Modern tasarım dili ve teknik performansı ile sektöründe öne çıkan bir web sitesi oluşturuldu.</p>
        `,
    technologies: [
        "React.js",
        "JavaScript ES6+",
        "CSS3",
        "HTML5",
        "Duyarlı Tasarım",
        "Flexbox ve Grid",
        "React Hooks",
        "Bileşen Mimarisi",
        "Modern Kullanıcı Arayüzü/Deneyimi",
        "Performans En iyileştirmesi",
        "Arama Motoru En iyileştirmesi",
        "Çapraz Tarayıcı Uyumluluğu"
    ],
    category: "Web Geliştirme",
    date: "Aralık 2024",
    client: "ArVis Teknoloji",
    status: "Tamamlandı",
    images: {
        main: "projectimages/arvis/arvis1.jpeg",
        gallery: [
            "projectimages/arvis/arvis2.jpeg",
            "projectimages/arvis/arvis3.jpeg",
            "projectimages/arvis/arvis4.jpeg",
            "projectimages/arvis/arvis5.jpeg"
        ]
    },
    features: [
        "React.js Bileşen Mimarisi",
        "Duyarlı Mobil Tasarım", 
        "Modern Kullanıcı Arayüzü/Deneyimi",
        "Yapay Zeka/Makine Öğrenmesi Çözümleri Vitrini",
        "Performans En iyileştirildi",
        "Arama Motoru Hazır Yapı",
        "Çapraz Tarayıcı Desteği",
        "Etkileşimli Ürün Kartları"
    ]
},

"qt-app": {
    id: "qt-app",
    title: "Qt Çerçevesi Masaüstü Uygulaması",
    shortDescription: "Mac işletim sistemi üzerinde Qt çerçevesi kullanılarak geliştirilen çapraz platform masaüstü uygulaması. Temel düzeyde ancak işlevsel PluginBase sistemi ve Face Liveness eklenti projeleri.",
    fullDescription: `
        <p><strong>Bu projeler neden yapıldı?</strong><br>
        ArVis Teknoloji'deki stajım sırasında Qt çerçevesi ile masaüstü uygulamaları ve eklenti geliştirme projelerinde rol alındı. Hem modüler eklenti sistemi hem de yüz canlılık tespit sistemi temel düzeyde geliştirildi.</p>
        
        <p><strong>Nasıl geliştirildi?</strong><br>
        Qt çerçevesinin gücünden yararlanılarak çapraz platform çalışabilen, modüler yapıda masaüstü uygulamaları geliştirildi. C++ ile temel performanslı sistemler oluşturuldu.</p>
        
        <h4>🎯 Geliştirilen Projeler:</h4>
        
        <h4>1️⃣ PluginBase Eklentisi - Temel Modüler Eklenti Sistemi</h4>
        <p><strong>Problem:</strong> Farklı işlevleri olan modüllerin ana uygulamaya dinamik olarak eklenmesi gerekiyordu.</p>
        <p><strong>Çözüm:</strong> Qt çerçevesi ile çalışma zamanında eklenti dosyalarını otomatik keşfeden ve yükleyen temel modüler sistem geliştirildi.</p>
        
        <h4>2️⃣ Face Liveness Eklentisi - Temel Yüz Canlılık Tespit Sistemi</h4>
        <p><strong>Problem:</strong> Güvenlik sistemlerinde gerçek yüz ile fotoğraf/video arasındaki farkın tespit edilmesi gerekiyordu.</p>
        <p><strong>Çözüm:</strong> ONNX Runtime ile makine öğrenimi modelinin entegre edildiği temel akıllı tespit sistemi geliştirildi.</p>
        
        <h4>🔧 Nasıl Geliştirildi:</h4>
        
        <p><strong>PluginBase Sistemi Özellikleri:</strong></p>
        <ul>
        <li><strong>Dinamik Yükleme:</strong> Çalışma zamanında .dylib/.dll/.so dosyalarının otomatik keşfedilmesi</li>
        <li><strong>QPluginLoader:</strong> Güvenli eklenti yönetimi ve yükleme</li>
        <li><strong>Köprü Sistemi:</strong> Ana uygulama ile alt eklentiler arası temel iletişim</li>
        <li><strong>Modüler Mimari:</strong> Basit ve genişletilebilir yapı</li>
        <li><strong>Çapraz Platform:</strong> Windows, macOS ve Linux desteği</li>
        </ul>
        
        <p><strong>Face Liveness Sistemi:</strong></p>
        <ul>
        <li><strong>ONNX Runtime:</strong> En iyileştirilmiş makine öğrenimi modeli entegrasyonu</li>
        <li><strong>OpenCV İşleme:</strong> Gerçek zamanlı görüntü işleme ve analiz</li>
        <li><strong>Temel Algoritma:</strong> Gerçek ve sahte yüz ayırt etme</li>
        <li><strong>Qt Arayüzü:</strong> Kullanıcı dostu basit arayüz tasarımı</li>
        <li><strong>Performans:</strong> Gerçek zamanlı işleme kapasitesi</li>
        </ul>
        
        <h4>📊 Sistem Performansı:</h4>
        <ul>
        <li><strong>Yükleme Hızı:</strong> Eklentiler saniyeler içinde yükleniyor</li>
        <li><strong>Gerçek Zamanlı İşleme:</strong> 30 FPS ile canlı yüz analizi</li>
        <li><strong>Çapraz Platform:</strong> Windows, macOS ve Linux'ta sorunsuz çalışıyor</li>
        <li><strong>Bellek Verimliliği:</strong> En iyileştirilmiş bellek kullanımı</li>
        <li><strong>Kararlılık:</strong> 7/24 çalışabilir güvenilirlik</li>
        </ul>
        
        <p><strong>Proje Etkisi:</strong><br>
        Bu projeler sayesinde Qt çerçevesi ile profesyonel masaüstü uygulama geliştirme konusunda temel deneyim kazanıldı. Modüler eklenti mimarisi ve yapay zeka entegrasyonu konularında başlangıç seviyesi beceriler geliştirildi. Çapraz platform geliştirme alanında önemli beceriler edinildi.</p>
        `,
    technologies: [
        "Qt Çerçevesi",
        "C++",
        "Qt Quick",
        "QPluginLoader",
        "ONNX Runtime",
        "OpenCV",
        "macOS",
        "Çapraz Platform",
        "Eklenti Mimarisi"
    ],
    category: "Masaüstü Uygulama Geliştirme",
    date: "Haziran 2025 - Ağustos 2025",
    client: "ArVis Teknoloji",
    status: "Tamamlandı",
    images: {
        main: "projectimages/qt/qt.jpeg",
        gallery: [
            "projectimages/qt/qt1.jpeg",
            "projectimages/qt/qt2.jpeg",
            "projectimages/qt/qt3.jpeg",
            "projectimages/qt/qt4.jpeg",
            "projectimages/qt/qt5.jpeg",
            "projectimages/qt/qt6.jpeg"
        ]
    },
    features: [
        "Temel Modüler Eklenti Sistemi",
        "ONNX Runtime Entegrasyonu",
        "Çapraz Platform Desteği",
        "Dinamik Yükleme",
        "Yapay Zeka Destekli Yüz Algılama"
    ]
},

"thesis-database": {
    id: "thesis-database",
    title: "Veritabanı Tasarımı ve Web Uygulaması",
    shortDescription: "MySQL veritabanı ve Django web çerçevesi kullanılarak geliştirilen basit lisansüstü tez yönetim sistemi. 15+ tablo, temel ilişkiler ve işlevsel web arayüzü ile yapılandırıldı.",
    fullDescription: `
        <p><strong>Proje Amacı ve Kapsamı</strong><br>
        Üniversitelerdeki lisansüstü tezlerin dijital ortamda yönetilmesi, aranabilmesi ve raporlanması için temel bir veritabanı sistemi ve web arayüzü geliştirildi. Proje, 15+ normalleştirilmiş tablo ve aralarındaki ilişkileri içermektedir.</p>

        <h4>🎓 Veritabanı Yapısı:</h4>
        <ul>
        <li><strong>University Tablosu:</strong> Üniversite bilgileri (UniversityId, UniversityName)</li>
        <li><strong>Institute Tablosu:</strong> Enstitü bilgileri ve üniversite ilişkisi</li>
        <li><strong>Person Tablosu:</strong> Tüm kişilerin ortak bilgileri</li>
        <li><strong>Author Tablosu:</strong> Tez yazarları (Person tablosu ile ilişkili)</li>
        <li><strong>Supervisor Tablosu:</strong> Danışmanlar (Person tablosu ile ilişkili)</li>
        <li><strong>Thesis Tablosu:</strong> Ana tez bilgileri (tüm tablolarla ilişkili)</li>
        <li><strong>Çoktan-Çoka İlişkiler:</strong> Thesis_Keyword, Thesis_TopicSubject, Thesis_CoSupervisor</li>
        </ul>

        <h4>🔧 Teknik Özellikler:</h4>
        <ul>
        <li><strong>Normalleştirme:</strong> 3. normal forma kadar normalleştirilmiş yapı</li>
        <li><strong>İlişkisel Bütünlük:</strong> Yabancı anahtar kısıtlamaları ile veri bütünlüğü</li>
        <li><strong>İndeksleme:</strong> Arama performansı için temel indeks yapıları</li>
        <li><strong>CRUD İşlemleri:</strong> Tüm veriler için ekleme/okuma/güncelleme/silme</li>
        </ul>

        <h4>🌐 Web Arayüzü Özellikleri:</h4>
        <ul>
        <li><strong>Django MVC Mimarisi:</strong> Model-Görünüm-Denetleyici deseni</li>
        <li><strong>Duyarlı Tasarım:</strong> Mobil uyumlu temel arayüz</li>
        <li><strong>Arama İşlevleri:</strong> Çok kriterli basit arama</li>
        <li><strong>Yönetici Paneli:</strong> Django yönetici ile veri yönetimi</li>
        <li><strong>Form Doğrulama:</strong> İstemci ve sunucu tarafı doğrulama</li>
        </ul>

        <h4>📊 Veri Seti:</h4>
        <ul>
        <li><strong>Örnek Veriler:</strong> 7+ gerçek tez verisi</li>
        <li><strong>Çeşitlilik:</strong> Farklı üniversiteler, diller ve tez türleri</li>
        <li><strong>İlişkisel Veri:</strong> Anlamlı bağlantılar ile doldurulmuş</li>
        </ul>

        <p><strong>Proje Çıktıları:</strong><br>
        Temel işlevsel bir web uygulaması, normalleştirilmiş veritabanı şeması, basit dokümantasyon ve kullanıcı kılavuzu. Sistem, üniversitelerin tez yönetim ihtiyaçlarını karşılayacak şekilde basit düzeyde tasarlandı.</p>
        `,
    technologies: [
        "MySQL",
        "Django Çerçevesi",
        "Python",
        "HTML5",
        "CSS3",
        "JavaScript",
        "ORM (Nesne-İlişkisel Eşleme)",
        "Veritabanı Normalleştirme",
        "CRUD İşlemleri",
        "MVC Mimarisi",
        "Duyarlı Tasarım",
        "SQL En iyileştirme",
        "Yabancı Anahtar Kısıtlamaları",
        "İndeksleme Stratejileri",
        "Veri Modelleme"
    ],
    category: "Veritabanı ve Web Geliştirme",
    date: "Aralık 2024",
    client: "Üniversite Veritabanı Projesi",
    status: "Tamamlandı",
    images: {
        main: "projectimages/thesis-database/td.png",
        gallery: [
            "projectimages/thesis-database/td1.png",
            "projectimages/thesis-database/td2.png",
            "projectimages/thesis-database/td3.png",
            "projectimages/thesis-database/td4.png",
            "projectimages/thesis-database/td5.png",
            "projectimages/thesis-database/td6.png",
            "projectimages/thesis-database/td7.png",
            "projectimages/thesis-database/td8.png",
            "projectimages/thesis-database/td9.png",
            "projectimages/thesis-database/td10.png",
            "projectimages/thesis-database/td11.png",
            "projectimages/thesis-database/td12.png",
            "projectimages/thesis-database/td13.png",
            "projectimages/thesis-database/td14.png",
            "projectimages/thesis-database/td15.png",
            "projectimages/thesis-database/td16.png"
        ]
    },
    features: [
        "15+ Normalleştirilmiş Tablo",
        "MySQL Veritabanı",
        "Django Web Çerçevesi",
        "CRUD İşlemleri",
        "İlişkisel Veri Bütünlüğü",
        "Çok Kriterli Arama",
        "Duyarlı Tasarım",
        "Yönetici Paneli",
        "Veri Doğrulama",
        "ORM Kullanımı"
    ]
},

"school-management": {
    id: "school-management",
    title: "School Management System - Okul Yönetim Sistemi",
    shortDescription: "Python ve temel web teknolojileri kullanılarak geliştirilen basit okul yönetim sistemi. Öğrenci, öğretmen, sınıf yönetimi, devamsızlık takibi ve kantin modüllerini içeren işlevsel platform.",
    fullDescription: `
        <p><strong>Bu proje neden geliştirildi?</strong><br>
        Okul yönetim süreçlerinin kolaylaştırılması ve dijitalleştirilmesi amacıyla basit bir yönetim sistemi geliştirildi. Öğrenci takibinden kantin yönetimine kadar temel okul işlemlerinin tek bir platformda toplandığı basit bir çözüm sunuldu.</p>
        
        <p><strong>School Management System Nedir?</strong><br>
        Python programlama dili ile geliştirilmiş, modüler yapıda temel bir okul yönetim sistemidir. Öğrenci, öğretmen, sınıf yönetimi, devamsızlık takibi, kantin işlemleri ve aile kısıtlamaları gibi temel okul süreçlerinin entegre edildiği basit bir platformdur.</p>

        <h4>🎯 Proje Hedefleri:</h4>
        <ul>
        <li>Okul yönetim süreçlerinin dijitalleştirilmesi ve temel otomatikleştirme</li>
        <li>Öğrenci, öğretmen ve sınıf bilgilerinin merkezi yönetimi</li>
        <li>Devamsızlık takibi ve temel veli bilgilendirme</li>
        <li>Kantin işlemlerinin basit dijital yönetimi</li>
        <li>Ailelerin çocuklarının harcamalarını temel kontrol edebilmesi</li>
        <li>Basit raporlama ve analiz sistemi</li>
        </ul>

        <h4>🔧 Sistem Modülleri:</h4>
        
        <h4>👨‍🎓 Öğrenci Yönetimi Modülü:</h4>
        <ul>
        <li><strong>Öğrenci Listesi:</strong> Tüm öğrencilerin görüntülenmesi ve temel yönetimi</li>
        <li><strong>Öğrenci Detayları:</strong> Bireysel öğrenci bilgileri ve geçmişi</li>
        <li><strong>Öğrenci Formu:</strong> Yeni öğrenci kaydı ve güncelleme</li>
        <li><strong>Akademik Takip:</strong> Not ve başarı durumu basit izleme</li>
        </ul>

        <h4>👩‍🏫 Öğretmen Yönetimi Modülü:</h4>
        <ul>
        <li><strong>Öğretmen Listesi:</strong> Öğretmen kadrosunun temel yönetimi</li>
        <li><strong>Öğretmen Detayları:</strong> Branş, ders programı ve iletişim bilgileri</li>
        <li><strong>Öğretmen Formu:</strong> Yeni öğretmen kaydı ve bilgi güncelleme</li>
        <li><strong>Ders Atama:</strong> Öğretmen-sınıf-ders basit eşleştirme</li>
        </ul>

        <h4>🏫 Sınıf Yönetimi Modülü:</h4>
        <ul>
        <li><strong>Sınıf Listesi:</strong> Tüm sınıfların görüntülenmesi</li>
        <li><strong>Sınıf Detayları:</strong> Öğrenci mevcudu ve ders programı</li>
        <li><strong>Sınıf Formu:</strong> Yeni sınıf oluşturma ve düzenleme</li>
        <li><strong>Ders Programı:</strong> Haftalık ders planlaması</li>
        </ul>

        <h4>📊 Devamsızlık Yönetimi Modülü:</h4>
        <ul>
        <li><strong>Devamsızlık Raporları:</strong> Basit devamsızlık analizi</li>
        <li><strong>Veli Bilgilendirme:</strong> Temel SMS/e-posta gönderimi</li>
        <li><strong>Öğrenci Giriş Takibi:</strong> Okula giriş-çıkış kayıtları</li>
        <li><strong>İstatistiksel Analiz:</strong> Devamsızlık trendleri</li>
        </ul>

        <h4>🍽️ Kantin Yönetimi Modülü:</h4>
        <ul>
        <li><strong>Bakiye Ekleme:</strong> Öğrenci kantin hesabına para yükleme</li>
        <li><strong>Ürün Listesi:</strong> Kantin ürünlerinin basit yönetimi</li>
        <li><strong>Ürün Formu:</strong> Yeni ürün ekleme ve fiyat güncelleme</li>
        <li><strong>Satış Raporları:</strong> Günlük/aylık satış analizleri</li>
        </ul>

        <h4>👨‍👩‍👧‍👦 Aile Kısıtlamaları Modülü:</h4>
        <ul>
        <li><strong>Kısıtlama Listesi:</strong> Aile tarafından belirlenen temel limitler</li>
        <li><strong>Aile Girişi:</strong> Velilerin sisteme güvenli erişimi</li>
        <li><strong>Kısıtlama Belirleme:</strong> Günlük/haftalık harcama limitleri</li>
        <li><strong>Harcama Takibi:</strong> Çocukların kantin harcamalarının izlenmesi</li>
        </ul>

        <h4>🛠️ Teknik Özellikler:</h4>
        <ul>
        <li><strong>Veritabanı Yönetimi:</strong> Güvenli veri depolama ve yönetimi</li>
        <li><strong>Modüler Mimari:</strong> Basit ve genişletilebilir sistem tasarımı</li>
        <li><strong>Kullanıcı Kimlik Doğrulama:</strong> Rol tabanlı erişim kontrolü</li>
        <li><strong>Rapor Üretimi:</strong> Otomatik rapor üretimi</li>
        <li><strong>Bildirim Sistemi:</strong> SMS/e-posta bildirim entegrasyonu</li>
        </ul>

        <p><strong>Proje Etkisi:</strong><br>
        School Management System, okul yönetim süreçlerini temel düzeyde kolaylaştırdı ve dijitalleştirdi. Öğretmenler, veliler ve yöneticiler için kullanıcı dostu arayüzlerle temel okul işlemlerinin tek platformdan yönetilebilme imkanı sağlandı. Sistem, hem zaman tasarrufu hem de operasyonel verimlilik açısından basit faydalar getirdi.</p>
        `,
    technologies: [
        "Python 3.8+",
        "Django Çerçevesi",
        "SQLite Veritabanı",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Django ORM",
        "Kullanıcı Kimlik Doğrulama",
        "Rapor Üretimi",
        "SMS/E-posta API",
        "Modüler Programlama"
    ],
    category: "Tam Yığın ve Yönetim Sistemi",
    date: "Kasım 2023",
    client: "Maltepe Üniversitesi",
    status: "Tamamlandı",
    images: {
        main: "projectimages/school-management/sm.png",
        gallery: [
            "projectimages/school-management/sm1.png",
            "projectimages/school-management/sm2.png",
            "projectimages/school-management/sm3.png",
            "projectimages/school-management/sm4.png",
            "projectimages/school-management/sm5.png",
            "projectimages/school-management/sm6.png"
        ]
    },
    features: [
        "Öğrenci Yönetim Sistemi",
        "Öğretmen Kadro Yönetimi",
        "Sınıf ve Ders Programı",
        "Devamsızlık Takip Sistemi",
        "Otomatik Veli Bilgilendirme",
        "Kantin Yönetim Modülü",
        "Aile Harcama Kontrolleri",
        "Temel Raporlama"
    ]
}
};