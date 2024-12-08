import React from "react";

const Tokenomics = () => {
  const sections = [
    {
      name: "Project Development",
      percentage: "7%",
      color: "#FEAC3A",
      width: "7%",
    },
    { name: "Marketing", percentage: "10%", color: "#DC8204", width: "10%" },
    { name: "Staking", percentage: "20%", color: "#F0F0F0", width: "20%" },
    { name: "Pre-Sale", percentage: "30%", color: "#D1D1DE", width: "30%" },
    {
      name: "Telegram Airdrop",
      percentage: "15%",
      color: "#3D3F6A",
      width: "15%",
    },
    { name: "Liquidity", percentage: "18%", color: "#121325", width: "18%" },
  ];

  const getColor = (color) => {
    return color === "#F0F0F0" || color === "#D1D1DE" ? "#121325" : "#FFFFFF";
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#F9F9F9]">
      <div className="relative w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden">
        <h2 className="text-6xl lg:text-8xl font-bold text-black mb-8 font-gluten text-center">
          Tokenomics
        </h2>
        <p className="text-2xl lg:text-4xl text-gray-700 font-gluten text-center mb-12">
          Distribution of the total supply of 20 billion $SHIM tokens
        </p>

        <div className="w-full flex flex-col items-center mb-12">
          <div className="relative w-full lg:w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden">
            <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[440px] space-y-4 lg:space-y-0 lg:space-x-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center font-gluten text-2xl font-bold rounded-[20px] shadow-md"
                  style={{
                    backgroundColor: section.color,
                    flex: section.width,
                    color: getColor(section.color),
                  }}
                >
                  {section.percentage}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="relative w-full lg:w-[95%] mx-auto bg-white rounded-[40px] border-2 border-black shadow-lg p-10 overflow-hidden">
            <p className="text-3xl font-bold lg:text-2xl text-gray-700 font-gluten text-start">
              Total Supply: 20 billion $SHIM
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="h-6 w-6 rounded-sm mr-2"
                    style={{ backgroundColor: section.color }}
                  ></div>
                  <span className="font-gluten text-lg">
                    {section.name} ({section.percentage})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
