import React from "react";
import "./styles/loca16.css";

import HeaderBar from "./components/HeaderBar";
import NavLinks from "./components/NavLinks";
import SeriesDetails from "./components/SeriesDetails";
import VendorInfo from "./components/VendorInfo";
import ReviewsSection from "./components/ReviewsSection";
import QnaSection from "./components/QnaSection";
import SimilarTitlesSection from "./components/SimilarTitlesSection";

import { storeData } from "./data/seriesStore";

export default function Page() {
  const { product, vendor, reviews, qna, related } = storeData;

  return (
    <div className="ls16-root">
      <HeaderBar />
      <NavLinks />

      <main className="ls16-main">
        <aside className="ls16-side">
          <div className="ls16-card panel">
            <h3 className="ls16-sideTitle">Navegação</h3>
            <div className="ls16-sideNav">
              <NavLinks variant="vertical" activeId="home" />
            </div>
          </div>

          <div className="only-desktop">
            <VendorInfo info={vendor} />
          </div>
        </aside>

        <section className="ls16-content">
          <SeriesDetails item={product} />
          <ReviewsSection list={reviews} />
          <QnaSection list={qna} />
        </section>

        <aside className="ls16-rail">
          <div className="only-mobile">
            <VendorInfo info={vendor} />
          </div>

          <SimilarTitlesSection items={related} />
        </aside>
      </main>
    </div>
  );
}
