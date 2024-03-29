import React from "react";
import { withNaming } from "@bem-react/classname";
import { Header } from "../../components";
import "./InnerLayout.less";

const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("inner-layout");

export const InnerLayout = (props) => {
  const { children } = props;
  return (
    <div className={b()}>
      <Header />
      <main className={b("main-container")}>{children}</main>
    </div>
  );
};
