# Login Tahmin Sistemi

## Proje Hakkında

Bu uygulama, kullanıcıların geçmiş login zamanlarını analiz ederek bir sonraki login zamanlarını tahmin eden bir web uygulamasıdır. Üç farklı tahmin algoritması kullanarak, kullanıcı davranışlarını modelleyip gelecekteki login zamanları için öngörüler sunar. Kullanıcı dostu arayüzü ile hem basit hem de etkili bir deneyim sağlar.

## Özellikler

- Kullanıcı listesi görüntüleme ve arama yapabilme
- Kullanıcı detaylarını görüntüleme
- Kullanıcıların geçmiş login zamanlarını görüntüleme
- Üç farklı algoritma ile gelecekteki login zamanlarını tahmin etme:
  - Basit Ortalama Aralık Yöntemi
  - Gün-Saat Pattern Analizi
  - Gaussian Mixture Models (GMM)
- Her algoritma için doğruluk skorları ve ek bilgiler
- Humanas kurumsal kimliğine uygun modern arayüz
- Mobil uyumlu responsive tasarım

## Teknolojiler

### Frontend
- React.js (v18)
- React Router DOM (v7) - Sayfa yönlendirmeleri için
- Modern JavaScript (ES6+)
- Vite - Hızlı geliştirme ortamı ve build aracı
- CSS3 ile özel stilizasyon

### Backend
- PHP (OOP prensiplerine uygun)
- RESTful API yapısı

### Sunucu
- XAMPP (Apache, PHP)

## Kurulum

### Gereksinimler
- XAMPP (veya Apache ve PHP barındıran başka bir sunucu)
- Node.js (v14 veya üzeri) ve npm

### Adımlar

1. Projeyi bilgisayarınıza klonlayın:
```bash
git clone https://github.com/kullanici/humanas-login-prediction.git
```

2. XAMPP'i başlatın ve Apache servisini çalıştırın.

3. Projeyi XAMPP'in htdocs klasörüne kopyalayın:
```
C:\xampp\htdocs\humanas
```

4. Frontend bağımlılıklarını yükleyin:
```bash
cd frontend
npm install
```

5. Frontend uygulamasını geliştirme modunda başlatın:
```bash
npm run dev
```

6. Tarayıcınızda uygulamayı açın:
```
http://localhost:5173
```

## Uygulama Mimarisi ve Çalışma Prensibi

### Ana Sayfa (HomePage)
- Kullanıcıların listelendiği ve arama yapılabilen ana sayfa
- Header, UserList ve Footer komponentlerinden oluşur
- Kullanıcı kartlarına tıklandığında detay sayfası aynı pencerede açılır

### Kullanıcı Detay Sayfası (UserPrediction)
- Seçilen kullanıcının login geçmişi ve tahmin sonuçlarını gösterir
- Header, PredictionResults ve Footer komponentlerinden oluşur
- Ana sayfaya dönüş butonu içerir

### Veri Akışı
1. Kullanıcı, uygulamaya eriştiğinde tüm kullanıcılar listelenir
2. Kullanıcı, bir kullanıcı seçtiğinde (tıkladığında) yeni bir sekmede detay sayfası açılır
3. Detay sayfasında, kullanıcının login geçmişi ve tahmin algoritmaları gösterilir
4. Her algoritma, kullanıcının geçmiş verilerine dayanarak tahmin yapar ve doğruluk puanı hesaplanır

### Dosya Yapısı
```
humanas/
│
├── backend/                  # PHP Backend
│   ├── api_data.json         # Kullanıcı ve login verileri
│   ├── login_prediction_app.php  # Ana backend API
│   ├── LoginPredictor.php    # Temel tahmin sınıfı (soyut)
│   ├── AverageIntervalPredictor.php  # Ortalama aralık algoritması
│   ├── PatternAnalysisPredictor.php  # Gün-saat pattern analizi
│   └── GaussianMixtureModelPredictor.php  # GMM algoritması
│
└── frontend/                # React Frontend
    ├── public/              # Statik dosyalar
    └── src/                 # Kaynak kodlar
        ├── App.jsx          # Ana uygulama ve yönlendirme
        ├── App.css          # Ana stil dosyası
        ├── pages/           # Sayfa komponentleri
        │   └── UserPrediction.jsx  # Kullanıcı detay sayfası
        └── components/      # Yeniden kullanılabilir komponentler
            ├── Header.jsx   # Sayfa başlığı
            ├── UserList.jsx # Kullanıcı listesi ve arama
            ├── PredictionResults.jsx # Tahmin sonuçları
            └── Footer.jsx   # Sayfa altlığı
```

## Tahmin Algoritmaları

### 1. Basit Ortalama Aralık Yöntemi (Average Interval)
Bu algoritma, kullanıcının login'leri arasındaki ortalama süreyi hesaplar ve son login zamanına bu süreyi ekleyerek bir sonraki tahmini login zamanını belirler.

### 2. Gün-Saat Pattern Analizi (Pattern Analysis)
Bu algoritma, kullanıcının hangi gün ve saatlerde login olma eğiliminde olduğunu analiz eder. Haftanın günlerini ve günün saatlerini inceleyerek en yüksek olasılığa sahip zamanı tahmin eder.

### 3. Gaussian Mixture Models (GMM)
Bu algoritma, istatistiksel yaklaşımla login zamanlarını analiz eder. Kullanıcının login davranışlarını çoklu normal dağılımlar (Gaussian) kullanarak modelleyip bir sonraki login için en olası zamanı belirler.

## Doğruluk Skorları

Her algoritma için, son login zamanını hariç bırakarak bir tahmin yapılır ve bu tahmin gerçek son login zamanıyla karşılaştırılarak 0-100 arası bir doğruluk skoru hesaplanır:

- **90-100**: Mükemmel (1 saatten az fark)
- **80-90**: Çok İyi (1-3 saat fark)
- **70-80**: İyi (3-6 saat fark)
- **60-70**: Ortalamanın Üzerinde (6-12 saat fark)
- **50-60**: Ortalama (12-24 saat fark)
- **30-50**: Ortalamanın Altında (24-48 saat fark)
- **10-30**: Zayıf (48 saatten fazla fark)

## Geliştirici

- Burak ÖNGÖREN
