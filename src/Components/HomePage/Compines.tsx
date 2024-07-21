import useIntract from "../GlobalComponents/useIntract";

interface Companies {
    icon: string;
  }

const Icons: Companies[] = [

    {
      icon: "adjustment_3249995.png",
    }, 
    {
      icon: "editing_16112453.png",
    }, 
    {
      icon: "web_10093837.png",
    }, 
    {
      icon: "developer_6867334.png",
    },

  ];

function Compines() {

  const { ref, isVisible } = useIntract();
    return (
        <section className="w-full mx-auto mb-10 bg-white  ">
            <div className="max-w-screen-xl pt-12 mx-auto ">
        <h1 className="mt-4 text-3xl font-bold text-center text-slate-700">
          Trusted by Over{" "}
          <span className="text-3xl text-orange-600 "> 100+ </span> Users{" "}
        </h1>
        <div ref={ref}  className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-4">
          {Icons.map((company, index) => (
            <>
              <div key={index} className="flex items-center justify-center p-4 ">
                <img src={company.icon} alt="Best Compinies" loading="lazy"  className={`h-auto max-w-full animate-fadeUp ${isVisible ? 'animate-popup' : '  '}`} />
              </div>
            </>
          ))}
        </div>
        </div>
      </section>
    );
}

export default Compines;