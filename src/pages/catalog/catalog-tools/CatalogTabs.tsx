import React, { useState } from "react";
import "./style.css";
import Tabs from "../catalog-tabs/Tabs";
// Tabs Components
import TabOne from "../catalog-tabs/TabOne";
import TabTwo from "../catalog-tabs/TabTwo";
import TabThree from "../catalog-tabs/TabThree";
import TabFour from "../catalog-tabs/TabFour";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Описание",
    index: 1,
    Component: TabOne,
  },
  {
    label: "Характеристики",
    index: 2,
    Component: TabTwo,
  },
  {
    label: "Упаковка",
    index: 3,
    Component: TabThree,
  },
  {
    label: "Дополнительно",
    index: 4,
    Component: TabFour,
  },
];

export default function CatalogTabs() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="Catalogtabs font-jost mx-auto px-9   w-auto py-5 gap-4">
      <br />
      <div>
        <Tabs
          selectedTab={selectedTab}
          onClick={setSelectedTab}
          tabs={tabs}
          //   className="border border-gray-600 gap-5"
        />
      </div>
    </div>
  );
}
