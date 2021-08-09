import Head from 'next/head';
import Banner from '../components/banner';
import Header from '../components/header';
import SmallCard from '../components/smallcard';
import MediumCard from '../components/mediumcard';
import LargeCard from '../components/largecard';
import Footer from '../components/footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Air BnB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header @header.js*/}
      <Header />

      {/*Banner @banner.js*/}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull card data from server using server side rendering */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location} />
            ))}
          </div>
        </section>
        {/* Medium Card Section with scrolling gallery */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          {/*  Pull image data from server using server side rendering */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description=' Wishlist curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData
    }
  }
}