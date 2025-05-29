

const Tabsdata = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[10px]">
          <h5 className="font-sans font-semibold text-[30px] text-[#222] flex gap-x-1 items-center">
            Owner or Operator :{" "}
            <span className="text-[#222] font-normal" contentEditable={true}>
              Caribbean Buzz, LLC
            </span>
          </h5>
          <h5 className="font-sans font-semibold text-[30px] text-[#222] flex gap-x-1 items-center">
            Registration :
            <span className="text-[#222] font-normal" contentEditable={true}>
              N282ZZ
            </span>
          </h5>
          <h5 className="font-sans font-semibold text-[30px] text-[#222] flex gap-x-1 items-center">
            Flight :
            <span className="text-[#222] font-normal" contentEditable={true}>
              103
            </span>
          </h5>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h5 className="font-sans font-semibold text-[30px] text-[#222] flex gap-x-1 items-center text-end justify-end">
            Flight Date :
            <span className="text-[#222] font-normal" contentEditable={true}>
              26 May 2025
            </span>
          </h5>
          <h5 className="font-sans font-semibold text-[30px] text-[#222] flex gap-x-1 items-center justify-end">
            Arrival :
            <span className="text-[#222] font-normal" contentEditable={true}>
              (VIJ)
            </span>
          </h5>
          <h5 className="font-sans font-semibold text-[30px] text-[#222] flex gap-x-1 items-center justify-end">
            Departure :
            <span className="text-[#222] font-normal" contentEditable={true}>
              (STT)
            </span>
          </h5>
        </div>
      </div>
      <div className="mt-[60px] border-2 border-[#222] rounded-[8px] py-5">
        <h3 className="font-sans font-semibold text-[#222] text-[36px] text-center">
          GENERAL DECLARATION
        </h3>
        <h4 className="font-sans font-medium text-[#222] text-[30px] text-center">
          (“Place”Column always to list origin, every en-route stop and
          destination)
        </h4>
      </div>
      <div className="mt-5 border-2 border-[#222] rounded-[8px] flex justify-between">
        <div className="border-r border-[#222] w-[15%] mx-auto">
          <h3 className="border-b border-[#222] py-5 text-center font-sans text-[25px] font-semibold text-[#222]">
            Nationality
          </h3>
          <ul>
            <li
              contentEditable={true}
              className="border-b border-[#222] py-5 text-center font-sans text-[20px] font-normal text-[#222]"
            >
              USA
            </li>
            <li
              contentEditable={true}
              className="border-b border-[#222] py-5 text-center font-sans text-[20px] font-normal text-[#222]"
            >
              USA
            </li>
            <li
              contentEditable={true}
              className="border-b border-[#222] py-5 text-center font-sans text-[20px] font-normal text-[#222]"
            >
              USA
            </li>
            <li
              contentEditable={true}
              className="border-b border-[#222] py-5 text-center font-sans text-[20px] font-normal text-[#222]"
            >
              USA
            </li>
            <li
              contentEditable={true}
              className="py-5 text-center font-sans text-[20px] font-normal text-[#222]"
            >
              USA
            </li>
          </ul>
        </div>
        <div className="border-r border-[#222] w-[45%] mx-auto">
          <h3 className="border-b border-[#222] py-5 text-center font-sans text-[25px] font-semibold text-[#222]">
            Crew / Passenger Details
          </h3>
          <ul>
            <li className="border-b border-[#222] py-5 pl-10 font-sans text-[20px] font-normal text-[#222]">
              Crew: Nicolas M Van Hauck, 28 JAN 1990, 565789374
            </li>
            <li className="border-b border-[#222] py-5 pl-10  font-sans text-[20px] font-normal text-[#222]">
              Crew: Justin R Bartosh 06 Dec 1988 565789374
            </li>
            <li
              contentEditable={true}
              className="border-b border-[#222] py-5 pl-10 font-sans text-[20px] font-normal text-[#222]"
            >
              Pax: Gristopher Arenz 19 Dec 1967 A4S777129
            </li>
            <li
              contentEditable={true}
              className="border-b border-[#222] py-5 pl-10 font-sans text-[20px] font-normal text-[#222]"
            >
              Pax: Amy Arenz 11 Feb 1971 647527873
            </li>
            <li
              contentEditable={true}
              className="py-5 pl-10 font-sans text-[20px] font-normal text-[#222]"
            >
              Pax: Mackenzte Carroll 12 A r 2001 ACYJ637466
            </li>
          </ul>
        </div>
        <div className=" w-[40%] mx-auto">
          <h3 className="border-b border-[#222] py-5 text-center font-sans text-[25px] font-semibold text-[#222]">
            Number Of Passengers On This Stage
          </h3>
          <div className="flex flex-col gap-[30px]  px-10 pt-5">
            <div className="flex justify-between">
              <h4 className="text-[20px] font-sans text-[#222] font-medium">
                Departure Place:
              </h4>
              <h5
                contentEditable={true}
                className="text-[20px] font-sans text-[#222] font-medium"
              >
                STT
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]  px-10 pt-5">
            <div className="flex justify-between">
              <h4 className="text-[20px] font-sans text-[#222] font-medium">
                Embarking
              </h4>
              <h5 className="text-[20px] font-sans text-[#222] font-medium">
                4
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]  px-10 pt-5">
            <div className="flex justify-between">
              <h4 className="text-[20px] font-sans text-[#222] font-medium">
                Through on same flight
              </h4>
              <h5 className="text-[20px] font-sans text-[#222] font-medium">
                0
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]  px-10 pt-5">
            <div className="flex justify-between">
              <h4 className="text-[20px] font-sans text-[#222] font-medium">
                Arrival Place
              </h4>
              <h5
                contentEditable={true}
                className="text-[20px] font-sans text-[#222] font-medium"
              >
                VIJ
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]  px-10 pt-5">
            <div className="flex justify-between">
              <h4 className="text-[20px] font-sans text-[#222] font-medium">
                Disembarking
              </h4>
              <h5 className="text-[20px] font-sans text-[#222] font-medium">
                0
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-black mt-5"></div>
      <div className="mt-10 flex justify-between border-b-2 border-[#222]">
        <div className="w-3/5 border-r-2  border-[#222]">
          <h2 className="text-[36px] font-semibold text-[#222] font-sans">
            DECLARATION OF HEALTH
          </h2>
          <p className="font-sans text-[24px] font-normal text-[#222] pr-5 pt-2">
            Persons on board with illnesses other than airsickness or the
            effects of accidents (including persons with symptoms or signs of
            illness such as rash, fever, chills, diarrhoea) as well as those
            cases of illness disembarked during the flight:
          </p>
          <h5 className="text-[30px] font-sans text-[#222] font-semibold py-5">
            None
          </h5>
          <div className="border-b border-[#222]"></div>
          <div className="border-b border-[#222] mt-10"></div>
          <p className="pt-2 font-sans text-[#222] font-normal text-[24px]">
            Any other condition on board which may lead to the spread of the
            disease:
          </p>
          <h5 className="text-[30px] font-sans text-[#222] font-semibold py-5">
            None
          </h5>
          <div className="border-b border-[#222]"></div>
          <div className="border-b border-[#222] mt-10"></div>
          <p className="font-sans text-[24px] font-normal text-[#222] pr-5 pt-2">
            Details of each disinsecting or sanitary treatment (place, date
            time, method) during the flight. If no dsinsecting has been carried
            out during the flight give details of most recent disinsecting:
          </p>
          <h5 className="text-[30px] font-sans text-[#222] font-semibold py-5">
            None
          </h5>
          <div className="border-b border-[#222]"></div>
          <div className="border-b border-[#222] mt-10"></div>
          <p className="my-10 font-sans text-[24px] font-normal">
            Signed, if required...
          </p>
        </div>
        <div className="w-2/5">
          <h2 className="text-[36px] font-semibold text-[#222] font-sans text-center border-b-2 border-[#222] pb-5">
            FOR OFFICIAL USE ONLY
          </h2>
          <h5 className="text-[32px] font-medium text-[#222] font-sans mt-5 pl-10">
            BLOCK:
          </h5>
          <h5 className="text-[32px] font-medium text-[#222] font-sans mt-10 pl-10">
            ETD:
          </h5>
        </div>
      </div>
      <div className="mt-1 border-b-2 border-[#222]"></div>
      <div className="mt-5">
        <p className="font-sans text-[24px] font-normal text-[#222] pr-5 pt-2">
          I declare that all statements and particulars contained in this
          General Declaration and in any supplementary forms required to be
          presented with this General Declaration are complete and true to the
          best of my knowledge and that all through passengers will
          continue/have continued on the flight
        </p>
      </div>
      <div className="mt-20">
        <h5 className="text-[24px] font-medium font-sans text-end">
          Signature............................................................................................
        </h5>
        <h4 className="font-sans text-[30px] mt-10 font-semibold text-[#222] text-end">
          Authorized Agent or Pilot-in Command
        </h4>
      </div>
    </>
  );
};

export default Tabsdata;
