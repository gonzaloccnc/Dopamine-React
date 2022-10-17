import ArticleAbout from '../components/ArticleAbout'
import TitleDecorate from '../components/TitleDecorate'
import food1 from '../../assets/food1.jpg'
import food2 from '../../assets/food2.jpg'
import food3 from '../../assets/food3.jpg'

const About = () => {
  return (
    <main className='w-100 h-auto md:py-16 xs:pt-12'>
      <TitleDecorate title={'About Us'} />
      <section>
        <ArticleAbout url={food1} subtitle='Why Dopamine'>
          First of all, it is the place for people who are ague to eat delicious
          food and not to put on weight. It is the place for those who want to
          enjoy amazing atmosphere, relaxing music and unsurpassed taste of our
          healthy food. If you keep fit, you are able not to be afraid of eating
          with us.
        </ArticleAbout>
        <ArticleAbout
          url={food2}
          pos='topRight'
          subtitle='What should you choose?'
          first
        >
          You can choose whatever you like, from simple but very tasty
          vegetables to gourmet meals that will not affact your worderful
          figure, Even desserts can be eaten without a shadow of a doubt,
          because ther are low - calorie and at the same time wild horses could
          not drag our desserts away from you!
        </ArticleAbout>
        <ArticleAbout
          url={food3}
          pos='bottomLeft'
          subtitle='What is our aim?'
          last
        >
          They aim of creating "Dopamine" was to show people that you can eat
          delicious dishes that will not destroy your body.
          <br />
          There is a saying: "Healthy food is not tasty", so we want to prove
          you that it is not true.
        </ArticleAbout>
      </section>
    </main>
  )
}

export default About
