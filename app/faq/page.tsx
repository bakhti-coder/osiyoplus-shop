import PageTransitionProvider from "../components/page-transition";
import TextAnimation from "../components/text-animation";

const Faq = () => {
  return (
    <PageTransitionProvider>
      <section>
        <div className="container max-w-1200 py-20">
          <h2 className="md:text-3xl text-xl font-bold text-dark leading-8 mb-5 text-center">
            {`Mahsulotlarlarni qanday sotib olsam bo'ladi?`}
          </h2>
          <div className="py-10">
            <TextAnimation>
              <p className="text-xl text-black font-extralight text-center">
                {`Bizning saytdan mahsulot xarid qilish uchun Ro'yxatdan o'tishingiz kerak bo'ladi va kirish sahifasiga o'tib ro'yxatdan o'tgan email hamda parolingizni kirgizishingiz kerak bo'ladi. Mahsulotlar sahifasiga o'tib istagan mahsulotingizni ustiga ezing va buyurtma berish knopkasini ezing hamda malumotlaringizni kiriting:Ismingiz va
            telefon raqamingizni kiriting. Sizga tez orada Adminlarimiz aloqaga
            chiqishadi😊`}
              </p>
            </TextAnimation>
          </div>
        </div>
      </section>
    </PageTransitionProvider>
  );
};

export default Faq;
