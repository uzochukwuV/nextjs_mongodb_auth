'use client'

import "./land.module.css";


import { useRouter } from "next/navigation";

import { MdChevronRight } from "react-icons/md";

import Image from "next/image";
import Card from "@/components/card";

import Header from "@/components/header";



function Page() {
  const router = useRouter();
  


  return (
    <div className="absolute top-0 bg-transparent left-0 right-0">
      <Header />

      <main className="absolute top-20 right-0 left-0 -z-10">
        <div
          className={
            " h-[700px] land-rad w-full bg-slate-950 curved-bottom sm:px-16 md:px-20 px-4"
          }
        >
          <div className='md:bg-[url("/bull.png")] bg-[url("/chart.png")] h-[440px]  bg-contain pr-16 bg-right bg-no-repeat bg-blend-darken  flex   items-center justify-between'>
            <div className=" max-w-md flex gap-6 flex-col items-start">
              <h1 className="text-5xl font-bold">
                Shaping the Future of Financial Market
              </h1>
              <p className=" font-medium">
                Choose from the best Masters of Forex and diversify your
                portfolio
              </p>
              <button className="flex gap-2 items-center bg-yellow-600 px-6 py-2 hover:bg-yellow-700 group">
                Join FirmStock <MdChevronRight className=" group-hover:translate-x-3 transition-transform font-bold" />
              </button>
            </div>

            {/* <div className=' w-max h-max bg-gradient-to-tr from-slate-900 to-black'>
                        <Image src={'/bull.jpg'} height={700} width={600} className='-z-10 -z-10 bg-zinc-800' alt={'jhb'} />
                    </div> */}
          </div>

          <div className="flex items-center justify-between px-4 pt-8 flex-wrap">
            <div className="text-center w-36 ">
              <Image
                src={"popular.svg"}
                alt="1"
                width={40}
                height={40}
                className="mx-auto pb-2 hover:scale-125"
              />
              <p className="font-medium text-sm">
                Best broker trading conditions
              </p>
            </div>
            <div className="text-center w-36 ">
              <Image
                src={"cost_chart.svg"}
                alt="1"
                width={40}
                height={40}
                className="mx-auto pb-2 hover:scale-125"
              />
              <p className="font-medium text-sm">
                Wide range of trading options and currencies
              </p>
            </div>
            <div className="text-center w-36 ">
              <Image
                src={"book.svg"}
                alt="1"
                width={40}
                height={40}
                className="mx-auto pb-2 hover:scale-125"
              />
              <p className="font-medium text-sm">
                Free educational support and consultancy
              </p>
            </div>
            <div className="text-center w-36 ">
              <Image
                src={"asta.svg"}
                alt="1"
                width={40}
                height={40}
                className="mx-auto pb-2 hover:scale-125"
              />
              <p className="font-medium text-sm">
                Established with multiple regulatory licenses
              </p>
            </div>
            <div className="text-center w-36 ">
              <Image
                src={"insight.svg"}
                alt="1"
                width={40}
                height={40}
                className="mx-auto pb-2 hover:scale-125"
              />
              <p className="font-medium text-sm">
                Free trading strategy ideas from market experts
              </p>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="sm:px-16 md:px-20 px-4 py-20">
          <div className=" text-center max-w-lg text-black mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Trading Investment Plans
            </h2>
            <p className=" text-slate-600  text-sm">
              Customers expectations have changed. We make sure to deliver a
              seamles expirence everytime with the best broker options
            </p>
          </div>

          <div id="cad" className="flex gap-8 items-center justify-center flex-wrap">
            <div data-aos="fade-right"
    data-aos-anchor="#cad"
    data-aos-offset="250"
    data-aos-duration="700">
              <Card />
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor="#cad"
            data-aos-offset="250"
            data-aos-duration="600"
            >
                <Card />
            </div>
           
            <div
            data-aos="fade-left"
            data-aos-anchor="#cad"
            data-aos-offset="150"
            data-aos-duration="500"
            >
                <Card />
            </div>
          </div>
        </div>

        {/*  */}

        <div className=" bg-slate-50 relative">
          <div className="">
           <div className="flex justify-between flex-col-reverse md:flex-row gap-5 sm:px-16 md:px-20 px-4 py-10 items-center">
           <div className=" clear-start max-w-lg ">
              <h2 className="text-3xl text-gray-900 font-bold mb-3">
                Live Rates<span className="text-red-600">.</span>
              </h2>
              <p className=" text-slate-600  text-sm font-medium">
                Customers expectations have changed. We make sure to deliver a
                seamles expirence everytime with the best broker options
              </p>
              
            </div>
            <div className=" float-right">
                    <Image src={'/bg3.png'} height={300} width={200} alt="bg" />
            </div>
            </div>

            
            <div id="ecad"  className="w-full bg-slate-950 font-medium text-white sm:px-16 md:px-20 px-4 py-10">
              <div>
                <h2 className="text-3xl  font-bold mb-10" >
                  Why Choose Us<span className="text-red-600">.</span>
                </h2>
              </div>
             <div className="flex gap-4">
             <div className=" max-w-sm ring-2 ring-red-500 p-4 w-64">
              <h3 className="text-2xl text-red-600 mb-4 ">Instant Payment</h3>
                  <p className="text-sm">All payments are processed instantly. Our system is fully automated which will process your withdrawal request instantly.</p>
              </div>
              <div className=" max-w-sm ring-2 ring-red-500 bg-red-500 p-4 w-64">
              <h3 className="text-2xl text-slate-800 mb-4 ">Professional team</h3>
                  <p className="text-sm">Our team of experts have developed an automatic system that will allow you to make profit handsomely.</p>
              </div>
              <div className=" max-w-sm ring-2 ring-red-500 p-4 w-64">
              <h3 className="text-2xl text-red-600 mb-4 ">24/7 Support</h3>
                  <p className="text-sm">
Our live chat support is online 24 hours every day and the team is ready to give you any kind of support. Our helpline is available 8:00am - 5pm GMT.</p>
              </div>
             </div>
             
            </div>
           
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;

const Footer = () => {
  return (
    <>
      FXTM is an international online broker offering financial services in
      various financial instruments. FXTM brand is authorized and regulated in
      various jurisdictions. ForexTime Limited (www.forextime.com/eu) is
      regulated by the Cyprus Securities and Exchange Commission with CIF
      license number 185/12, licensed by the Financial Sector Conduct Authority
      (FSCA) of South Africa, with FSP No. 46614. The company is also registered
      with the Financial Conduct Authority of the UK with number 600475. The
      office is at 35, Lamprou Konstantara, FXTM Tower, Kato Polemidia, 4156,
      Limassol, Cyprus. Exinity Limited (www.forextime.com) is regulated by the
      Financial Services Commission of the Republic of Mauritius with an
      Investment Dealer License bearing license number C113012295 and it is
      situated at 5th Floor, 355 NEX Tower, Rue du Savoir, Cybercity, Ebene
      72201, Mauritius . Forextime UK Limited is authorised and regulated by the
      Financial Conduct Authority, firm reference number 777911 and is situated
      at 30 Churchill Place, London, E14 5EU, UK. Your capital is at risk. You
      should not spend more than you can afford to lose and should ensure that
      you fully understand the risks involved. Using the products offered may
      not be suitable for everyone. Before you use these products, please take
      into consideration your level of experience, financial objectives and seek
      independent advice if necessary. It is the responsibility of the Client to
      ascertain whether he/she is permitted to use the services of the FXTM
      brand based on the legal requirements in his/her country of residence.
      Please read FXTM’s full Risk Disclosure. © 2011 - 2023 FXTM
    </>
  );
};

export {Page as Home, Footer}
