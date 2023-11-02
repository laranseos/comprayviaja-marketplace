import { FC, useEffect, useState } from "react";

const CustomizePage: FC = () => {
  const [type, setType] = useState<string>("ltr");
  const [layout, setLayout] = useState<string>("light");

  // useEffect(() => {
  //   const storedType = localStorage.getItem("type");
  //   const storedLayout = localStorage.getItem("layout");

  //   if (storedType) {
  //     setType(storedType);
  //     document.body.classList.add(storedType);
  //   }

  //   if (storedLayout) {
  //     setLayout(storedLayout);
  //     document.body.classList.add(storedLayout);
  //   }
  // }, []);

  const onChangeType = (ele: string) => {
    const oppositeType = ele === "rtl" ? "ltr" : "rtl";
    document.body.classList.toggle(ele);
    document.body.classList.toggle(oppositeType);
    localStorage.setItem("type", ele);
    setType(ele);
  };

  const onChangeLayout = (newLayout: string) => {
    // document.body.classList.remove(layout);
    if(newLayout == 'dark'){
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
    else{
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }

    localStorage.setItem("layout", newLayout);
    setLayout(newLayout);
  };

  return (
    <div className="theme-setting">
      <div className="dark">
        <input className="tgl tgl-skewed" id="dark"  type="checkbox" checked={layout === "dark"} onChange={(e) => onChangeLayout(e.target.checked ? "dark" : "light")} />
        <label className="tgl-btn" data-tg-off="Dark" data-tg-on="Light" htmlFor="dark"></label>
      </div>
      <div className="rtl">
        <input className="tgl tgl-skewed" id="rtl" type="checkbox" checked={type === "rtl"} onChange={(e) => onChangeType(e.target.checked ? "rtl" : "ltr")} />
        <label className="tgl-btn" data-tg-off="RTL" data-tg-on="LTR" htmlFor="rtl"></label>
      </div>
    </div>
  );
};

export default CustomizePage;
