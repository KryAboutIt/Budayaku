<template>
  <main>
    <Navbar />
    <MainHero />
    <Sections
      :section="1"
      :bgImg="'/images/bg-2.png'"
      :title="'warisan kita'"
      :desc="'Indonesia memiliki warisan yang beragam dimana mencakup seni tradisional, musik, dan olahraga, yang dikombinasikan dalam bentuk seni bela diri yang disebut Pencak Silat. Seni visual dan pertunjukan negara ini sangat dipengaruhi oleh epos Hindu, sementara musik tradisional didominasi oleh gamelan, ansambel musik tradisional orang Jawa, Sunda, dan Bali di Indonesia. Indonesia memiliki 12 Warisan Budaya yang terdaftar di UNESCO yang dimaksudkan untuk melestarikan warisan budaya Indonesia, salah satu caranya adalah dengan menggunakan teknologi Web3 untuk membuat situs web yang menampilkan warisan budaya Indonesia. Cara lain adalah dengan mempromosikan Warisan Budaya Takbenda yang terdaftar di UNESCO.'"
      :positionRight="true"
    />
    <Sections
      :section="2"
      :bgImg="'/images/bg-3.png'"
      :title="'identitas kita'"
      :desc="'Budaya Indonesia, dengan keanekaragaman dan keberagamannya, merupakan identitas nasional yang mencerminkan jati diri bangsa. Budaya ini mencakup tradisi, bahasa, makanan, pakaian, seni, dan nilai-nilai seperti gotong royong dan toleransi. Budaya juga berperan penting dalam pembangunan sosial dan ekonomi, seperti pengembangan pariwisata budaya. Namun, di era globalisasi, budaya asing dapat menggeser budaya lokal, sehingga penting bagi kita untuk melestarikan budaya Indonesia.'"
      :positionRight="false"
    />
    <Sections
      :section="3"
      :bgImg="'/images/bg-4.png'"
      :title="'momentum kita'"
      :desc="'Indonesia, dengan beragam budaya dan warisan yang kaya, memiliki kesempatan unik untuk mempromosikan kekayaan budayanya kepada dunia di era modern ini. Hal ini dapat dicapai melalui Platform Digital, Program Pertukaran Budaya, Kolaborasi dengan Merek Global, Pariwisata, Pendidikan, dan banyak lagi. Namun demikian, Kunci untuk mempromosikan budaya adalah melalui rasa hormat dan pengertian. Penting untuk memastikan bahwa promosi budaya tidak mengarah pada apropriasi atau komodifikasi praktik tradisional. Dengan perencanaan dan eksekusi yang matang, kekayaan budaya Indonesia memang bisa dibagikan ke seluruh dunia.'"
      :positionRight="true"
    />
    <YouthPledge />
    <Footer/>
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sections from "./components/Main/MainSection.vue";
import MainHero from "./components/Main/MainHero.vue";
import YouthPledge from "./components/Main/ToTheInfinity.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, MainHero, Sections, YouthPledge, Footer },
  data() {
    return {};
  },
};
</script>
