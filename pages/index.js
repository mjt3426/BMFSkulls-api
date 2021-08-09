import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>BMF Skulls</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="BMF Skulls" key="ogtitle" />
        <meta property="og:description" content="Here at Boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://bmfskulls.art/" key="ogurl"/>
        <meta property="og:site_name" content="https://BMFSkulls.art/" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="bmfskulls" key="twdomain" />
        <meta property="twitter:url" content="https://bmfskulls.art/" key="twurl" />
        <meta name="twitter:title" content="BMF Skulls" key="twtitle" />
        <meta name="twitter:description" content="Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="twdesc" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="https://bmfskulls.art/" className="text-4xl text-white hover:text-black m-6">Home</a>
              <a href="httos://bmfskulls.art/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a>
              <a href="#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
              <a href="#team" className="text-4xl text-white hover:text-black m-6">Team</a>
              <a href="https://twitter.com/bmfskulls" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/vc7XrBzP" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">EVERYONE, meet <br/><span className="text-blau">boring bananas</span></h1>
                    <p className="text-2xl text-white my-6  montserrat">Here at <span className="text-5xl Poppitandfinch ">boring</span> <span className="text-blau text-5xl Poppitandfinchsans">Bananas</span> <span className="text-5xl Poppitandfinch">company</span>, we specialize in the world's <span className="text-span-2 font-bold">finest digital bananas</span>.<br />‍<br />We&#x27;ve put together a team spanning 3 continents, to bring you some of the most <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">NUTRITIOUS </span><span className="text-5xl Poppitandfinch ">and</span><span className="text-blau text-5xl Poppitandfinchsans"> DELICIOUS</span> <br/>bananas out there.
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> 29 June 2021. 2pm EST. <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 1000</strong> Skulls.<br/><strong>PRICE: 0.03 ETH </strong>each.</span></p>
<iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-06-29T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>
                  </div>
                  <img className="lg:w-1/2 w-3/4" src="images/Hola.gif" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>



    

             )
}
