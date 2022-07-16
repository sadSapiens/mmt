// import React from "react";

// const CatalogTabs = () => {
//   class FollowTabs {
//     navBar: HTMLElement | null;
//     navWrapper: HTMLElement | null;
//     navChildren!: NodeListOf<HTMLElement>;
//     activeChildClass: string;
//     activeNavChild!: HTMLElement;

//     constructor(
//       private navBarTarget: string,
//       private navWrapperTarget: string,
//       private navChildrenTarget: string,
//       private activeChildClassId: string
//     ) {
//       this.navBar = document.getElementById(this.navBarTarget);
//       this.navWrapper = document.getElementById(this.navWrapperTarget);
//       if (this.navWrapper instanceof HTMLElement) {
//         this.navChildren = this.navWrapper.querySelectorAll(
//           this.navChildrenTarget
//         );
//       }
//       this.activeChildClass = this.activeChildClassId;

//       this.setActive();
//       this.setInitial();
//       this.followMouse();
//       this.resetPosition();
//     }

//     private setWidth(value: number): void {
//       if (this.navBar) {
//         this.navBar.style.width = `${value}px`;
//       }
//     }

//     private setPosition(value: number): void {
//       if (this.navBar) {
//         this.navBar.style.left = `${value}px`;
//       }
//     }

//     private setActive(): void {
//       if (this.navChildren) {
//         for (let navChild of this.navChildren) {
//           if (navChild.classList.contains(this.activeChildClass)) {
//             this.activeNavChild = navChild;
//           }
//         }
//       }
//     }

//     private setInitial(): void {
//       if (this.activeNavChild) {
//         this.setWidth(this.activeNavChild.offsetWidth);
//         this.setPosition(this.activeNavChild.offsetLeft);
//       } else {
//         const firstChild = this.navChildren[0];
//         this.setWidth(firstChild.offsetWidth);
//         this.setPosition(firstChild.offsetLeft);
//       }
//     }

//     private resetPosition(): void {
//       if (this.navWrapper) {
//         this.navWrapper.addEventListener("mouseleave", () => {
//           this.setInitial();
//         });
//       }
//     }

//     private followMouse(): void {
//       if (this.navChildren) {
//         for (let navChild of this.navChildren) {
//           navChild.addEventListener("mouseover", () => {
//             this.setPosition(navChild.offsetLeft);
//             this.setWidth(navChild.offsetWidth);
//           });
//         }
//       }
//     }
//   }

//   new FollowTabs("navBar", "navWrapper", "a", "active");

//   return (
//     <>
//       <div>
//         <nav
//           id="navWrapper"
//           className="bg-gray-100 relative flex rounded overflow-hidden text-xs"
//         >
//           <a href="" className="block p-4">
//             Home
//           </a>

//           <a href="" className="block p-4">
//             About
//           </a>

//           <a href="" className="block p-4 active">
//             Blog
//           </a>

//           <a href="" className="block p-4">
//             Start Your Career
//           </a>

//           <span
//             id="navBar"
//             className="bg-indigo-500 h-0.5 absolute left-0 bottom-0 transition-all"
//           ></span>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default CatalogTabs;

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
