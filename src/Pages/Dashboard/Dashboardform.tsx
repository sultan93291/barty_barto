import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import Tabsdata from "../../Components/Reusable/Tabsdata";

const Dashboardform = () => {
  return (
    <>
      <section className="bg-[#FFF] px-[60px] py-[100px]">
        <div className="flex justify-between">
          <h5 className="font-sans font-normal text-[24px] text-[#222]">
            EAPIS:{" "}
            <span contentEditable={true} className="text-[#E90B0B]">
              1765456
            </span>
          </h5>
          <h2 className="font-sans font-bold text-[48px] text-[#222] text-end">
            GENERAL DECLARATION
          </h2>
          <h5
            contentEditable={true}
            className="font-sans font-normal text-[24px] text-[#222]"
          >
            ICAO Annex 9, Appendix 1
          </h5>
        </div>
        <div className="flex justify-center">
          <Tabs className="w-full">
            <TabList className="flex gap-x-5 border-b border-[#E0E0E0] w-fit mx-auto">
              <Tab className="outline-0 cursor-pointer text-[#222] font-medium font-sans text-[30px]">
                Outward /
              </Tab>
              <Tab className="outline-0 cursor-pointer text-[#222] font-medium font-sans text-[30px]">
                Inward
              </Tab>
            </TabList>

            <TabPanel className="pt-18">
              <Tabsdata />
            </TabPanel>
            <TabPanel>
              <Tabsdata />
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <div className="flex gap-x-6 justify-end pt-5 pb-20">
        <button
          className="px-[38px] py-3 hover:bg-[#13A6EF] hover:text-white duration-300 ease-in-out 
        rounded-[3px]  border border-[#13A6EF] font-sans text-[15px] font-bold cursor-pointer flex gap-x-3 items-center"
        >
          Share
          <IoIosShareAlt />
        </button>
        <button
          className="px-[38px] py-3 rounded-[3px] bg-[#13A6EF]  border border-[#13A6EF] hover:bg-white
         hover:text-black duration-300 ease-in-out font-sans text-[15px] font-bold cursor-pointer text-white flex gap-x-3 items-center"
        >
          Save & Download
          <FaArrowDownLong />
        </button>
      </div>
    </>
  );
};

export default Dashboardform;
