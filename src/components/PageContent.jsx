import React from "react";
import PageContentElement from "./PageContentElement";

export default function PageContent() {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <PageContentElement />
        </div>
      </div>
    </section>
  );
}
