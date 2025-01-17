import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const berjalan = [
    {
      kegiatan: "Jalan Santai",
      detail: "Meredakan Stress",
      waktu: "30",
      img: "/assets/Jalan.svg",
    },
    {
      kegiatan: "Jalan Cepat",
      detail: "Tingkatkan Sirkulasi Darah",
      waktu: "30",
      img: "/assets/Jalan.svg",
    },
    {
      kegiatan: "Lari Treadmill",
      detail: "Bantu Fungsi Organ",
      waktu: "30",
      img: "/assets/Jalan.svg",
    },
  ];

  const yoga = [
    {
      kegiatan: "Kapalbhati pranayama",
      detail: "Detoksifikasi Diri",
      waktu: "30",
      img: "/assets/yoga1.svg",
    },
    {
      kegiatan: "Bhujnagasana",
      detail: "Tingkatkan sirkulasi darah",
      waktu: "30",
      img: "/assets/yoga2.svg",
    },
    {
      kegiatan: "Sarvangasana",
      detail: "Bantu Fungsi Organ",
      waktu: "30",
      img: "/assets/yoga3.svg",
    },
    {
      kegiatan: "Shishuasana",
      detail: "Bantu Kurangi Stres",
      waktu: "30",
      img: "/assets/yoga3.svg",
    },
    {
      kegiatan: "Shavasana",
      detail: "Bantu Remajakan Tubuh",
      waktu: "30",
      img: "/assets/yoga2.svg",
    },
  ];

  const berenang = [
    {
      kegiatan: "Gaya Bebas",
      detail: "Detoksifikasi diri",
      waktu: "30",
      img: "/assets/berenang.svg",
    },
    {
      kegiatan: "Gaya Dada",
      detail: "Tingkatkan Sirkulasi Darah",
      waktu: "30",
      img: "/assets/berenang.svg",
    },
    {
      kegiatan: "Gaya Kupu-Kupu",
      detail: "Bantu Fungsi Organ",
      waktu: "30",
      img: "/assets/berenang.svg",
    },
    {
      kegiatan: "Gaya Punggung",
      detail: "Bantu Kurangi Stress",
      waktu: "30",
      img: "/assets/berenang.svg",
    },
  ];

  const jogging = [
    {
      kegiatan: "Jarak Pendek",
      detail: "Meredakan Stress",
      waktu: "30",
      img: "/assets/jogging.svg",
    },
    {
      kegiatan: "Jarak Menengah",
      detail: "Tingkatkan Sirkulasi Darah",
      waktu: "30",
      img: "/assets/jogging.svg",
    },
    {
      kegiatan: "Estafet",
      detail: "Bantu Fungsi Organ",
      waktu: "30",
      img: "/assets/jogging.svg",
    },
    {
      kegiatan: "Fun Run",
      detail: "Bantu Kurangi Stress",
      waktu: "30",
      img: "/assets/jogging.svg",
    },
  ];

  return (
    <div className='mx-20'>
      <section className="my-20">
        <h1 className='text-[60px] font-semibold'>
          <span className='text-[#508CAE]'>Statistik</span> Anda Sampai <br />
          Saat ini
        </h1>
      </section>

      <section className='grid grid-cols-3 gap-6'>
        <div className='bg-[#F8F9FC] shadow-lg px-20 rounded-2xl w-full h-[171.38px] flex justify-between items-center col-span-3'>
          <div className='flex justify-between gap-7'>
            <div className='avatar'>
              <img
                src='/assets/Avatar.svg'
                className='w-[100px] h-[100px]'
                alt='Avatar'
              />
            </div>
            <div className='flex-row content-center'>
              <h1 className='text-[24px] font-bold'>Yoga Aghata</h1>
              <p className='text-[16px]'>Statistik Kamu</p>
            </div>
          </div>
          <div className='flex-row content-center'>
            <div className='flex gap-1 items-center'>
              <p className='text-[24px] font-bold'>10</p>
              <img
                src='/assets/Coin.svg'
                className='w-[23.57px] h-[23.57px]'
                alt='Coin'
              />
            </div>
            <div className='flex-row content-center'>
              <Link to='/tukar-point'><p className='text-[#508CAE] text-[20] font-bold'>TUKAR POIN</p></Link>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='bg-[#F8F9FC] shadow-lg px-5 rounded-2xl w-full h-[171.49px] flex flex-col justify-center'>
            <div className='flex justify-end'>
              <img
                src='/assets/Dollar.svg'
                className='w-[24.15px] h-[24.15px]'
                alt='Icon'
              />
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex justify-between gap-7'>
                <div className='avatar'>
                  <img
                    src='/assets/Dompet.svg'
                    className='w-[90px] h-[90px]'
                    alt='Avatar'
                  />
                </div>
                <div className='flex-row content-start'>
                  <h1 className='text-[#AEAEAE] text-[20px] font-semibold'>
                    HEMAT UANG
                  </h1>
                  <h1 className='text-[#151411] text-[36px] font-bold'>
                    Rp.5,000,000
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='bg-[#F8F9FC] shadow-lg px-5 rounded-2xl w-full h-[171.49px] flex flex-col justify-center'>
            <div className='flex justify-end'>
              <img
                src='/assets/Rokok.svg'
                className='w-[24.15px] h-[24.15px]'
                alt='Icon'
              />
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex justify-between gap-7'>
                <div className='avatar'>
                  <img
                    src='/assets/Rokok.svg'
                    className='w-[90px] h-[90px]'
                    alt='Avatar'
                  />
                </div>
                <div className='flex-row content-start'>
                  <h1 className='text-[#AEAEAE] text-[20px] font-semibold'>
                    TIDAK MEROKOK
                  </h1>
                  <h1 className='text-[#151411] text-[36px] font-bold'>100</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row-span-3'>
          <div className='bg-[#F8F9FC] shadow-lg px-5 rounded-2xl w-full h-[580px] flex flex-col justify-between py-5'>
            <div className='flex justify-between'>
              <div className='flex-row content-start'>
                <h1 className='text-[#AEAEAE] text-[24px] font-semibold'>
                  MISI
                </h1>
                <h1 className='text-[#151411] text-[20px] font-bold'>10/50</h1>
              </div>
              <img
                src='/assets/Penghargaan.svg'
                className='w-[24.15px] h-[24.15px]'
                alt='Icon'
              />
            </div>
            <div className='flex justify-center items-center'>
              <img
                src='/assets/Man.svg'
                className='w-[249px] h-[243px]'
                alt='Man'
              />
            </div>
            <div className='flex justify-center items-center'>
              <img
                src='/assets/Progress.svg'
                className='w-[251.19px] h-[20.52px]'
                alt='Man'
              />
            </div>
          </div>
        </div>

        <div className='row-span-2 col-span-2'>
          <div className='bg-[#F8F9FC] shadow-lg px-20 rounded-2xl w-full h-[379.34px] flex flex-col justify-center'>
            <div className='flex justify-between'>
              <h1 className='text-[18px] font-bold'>TIDAK MEROKOK</h1>
              <img
                src='/assets/Chart-Icon.svg'
                className='w-[28.98px] h-[32.19px]'
                alt='Icon'
              />
            </div>
            <img
              src='/assets/Chart.svg'
              className='w-[736.67px] h-[245.45px]'
              alt='Chart'
            />
          </div>
        </div>
      </section>

      <section className='py-20'>
        <h1 className='text-[60px] font-semibold'>
          Jalankan <span className='text-[#508CAE]'>Misi</span> Untuk
          <br />
          Mendapatkan POIN
        </h1>
      </section>

      <section className='grid grid-cols-4 gap-y-6'>
        <div className='flex justify-center'>
          <h1 className='text-[24px] font-bold'>Berjalan</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='text-[24px] font-bold'>Yoga</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='text-[24px] font-bold'>Berenang</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className='text-[24px] font-bold'>Jogging</h1>
        </div>

        <div className='w-[295px] h-[558px] overflow-y-auto overflow-x-hidden'>
          {berjalan.map((item) => (
            <div key={item.id} className='flex flex-col gap-y-4 justify-center'>
              <div className='w-[295px] h-[166px] rounded-lg shadow-lg flex justify-between px-4'>
                <div className='flex flex-col gap-1 justify-center'>
                  <h1 className='text-[20px] font-semibold'>{item.kegiatan}</h1>
                  <p className='text-[12px]'>{item.detail}</p>
                  <div className='flex gap-1 items-center'>
                    <img
                      src='/assets/Clock.svg'
                      className='w-[16px] h-[16px]'
                      alt='Clock'
                    />
                    <p className='text-[12px]'>{`${item.waktu} mins`}</p>
                  </div>
                  <button className='mt-4 w-[116px] h-[25.2px] bg-[#508CAE] rounded-md'>
                    <p className='text-[#F8F9FC] font-normal text-[12px]'>
                      Mulai Sekarang
                    </p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <img
                    src={item.img}
                    className='w-[94px] h-[118px]'
                    alt='Jalan'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-[295px] h-[520px] overflow-y-auto overflow-x-hidden'>
          {yoga.map((item) => (
            <div key={item.id} className='flex flex-col gap-y-4 justify-center'>
              <div className='w-[295px] h-[166px] rounded-lg shadow-lg flex justify-between px-4'>
                <div className='flex flex-col gap-1 justify-center'>
                  <h1 className='text-[20px] font-semibold'>{item.kegiatan}</h1>
                  <p className='text-[12px]'>{item.detail}</p>
                  <div className='flex gap-1 items-center'>
                    <img
                      src='/assets/Clock.svg'
                      className='w-[16px] h-[16px]'
                      alt='Clock'
                    />
                    <p className='text-[12px]'>{`${item.waktu} mins`}</p>
                  </div>
                  <button className='mt-4 w-[116px] h-[25.2px] bg-[#508CAE] rounded-md'>
                    <p className='text-[#F8F9FC] font-normal text-[12px]'>
                      Mulai Sekarang
                    </p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <img
                    src={item.img}
                    className='w-[94px] h-[118px]'
                    alt='Jalan'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-[295px] h-[520px] overflow-y-auto overflow-x-hidden'>
          {berenang.map((item) => (
            <div key={item.id} className='flex flex-col gap-y-4 justify-center'>
              <div className='w-[295px] h-[166px] rounded-lg shadow-lg flex justify-between px-4'>
                <div className='flex flex-col gap-1 justify-center'>
                  <h1 className='text-[20px] font-semibold'>{item.kegiatan}</h1>
                  <p className='text-[12px]'>{item.detail}</p>
                  <div className='flex gap-1 items-center'>
                    <img
                      src='/assets/Clock.svg'
                      className='w-[16px] h-[16px]'
                      alt='Clock'
                    />
                    <p className='text-[12px]'>{`${item.waktu} mins`}</p>
                  </div>
                  <button className='mt-4 w-[116px] h-[25.2px] bg-[#508CAE] rounded-md'>
                    <p className='text-[#F8F9FC] font-normal text-[12px]'>
                      Mulai Sekarang
                    </p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <img
                    src={item.img}
                    className='w-[94px] h-[118px]'
                    alt='Jalan'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-[295px] h-[520px] overflow-y-auto overflow-x-hidden'>
          {jogging.map((item) => (
            <div key={item.id} className='flex flex-col gap-y-4 justify-center'>
              <div className='w-[295px] h-[166px] rounded-lg shadow-lg flex justify-between px-4'>
                <div className='flex flex-col gap-1 justify-center'>
                  <h1 className='text-[20px] font-semibold'>{item.kegiatan}</h1>
                  <p className='text-[12px]'>{item.detail}</p>
                  <div className='flex gap-1 items-center'>
                    <img
                      src='/assets/Clock.svg'
                      className='w-[16px] h-[16px]'
                      alt='Clock'
                    />
                    <p className='text-[12px]'>{`${item.waktu} mins`}</p>
                  </div>
                  <button className='mt-4 w-[116px] h-[25.2px] bg-[#508CAE] rounded-md'>
                    <p className='text-[#F8F9FC] font-normal text-[12px]'>
                      Mulai Sekarang
                    </p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <img
                    src={item.img}
                    className='w-[94px] h-[118px]'
                    alt='Jalan'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
